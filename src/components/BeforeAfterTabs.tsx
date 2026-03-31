import { useState } from "react";

interface BeforeAfterTabsProps {
  /** Combined side-by-side image (before on left, after on right) */
  combinedImage: string;
  caption: string;
  alt: string;
}

const BeforeAfterTabs = ({ combinedImage, caption, alt }: BeforeAfterTabsProps) => {
  const [tab, setTab] = useState<"before" | "after">("before");

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      {/* Tabs */}
      <div className="flex">
        <button
          onClick={() => setTab("before")}
          className={`flex-1 py-3 text-sm font-bold tracking-wide transition-colors ${
            tab === "before"
              ? "bg-red-500 text-white"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          BEFORE
        </button>
        <button
          onClick={() => setTab("after")}
          className={`flex-1 py-3 text-sm font-bold tracking-wide transition-colors ${
            tab === "after"
              ? "bg-[#2E7D32] text-white"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          AFTER
        </button>
      </div>

      {/* Image container — crops left or right half of the combined image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
        <img
          src={combinedImage}
          alt={`${alt} — ${tab}`}
          className="absolute top-0 h-full transition-all duration-500 ease-in-out pointer-events-none"
          style={{
            width: "200%",
            left: tab === "before" ? "0%" : "-100%",
            objectFit: "cover",
          }}
          draggable={false}
        />
      </div>

      {/* Caption */}
      <div className="p-4 text-center">
        <p className="text-sm font-medium text-gray-700">{caption}</p>
      </div>
    </div>
  );
};

export default BeforeAfterTabs;
