/**
 * ConversionCTA — trust batch 2 (2026-09-10): only the paragraph copy changed in both modes. Headings, buttons,
 * hrefs, phone number, analytics handlers and the city interpolation are preserved. Analytics is mocked (no network).
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { renderToString } from "react-dom/server";

vi.mock("@/lib/analytics", () => ({ trackPhoneClick: vi.fn(), trackBookNowClick: vi.fn() }));
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";
import ConversionCTA from "./ConversionCTA";

const phoneMock = vi.mocked(trackPhoneClick);
const bookMock = vi.mocked(trackBookNowClick);

beforeEach(() => {
  phoneMock.mockClear();
  bookMock.mockClear();
});

describe("ConversionCTA — full mode", () => {
  it("with a city: heading and paragraph interpolate the location once, buttons and handlers preserved", () => {
    render(<ConversionCTA cityName="Rockville" />);
    expect(screen.getByRole("heading", { level: 2, name: "Get Your Free Cleaning Quote in Rockville" })).toBeInTheDocument();
    const p = screen.getByText(/Request a written cleaning quote in Rockville\./);
    expect(p.textContent).toBe("Request a written cleaning quote in Rockville. Tell us your priorities so we can confirm the scope and visit details.");
    expect(p.textContent).not.toContain("in in");
    const quote = screen.getByRole("link", { name: /Get a Free Quote/ });
    const phone = screen.getByRole("link", { name: /\(240\) 704-2551/ });
    expect(quote).toHaveAttribute("href", "#quote");
    expect(phone).toHaveAttribute("href", "tel:+12407042551");
    for (const a of [quote, phone]) a.addEventListener("click", (e) => e.preventDefault());
    fireEvent.click(quote);
    fireEvent.click(phone);
    expect(bookMock).toHaveBeenCalledWith("conversion_cta_full");
    expect(phoneMock).toHaveBeenCalledWith("conversion_cta_full");
    expect(screen.getByText("Licensed & Insured")).toBeInTheDocument();
    expect(screen.getByText("Eco-Friendly")).toBeInTheDocument();
    expect(screen.getByText("Background-Checked")).toBeInTheDocument();
  });

  it("without a city: no dangling ' in', old copy absent", () => {
    render(<ConversionCTA />);
    expect(screen.getByRole("heading", { level: 2, name: "Get Your Free Cleaning Quote" })).toBeInTheDocument();
    expect(screen.getByText(/Request a written cleaning quote\./).textContent).toBe(
      "Request a written cleaning quote. Tell us your priorities so we can confirm the scope and visit details.",
    );
    const html = renderToString(<ConversionCTA />);
    expect(html).not.toContain("Join hundreds of happy homeowners");
    expect(html).not.toContain("satisfaction guaranteed.");
  });
});

describe("ConversionCTA — compact mode", () => {
  it("keeps the heading, buttons and handlers; the paragraph asks for a written quote", () => {
    render(<ConversionCTA cityName="Bethesda" variant="compact" />);
    expect(screen.getByRole("heading", { level: 3, name: "Ready for a Cleaner Home in Bethesda?" })).toBeInTheDocument();
    expect(screen.getByText("Tell us about your home and cleaning priorities. Request a written quote with no obligation.")).toBeInTheDocument();
    const quote = screen.getByRole("link", { name: /Get a Free Quote/ });
    const phone = screen.getByRole("link", { name: /\(240\) 704-2551/ });
    expect(quote).toHaveAttribute("href", "#quote");
    expect(phone).toHaveAttribute("href", "tel:+12407042551");
    for (const a of [quote, phone]) a.addEventListener("click", (e) => e.preventDefault());
    fireEvent.click(quote);
    fireEvent.click(phone);
    expect(bookMock).toHaveBeenCalledWith("conversion_cta_compact");
    expect(phoneMock).toHaveBeenCalledWith("conversion_cta_compact");
    const html = renderToString(<ConversionCTA variant="compact" />);
    expect(html).not.toContain("in minutes");
    expect(html).not.toContain("no hidden fees");
    // Without a city the heading text is "Ready for a Cleaner Home?" (SSR may place a comment node before the "?")
    const { container } = render(<ConversionCTA variant="compact" />);
    const h3 = Array.from(container.querySelectorAll("h3")).map((h) => h.textContent);
    expect(h3).toContain("Ready for a Cleaner Home?");
  });
});
