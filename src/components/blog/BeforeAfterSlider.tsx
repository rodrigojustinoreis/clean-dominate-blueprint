import { useState, useRef, useCallback } from "react";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

const BeforeAfterSlider = ({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - left) / width) * 100));
    setPosition(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-2xl overflow-hidden shadow-xl cursor-col-resize select-none ${className}`}
      style={{ aspectRatio: "16 / 9" }}
      onMouseDown={(e) => { dragging.current = true; updatePosition(e.clientX); }}
      onMouseMove={(e) => { if (dragging.current) updatePosition(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
      onTouchMove={(e) => { e.preventDefault(); updatePosition(e.touches[0].clientX); }}
    >
      {/* After image — base layer */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
        loading="lazy"
      />

      {/* Before image — clipped to left of handle */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
        loading="lazy"
      />

      {/* Vertical divider + circular handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.35)] pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center border border-white/60">
          <ChevronsLeftRight className="h-5 w-5 text-gray-600" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 bg-black/55 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 bg-black/55 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
        {afterLabel}
      </span>
    </div>
  );
};

export default BeforeAfterSlider;
