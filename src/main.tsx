import { hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ── Google Translate crash guard ─────────────────────────────────────────────
// Chrome's "Translate this page" replaces text nodes (wrapping them in <font> tags).
// React then calls removeChild / insertBefore on nodes whose real parent is now the
// injected wrapper, throwing "NotFoundError: ... not a child of this node" during
// commit — which unmounts the whole tree and blanks the page. Guarding these two DOM
// methods to no-op on already-detached nodes keeps translation working without the
// crash. See facebook/react#11538.
if (typeof Node === "function" && Node.prototype) {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) {
      return child;
    }
    return originalRemoveChild.call(this, child) as T;
  };

  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(this: Node, newNode: T, referenceNode: Node | null): T {
    if (referenceNode && referenceNode.parentNode !== this) {
      return newNode;
    }
    return originalInsertBefore.call(this, newNode, referenceNode) as T;
  };
}

// ── Paint first, hydrate second ───────────────────────────────────────────────
// The HTML is fully prerendered, so nothing is gained by hydrating in the same task
// that finishes parsing the document. On mobile that task ran before the browser had
// produced a single frame, holding FCP/LCP hostage to React hydration (observed first
// paint 1.3–2.4s with everything loaded at 0.5s). Yield one frame so the static HTML
// paints, then hydrate. Interactivity arrives ~1 frame later; markup is identical.
const hydrate = () => hydrateRoot(document.getElementById("root")!, <App />);
if (typeof requestAnimationFrame === "function") {
  requestAnimationFrame(() => setTimeout(hydrate, 0));
} else {
  hydrate();
}
