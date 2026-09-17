import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { keepAnchorAligned } from "./hash-anchor";

type RoCallback = (entries: unknown[], observer: unknown) => void;

let roCallbacks: RoCallback[] = [];
let observed: Element[] = [];
let disconnected = 0;
let active: Array<() => void> = [];
const start = (el: HTMLElement, o?: Parameters<typeof keepAnchorAligned>[1]) => { const c = keepAnchorAligned(el, o); active.push(c); return c; };

class FakeResizeObserver {
  cb: RoCallback;
  constructor(cb: RoCallback) {
    this.cb = cb;
    roCallbacks.push(cb);
  }
  observe(el: Element) {
    observed.push(el);
  }
  unobserve() {}
  disconnect() {
    disconnected += 1;
  }
}

const layoutChanged = () => roCallbacks.forEach((cb) => cb([], null));

describe("keepAnchorAligned", () => {
  let el: HTMLElement;
  let scrollSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.useFakeTimers();
    roCallbacks = [];
    observed = [];
    disconnected = 0;
    (globalThis as unknown as { ResizeObserver: unknown }).ResizeObserver = FakeResizeObserver;
    el = document.createElement("section");
    el.id = "quote";
    document.body.appendChild(el);
    scrollSpy = vi.fn();
    el.scrollIntoView = scrollSpy as unknown as typeof el.scrollIntoView;
  });

  afterEach(() => {
    active.forEach((c) => c());
    active = [];
    vi.useRealTimers();
    el.remove();
    delete (globalThis as unknown as { ResizeObserver?: unknown }).ResizeObserver;
  });

  it("aligns immediately and again on every layout change while the page settles", () => {
    start(el, { settleMs: 600, maxMs: 5000 });
    expect(scrollSpy).toHaveBeenCalledTimes(1);
    expect(observed).toContain(document.body);
    layoutChanged();
    layoutChanged();
    expect(scrollSpy).toHaveBeenCalledTimes(3);
  });

  it("stops after settleMs without layout changes and disconnects the observer", () => {
    start(el, { settleMs: 600, maxMs: 5000 });
    vi.advanceTimersByTime(599);
    layoutChanged(); // resets the settle window
    expect(scrollSpy).toHaveBeenCalledTimes(2);
    vi.advanceTimersByTime(600);
    expect(disconnected).toBe(1);
    layoutChanged(); // ignored after stop
    expect(scrollSpy).toHaveBeenCalledTimes(2);
  });

  it("never runs longer than maxMs even if the layout keeps changing", () => {
    start(el, { settleMs: 600, maxMs: 2000 });
    for (let i = 0; i < 10; i++) {
      vi.advanceTimersByTime(300);
      layoutChanged();
    }
    const calls = scrollSpy.mock.calls.length;
    expect(disconnected).toBe(1);
    layoutChanged();
    expect(scrollSpy).toHaveBeenCalledTimes(calls);
    expect(calls).toBeLessThanOrEqual(1 + 7); // 1 initial + changes inside the 2 s window
  });

  it("stops on the first user scroll intent and does not fight the visitor", () => {
    start(el, { settleMs: 600, maxMs: 5000 });
    window.dispatchEvent(new Event("wheel"));
    layoutChanged();
    expect(scrollSpy).toHaveBeenCalledTimes(1);
    expect(disconnected).toBe(1);
  });

  it("returns a cancel function and re-aligns on window load", () => {
    const cancel = start(el, { settleMs: 600, maxMs: 5000 });
    window.dispatchEvent(new Event("load"));
    expect(scrollSpy).toHaveBeenCalledTimes(2);
    cancel();
    layoutChanged();
    window.dispatchEvent(new Event("load"));
    expect(scrollSpy).toHaveBeenCalledTimes(2);
  });

  it("works without ResizeObserver (single alignment + load re-alignment, bounded by timers)", () => {
    delete (globalThis as unknown as { ResizeObserver?: unknown }).ResizeObserver;
    start(el, { settleMs: 600, maxMs: 5000 });
    expect(scrollSpy).toHaveBeenCalledTimes(1);
    window.dispatchEvent(new Event("load"));
    expect(scrollSpy).toHaveBeenCalledTimes(2);
    vi.advanceTimersByTime(700);
    window.dispatchEvent(new Event("load"));
    expect(scrollSpy).toHaveBeenCalledTimes(2);
  });
});
