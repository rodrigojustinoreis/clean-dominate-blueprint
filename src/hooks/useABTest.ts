/**
 * Lightweight A/B testing utility.
 * Assigns each visitor a persistent variant and tracks which CTA they see.
 * Usage:
 *   const variant = useABTest("hero-cta", ["Get a Free Quote", "Book Now — It's Free"]);
 */
import { useState } from "react";

export function useABTest<T>(testName: string, variants: T[]): T {
  const [variant] = useState<T>(() => {
    const key = `ab_${testName}`;
    const stored = localStorage.getItem(key);
    if (stored !== null) {
      const idx = parseInt(stored, 10);
      if (idx >= 0 && idx < variants.length) return variants[idx];
    }
    const idx = Math.floor(Math.random() * variants.length);
    localStorage.setItem(key, String(idx));

    // Fire analytics event if GA is available
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "ab_test_assigned", {
        test_name: testName,
        variant_index: idx,
        variant_label: String(variants[idx]),
      });
    }

    return variants[idx];
  });

  return variant;
}
