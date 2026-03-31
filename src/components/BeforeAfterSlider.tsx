import { useState, useRef, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  height?: number;
  caption?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  height = 300,
  caption,
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const getPosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    getPosition(e.clientX);
  }, [getPosition]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    getPosition(e.clientX);
  }, [getPosition]);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  // Prevent page scroll while dragging on mobile
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const prevent = (e: TouchEvent) => {
      if (dragging.current) e.preventDefault();
    };
    el.addEventListener("touchmove", prevent, { passive: false });
    return () => el.removeEventListener("touchmove", prevent);
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className="relative overflow-hidden select-none cursor-col-resize"
        style={{ height, borderRadius: 12 }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* AFTER image (full, underneath) */}
        <img
          src={afterImage}
          alt="After cleaning"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* BEFORE image (clipped to left side) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${position}%` }}
        >
          <img
            src={beforeImage}
            alt="Before cleaning"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: containerRef.current?.offsetWidth ?? "100%" }}
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_6px_rgba(0,0,0,0.4)] pointer-events-none"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-none"
          style={{ left: `${position}%` }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 4l-4 4 4 4M16 4l4 4-4 4" />
          </svg>
        </div>

        {/* BEFORE label */}
        <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/50 text-white text-xs font-bold tracking-widest pointer-events-none">
          {beforeLabel}
        </div>

        {/* AFTER label */}
        <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/50 text-white text-xs font-bold tracking-widest pointer-events-none">
          {afterLabel}
        </div>
      </div>

      {caption && (
        <p className="text-center text-sm text-muted-foreground mt-2">{caption}</p>
      )}
    </div>
  );
};

export default BeforeAfterSlider;
