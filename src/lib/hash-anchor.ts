/**
 * Keep a hash target (e.g. `#quote`) aligned to the viewport while the layout above it is still
 * settling — late images without reserved space, client-only widgets mounting after hydration,
 * embeds. A single `scrollIntoView()` at navigation time lands correctly and is then pushed away
 * when content above the anchor grows or shrinks (reproduced on cold entry / reload of
 * `/services/post-construction-cleaning#quote`, 2026-09-17).
 *
 * Event-driven, bounded and user-respecting rather than a blind timer:
 * - re-aligns on every document size change reported by ResizeObserver (falls back to a single
 *   `load` re-alignment where ResizeObserver is unavailable);
 * - stops after `settleMs` without size changes, or `maxMs` at most;
 * - stops immediately on the first user scroll intent (wheel, touch, keyboard, pointer), so it
 *   never fights the visitor; programmatic scrolls do not cancel it.
 * `scrollIntoView()` is used without smooth behaviour, so reduced-motion preferences are honoured.
 */
export interface KeepAnchorAlignedOptions {
  /** Stop after this long without any document size change (ms). */
  settleMs?: number;
  /** Hard cap for the whole re-alignment window (ms). */
  maxMs?: number;
}

const USER_INTENT_EVENTS = ["wheel", "touchstart", "keydown", "pointerdown"] as const;

export function keepAnchorAligned(el: HTMLElement, opts: KeepAnchorAlignedOptions = {}): () => void {
  const settleMs = opts.settleMs ?? 600;
  const maxMs = opts.maxMs ?? 5000;
  let stopped = false;
  let observer: ResizeObserver | null = null;
  let settleTimer: ReturnType<typeof setTimeout> | undefined;

  const align = () => {
    if (!stopped) el.scrollIntoView();
  };

  const stop = () => {
    if (stopped) return;
    stopped = true;
    observer?.disconnect();
    clearTimeout(settleTimer);
    clearTimeout(maxTimer);
    for (const type of USER_INTENT_EVENTS) window.removeEventListener(type, stop);
    window.removeEventListener("load", align);
  };

  const armSettle = () => {
    clearTimeout(settleTimer);
    settleTimer = setTimeout(stop, settleMs);
  };

  align();
  for (const type of USER_INTENT_EVENTS) window.addEventListener(type, stop, { passive: true });
  window.addEventListener("load", align);
  const maxTimer = setTimeout(stop, maxMs);
  armSettle();

  if (typeof ResizeObserver !== "undefined") {
    observer = new ResizeObserver(() => {
      align();
      armSettle();
    });
    observer.observe(document.documentElement);
    observer.observe(document.body);
  }

  return stop;
}
