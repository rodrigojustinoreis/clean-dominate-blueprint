/**
 * Keep a hash target (e.g. `#quote`) aligned to the viewport while the layout above it is still
 * settling — late images without reserved space, client-only widgets mounting after hydration,
 * embeds. A single `scrollIntoView()` at navigation time lands correctly and is then pushed away
 * when content above the anchor grows or shrinks (reproduced on cold entry / reload of
 * `/services/post-construction-cleaning#quote`, 2026-09-17).
 *
 * Event-driven, bounded and user-respecting rather than a blind timer:
 * - re-aligns on every document size change reported by ResizeObserver and whenever the anchor's own
 *   viewport position drifts from where it was placed (checked per animation frame while the window
 *   is open), plus once on `load`;
 * - stops after `settleMs` without changes once the document has finished loading (embeds that grab
 *   focus right after `load` would otherwise leave the page scrolled to the iframe), `maxMs` at most;
 * - stops immediately on the first user scroll intent (wheel, touch, keyboard, pointer), so it
 *   never fights the visitor; programmatic scrolls do not cancel it.
 * `scrollIntoView()` is used without smooth behaviour, so reduced-motion preferences are honoured.
 */
export interface KeepAnchorAlignedOptions {
  /** Stop after this long without any document size change (ms). */
  settleMs?: number;
  /** Hard cap for the whole re-alignment window (ms). */
  maxMs?: number;
  /**
   * Element to bring into view instead of the anchor itself — the quote form inside `#quote`, so the
   * visitor lands on the fields and not on the section heading, photo and badges above them.
   */
  target?: HTMLElement;
  /** Viewport offset for `target`, in px; a function is resolved on every alignment. */
  offsetPx?: number | (() => number);
}

const USER_INTENT_EVENTS = ["wheel", "touchstart", "keydown", "pointerdown"] as const;

/**
 * Only one alignment window may be open at a time. A new request (another click, a route change)
 * cancels the previous one, so no listener, observer, timer or animation frame survives it.
 */
let activeAlignment: (() => void) | undefined;

export function keepAnchorAligned(el: HTMLElement, opts: KeepAnchorAlignedOptions = {}): () => void {
  activeAlignment?.();
  const settleMs = opts.settleMs ?? 600;
  const maxMs = opts.maxMs ?? 8000;
  // When a `target` is given the alignment brings THAT element to `offsetPx` from the top of the
  // viewport (the quote form under a sticky header), instead of the anchor to its scroll-margin.
  const aimEl = opts.target ?? el;
  const usingTarget = opts.target !== undefined;
  let stopped = false;
  let observer: ResizeObserver | null = null;
  let settleTimer: ReturnType<typeof setTimeout> | undefined;

  // Where the aim element should sit once aligned. Without a `target` this is the anchor's CSS
  // scroll-margin-top (e.g. `scroll-mt-20` → 80px), derived from the stylesheet and not from a
  // measurement taken right after the scroll, so a transient layout is detected as drift. With a
  // `target` the offset is resolved on every alignment, because a sticky header can change height.
  const cssScrollMargin = (() => {
    const css = typeof getComputedStyle === "function" ? getComputedStyle(el).scrollMarginTop : "";
    const n = parseFloat(css || "0");
    return Number.isFinite(n) ? n : 0;
  })();
  const expectedTopOf = () => {
    if (!usingTarget) return cssScrollMargin;
    const o = opts.offsetPx;
    const n = typeof o === "function" ? o() : o ?? 0;
    return Number.isFinite(n) ? n : 0;
  };
  let aligns = 0;
  let unchangedAligns = 0;
  const align = () => {
    if (stopped) return;
    const expectedTop = expectedTopOf();
    const drifted = Math.abs(aimEl.getBoundingClientRect().top - expectedTop) > 2;
    const before = window.scrollY;
    if (usingTarget) {
      // Absolute position, so the sticky header never covers the target. No smooth behaviour: the
      // destination must be final immediately, which is exactly what the animated scroll got wrong.
      const top = aimEl.getBoundingClientRect().top + window.scrollY - expectedTop;
      window.scrollTo(0, Math.max(0, top));
    } else {
      el.scrollIntoView();
    }
    aligns += 1;
    // Converged only when the anchor is off target AND scrolling cannot move it (e.g. near the document
    // end) — three such attempts, or 40 alignments overall, end the window. Alignments that were already
    // on target (native hash scroll, load re-check) never count as convergence.
    unchangedAligns = drifted && window.scrollY === before ? unchangedAligns + 1 : 0;
    if (unchangedAligns >= 3 || aligns >= 40) stop();
  };

  const stop = () => {
    if (stopped) return;
    stopped = true;
    observer?.disconnect();
    observer = null;
    clearTimeout(settleTimer);
    clearTimeout(maxTimer);
    for (const type of USER_INTENT_EVENTS) window.removeEventListener(type, stop);
    window.removeEventListener("load", onLoad);
    if (activeAlignment === stop) activeAlignment = undefined;
  };
  activeAlignment = stop;

  // The window only closes after the document has finished loading: third-party embeds (YouTube
  // players on the service pages) grab focus ~20 ms after `load`, which scrolls the page to the
  // iframe. Until then keep re-arming; maxMs still caps everything.
  const armSettle = () => {
    clearTimeout(settleTimer);
    settleTimer = setTimeout(() => {
      if (document.readyState !== "complete") armSettle();
      else stop();
    }, settleMs);
  };

  const onLoad = () => {
    align();
    armSettle();
  };
  align();
  for (const type of USER_INTENT_EVENTS) window.addEventListener(type, stop, { passive: true });
  window.addEventListener("load", onLoad);
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

  // Layout changes above the anchor do not always change the document height (one block shrinks while
  // another grows), so also watch the anchor's own viewport position frame by frame during the same
  // bounded window and re-align when it drifts — measured movement, not a timer guess.
  if (typeof requestAnimationFrame !== "undefined") {
    const watch = () => {
      if (stopped) return;
      if (Math.abs(aimEl.getBoundingClientRect().top - expectedTopOf()) > 2) {
        align();
        armSettle();
      }
      requestAnimationFrame(watch);
    };
    requestAnimationFrame(watch);
  }

  return stop;
}

/** The two in-page quote anchors: English and Spanish. */
export const QUOTE_ANCHOR_IDS = ["quote", "cotizacion"] as const;

/** Gap kept between the sticky header and the top of the form. */
const HEADER_GAP_PX = 12;

/** Marker attribute, so the same node is reused instead of piling up on every click. */
const FOCUS_MARKER_ATTR = "data-quote-focus";

/**
 * A focus target immediately before the form and outside it. Created at runtime, so the prerendered
 * HTML is untouched and nothing changes for a visitor without JavaScript.
 *
 * Takes no space and is not hidden from assistive technology: it has an accessible name and is
 * reachable only programmatically (`tabindex="-1"`), which is exactly what a skip target should be.
 */
function ensureFocusMarker(form: HTMLElement, spanish: boolean): HTMLElement | null {
  const parent = form.parentElement;
  if (!parent) return null;
  let marker = parent.querySelector<HTMLElement>(`:scope > [${FOCUS_MARKER_ATTR}]`);
  if (!marker) {
    marker = document.createElement("span");
    marker.setAttribute(FOCUS_MARKER_ATTR, "");
    marker.setAttribute("tabindex", "-1");
    // No layout impact and no `display:none`, which would make it unfocusable.
    marker.style.cssText = "display:inline-block;width:0;height:0;overflow:hidden;outline:none";
  }
  marker.setAttribute("aria-label", spanish ? "Formulario de cotización" : "Quote form");
  if (marker.nextElementSibling !== form) parent.insertBefore(marker, form);
  return marker;
}

const headerOffset = () => {
  const header = document.querySelector("header");
  const h = header ? header.getBoundingClientRect().height : 0;
  return (Number.isFinite(h) ? h : 0) + HEADER_GAP_PX;
};

/**
 * Bring the quote FORM into view and keep it there while the layout settles.
 *
 * Why the form and not the section: the anchor is the section container, and above the fields sit a
 * heading, prose, a photo and trust badges, so aligning the section leaves the first field off
 * screen (measured: section at 79.5 px with the first field at 772 px in a 720 px viewport).
 *
 * Why no smooth behaviour: an animated `scrollIntoView` commits to the offset computed when it
 * starts. On `/services/post-construction-cleaning` the document grew 3,455 px while the animation
 * ran, and the page stopped 3,574 px above the anchor. Aligning without animation and then
 * re-aligning while the layout settles is what the hash path already does.
 *
 * Returns false when the anchor is not on this page, so the caller can leave the browser alone.
 */
export function alignQuoteAnchor(id: string): boolean {
  if (typeof document === "undefined") return false;
  const section = document.getElementById(id);
  if (!section) return false;
  const form = section.querySelector("form");
  keepAnchorAligned(section, form ? { target: form as HTMLElement, offsetPx: headerOffset } : {});

  // Keyboard journey: put the sequential navigation starting point immediately before the form, so
  // the next Tab enters the first field.
  //
  // Measured on the preview: focusing the SECTION sent the next Tab to the phone / Google / Facebook
  // links, which sit inside the same `space-y-4` wrapper right before the form, and on Bethesda that
  // scrolled the page back up 687 px. Focusing the form itself is not an option either: it carries
  // `onFocusCapture` for `form_start`, so it would report a form start the visitor never made — and a
  // field would also open the mobile keyboard. The form's previous sibling is no good as a target
  // either: it is `hidden` below `lg`.
  //
  // So a marker of our own goes immediately before the form and outside it: non-interactive, reused,
  // focusable only programmatically, with an accessible name, no `display:none`, no `aria-hidden`
  // and no layout impact. Tab stays native; nothing is intercepted.
  const alvoFoco = (form && ensureFocusMarker(form as HTMLElement, id === "cotizacion")) || section;
  if (alvoFoco === section && !section.hasAttribute("tabindex")) section.setAttribute("tabindex", "-1");
  try {
    (alvoFoco as HTMLElement).focus({ preventScroll: true });
  } catch {
    /* focus is a convenience here; never let it break the scroll */
  }
  return true;
}

/**
 * Should this click be aligned by us, or left to the browser?
 *
 * Only a plain left click on a same-page link whose hash is one of the quote anchors. Anything the
 * visitor meant to do with the href itself — new tab, new window, download, another path — is left
 * alone. The hash is compared literally, never decoded, so a malformed hash elsewhere on the page
 * cannot throw.
 */
export function quoteAnchorFromClick(
  anchor: HTMLAnchorElement,
  loc: { origin: string; pathname: string },
  modifiers: { button: number; metaKey: boolean; ctrlKey: boolean; shiftKey: boolean; altKey: boolean; defaultPrevented: boolean },
): string | null {
  if (modifiers.defaultPrevented || modifiers.button !== 0) return null;
  if (modifiers.metaKey || modifiers.ctrlKey || modifiers.shiftKey || modifiers.altKey) return null;
  if (anchor.hasAttribute("download")) return null;
  const target = anchor.getAttribute("target");
  if (target && target !== "_self") return null;
  const id = (anchor.hash || "").slice(1);
  if (!(QUOTE_ANCHOR_IDS as readonly string[]).includes(id)) return null;
  if (anchor.origin && anchor.origin !== loc.origin) return null;
  const strip = (p: string) => p.replace(/\/+$/, "");
  if (strip(anchor.pathname) !== strip(loc.pathname)) return null;
  return id;
}

/** Cancels any alignment in flight — used on navigation. */
export function cancelQuoteAlignment(): void {
  activeAlignment?.();
  activeAlignment = undefined;
}
