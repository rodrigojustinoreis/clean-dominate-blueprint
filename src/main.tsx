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

hydrateRoot(document.getElementById("root")!, <App />);
