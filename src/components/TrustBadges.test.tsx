/**
 * TrustBadges — trust batch 2 (2026-09-10): the six cards keep their titles/order/icons, the copy no longer makes
 * universal safety, coverage, timing or customer-count claims, and compact mode still hides descriptions.
 */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import TrustBadges from "./TrustBadges";

const TITLES = [
  "Licensed & Insured",
  "Background-Checked Teams",
  "Products Chosen for Your Home",
  "100% Satisfaction Guarantee",
  "5-Star Rated",
  "Serving the DMV Since 2015",
];
const DESCRIPTIONS = [
  "Ask us about business and insurance documentation before booking.",
  "Ask us about the screening process for the team assigned to your home.",
  "We follow product labels and surface guidance. Tell us about pets, allergies or fragrance sensitivities before your visit.",
  "Something missed? Contact us about our re-clean guarantee.",
  "Read customer feedback on our official review profiles.",
  "Residential cleaning across Maryland, Washington DC and Northern Virginia.",
];
const REMOVED = [
  "EPA Safer Choice Products",
  "Only plant-based, non-toxic products",
  "safe for children, pets, and allergy sufferers",
  "covers every visit",
  "rigorous background screening",
  "within 24 hours",
  "no questions asked",
  "Facebook",
  "Trusted by hundreds of homeowners",
  "Every guarantee, certification",
  "most trusted",
];

describe("TrustBadges — full mode", () => {
  it("renders the six cards in order with the revised descriptions and the revised subtitle", () => {
    const { container } = render(<TrustBadges />);
    const titles = Array.from(container.querySelectorAll("p.font-semibold")).map((p) => p.textContent);
    expect(titles).toEqual(TITLES);
    for (const d of DESCRIPTIONS) expect(screen.getByText(d)).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Your Home Deserves a Team You Can Trust" })).toBeInTheDocument();
    expect(screen.getByText("Learn about our team, product choices and re-clean guarantee before you book.")).toBeInTheDocument();
    expect(container.querySelectorAll("svg")).toHaveLength(7); // shield in the eyebrow + one icon per card
    expect(container.querySelector("section")).toHaveClass("bg-secondary/50");
  });

  it("no longer contains the removed promises", () => {
    const html = renderToString(<TrustBadges />);
    for (const r of REMOVED) expect(html).not.toContain(r);
  });

  it("withBackground={false} renders a plain wrapper (no section background)", () => {
    const { container } = render(<TrustBadges withBackground={false} />);
    expect(container.querySelector("section")).toBeNull();
    expect(container.firstElementChild).toHaveClass("py-12");
  });
});

describe("TrustBadges — compact mode", () => {
  it("keeps the six titles, hides descriptions, heading and subtitle", () => {
    const { container } = render(<TrustBadges compact />);
    const titles = Array.from(container.querySelectorAll("p.font-semibold")).map((p) => p.textContent);
    expect(titles).toEqual(TITLES);
    for (const d of DESCRIPTIONS) expect(screen.queryByText(d)).toBeNull();
    expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
    expect(container.querySelector(".grid")).toHaveClass("grid-cols-2");
    const html = renderToString(<TrustBadges compact />);
    for (const r of REMOVED) expect(html).not.toContain(r);
  });
});
