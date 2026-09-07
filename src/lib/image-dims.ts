// Intrinsic pixel sizes of the home-page images that render inside fixed-aspect containers
// (Fase 3 / Lote 2, 2026-09-07). width/height let the browser reserve the box before the file
// loads (CLS) and satisfy Lighthouse's "image elements have explicit width and height". The CSS
// (object-cover inside aspect-/h- containers) still decides the rendered size.
const DIMS: Record<string, [number, number]> = {
  "/images/services/card-house-cleaning.webp": [1000, 667],
  "/images/services/card-deep-cleaning.webp": [1000, 667],
  "/images/services/kitchen-hero.webp": [1280, 853],
  "/images/services/bathroom-hero.webp": [1280, 845],
  "/images/services/living-area-hero.webp": [1280, 960],
  "/images/services/move-out-cleaning.webp": [1280, 720],
  "/images/team/team-post-construction.webp": [640, 847],
  "/images/services/recurring-cleaning.webp": [1280, 720],
  "/images/services/eco-friendly-cleaning.webp": [1280, 720],
  "/images/blog/condo-interior.webp": [1000, 750],
  "/images/blog/maid-service-hero.webp": [1280, 1707],
  "/images/services/airbnb-cleaning.webp": [1280, 720],
  "/images/services/office-cleaning.webp": [1280, 720],
  "/images/team/real-team-two-members.webp": [800, 1067],
  "/images/team/eco-friendly-products.webp": [800, 800],
  "/images/team/two-team-members.jpg": [760, 570],
  "/images/team/team-polishing-fridge.jpg": [760, 570],
  "/images/team/team-mopping-bright-room.jpg": [760, 570],
  "/images/team/team-scrubbing-door-detail.jpg": [446, 760],
  "/images/team/team-window-blinds-pro.webp": [800, 1200],
  "/images/team/team-supplies-basket.webp": [800, 800],
  "/images/team/team-tile-scrubber.jpg": [760, 570],
  "/images/team/team-two-large-room.jpg": [574, 760],
};

/** `{ width, height }` for a known image path, `{}` otherwise (spread onto an <img>). */
export function imgDims(src: string): { width?: number; height?: number } {
  const d = DIMS[src];
  return d ? { width: d[0], height: d[1] } : {};
}
