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
let scrollPos = 0;
const bumpScroll = () => {
  scrollPos += 100;
  Object.defineProperty(window, "scrollY", { value: scrollPos, configurable: true });
};

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
    scrollSpy = vi.fn(bumpScroll); // a real scrollIntoView moves the page; jsdom's scrollY is otherwise frozen at 0
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

  it("re-aligns when the anchor drifts even if the document height does not change (frame watcher)", () => {
    // jsdom reports no scroll-margin-top, so the aligned position is top = 0
    let top = 0;
    el.getBoundingClientRect = () => ({ top, bottom: top + 600, left: 0, right: 0, width: 0, height: 600, x: 0, y: top, toJSON: () => ({}) }) as DOMRect;
    scrollSpy.mockImplementation(() => { top = 0; bumpScroll(); });
    start(el, { settleMs: 600, maxMs: 5000 });
    expect(scrollSpy).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(100); // frames pass, anchor stays put → no extra alignment
    expect(scrollSpy).toHaveBeenCalledTimes(1);
    top = -444; // content above shrank; body height unchanged, so no ResizeObserver callback
    vi.advanceTimersByTime(50);
    expect(scrollSpy).toHaveBeenCalledTimes(2);
    expect(top).toBe(0);
    vi.advanceTimersByTime(700); // settle → stop; later drift is ignored
    top = 300;
    vi.advanceTimersByTime(100);
    expect(scrollSpy).toHaveBeenCalledTimes(2);
  });

  it("detects a scroll that landed in the wrong place because the layout was transient at that instant", () => {
    // The scroll lands the anchor 444px above the viewport (transient layout), then the layout reverts.
    let top = -444;
    let landings = 0;
    el.getBoundingClientRect = () => ({ top, bottom: top + 600, left: 0, right: 0, width: 0, height: 600, x: 0, y: top, toJSON: () => ({}) }) as DOMRect;
    scrollSpy.mockImplementation(() => { landings += 1; top = landings === 1 ? -444 : 0; bumpScroll(); });
    start(el, { settleMs: 600, maxMs: 5000 });
    expect(scrollSpy).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(40); // next frames: anchor is not where CSS says it should be → re-align
    expect(scrollSpy).toHaveBeenCalledTimes(2);
    expect(top).toBe(0);
    vi.advanceTimersByTime(200);
    expect(scrollSpy).toHaveBeenCalledTimes(2);
  });

  it("stops once the page can no longer move the anchor (converged) instead of looping", () => {
    const top = 300; // e.g. near the end of the document the anchor cannot reach the top
    el.getBoundingClientRect = () => ({ top, bottom: top + 600, left: 0, right: 0, width: 0, height: 600, x: 0, y: top, toJSON: () => ({}) }) as DOMRect;
    scrollSpy.mockImplementation(() => { /* scrollY does not change */ });
    start(el, { settleMs: 600, maxMs: 5000 });
    vi.advanceTimersByTime(200);
    expect(scrollSpy.mock.calls.length).toBeLessThanOrEqual(3);
    expect(disconnected).toBe(1);
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
