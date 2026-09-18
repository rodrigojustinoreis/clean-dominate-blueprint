/**
 * SEO master plan — lot 2, commit B (PriceCalculator accessible names, CODEX-NEXT-BATCH-CONSENSUS.md).
 *
 * PSI/Lighthouse on the home page flagged four Select triggers (buttons) and the square-footage slider without an
 * accessible name. The fix lives only in the consumer (PriceCalculator.tsx): `htmlFor`/`id` pairs on the four
 * Label/SelectTrigger couples and an `aria-label` on the Slider (ui/slider forwards it to the thumb). Real Radix
 * components are rendered under jsdom; nothing is mocked that would hide ARIA. Prices, formula, state and submit
 * are unchanged (see the commit diff: attributes only).
 */
import { describe, it, expect, beforeAll } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PriceCalculator from "@/components/PriceCalculator";

beforeAll(() => {
  class RO { observe() {} unobserve() {} disconnect() {} }
  (globalThis as unknown as { ResizeObserver: unknown }).ResizeObserver = RO;
  if (!Element.prototype.scrollIntoView) Element.prototype.scrollIntoView = () => {};
  if (!Element.prototype.hasPointerCapture) Element.prototype.hasPointerCapture = () => false;
  if (!Element.prototype.releasePointerCapture) Element.prototype.releasePointerCapture = () => {};
});

function mount() {
  return render(
    <MemoryRouter>
      <PriceCalculator />
    </MemoryRouter>
  );
}

const NAMES: Array<[string, RegExp]> = [
  ["calc-service", /service type/i],
  ["calc-frequency", /frequency/i],
  ["calc-bedrooms", /bedrooms/i],
  ["calc-bathrooms", /bathrooms/i],
];

describe("PriceCalculator accessible names", () => {
  it("the four select triggers are comboboxes named by their visible labels", () => {
    mount();
    for (const [id, name] of NAMES) {
      const trigger = screen.getByRole("combobox", { name });
      expect(trigger.id).toBe(id);
      expect(document.querySelector(`label[for="${id}"]`)).not.toBeNull();
    }
    expect(screen.getAllByRole("combobox")).toHaveLength(4);
  });

  it("the square-footage slider thumb has an accessible name matching the visible label", () => {
    mount();
    const slider = screen.getByRole("slider", { name: /approximate square footage/i });
    expect(slider.getAttribute("aria-valuemin")).toBe("500");
    expect(slider.getAttribute("aria-valuemax")).toBe("5000");
    expect(screen.getByText(/Approx\. Square Footage/)).toBeInTheDocument();
  });

  it("the name persists after a keyboard selection and the chosen value is shown", () => {
    mount();
    const trigger = screen.getByRole("combobox", { name: /bedrooms/i });
    trigger.focus();
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    const listbox = screen.getByRole("listbox");
    const option = within(listbox).getByRole("option", { name: "3" });
    fireEvent.keyDown(option, { key: "Enter" });
    const after = screen.getByRole("combobox", { name: /bedrooms/i });
    expect(after.id).toBe("calc-bedrooms");
    expect(after.textContent).toContain("3");
  });
});
