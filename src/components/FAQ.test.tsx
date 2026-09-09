/**
 * FAQ accordion — answers must exist in the initial HTML/DOM before any interaction
 * (SEO diagnostic 2026-09-09, lot A), while closed panels stay collapsed, out of the tab
 * order and out of the accessibility tree; keyboard, aria-expanded and id relations are kept.
 */
import { describe, it, expect } from "vitest";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";
import { render, screen, fireEvent, act } from "@testing-library/react";
import FAQ from "./FAQ";

const faqs = [
  { q: "How much does a recurring clean cost?", a: "Answer one: recurring pricing depends on home size." },
  { q: "Are your teams insured?", a: "Answer two: every team is bonded and insured." },
  { q: "Do I need to be home?", a: "Answer three: most clients are not home during the visit." },
];

const regionTags = (html: string) => html.match(/<div[^>]*role="region"[^>]*>/g) ?? [];

describe("FAQ — answers available without a click", () => {
  it("renderToString (server HTML, no JavaScript) contains every answer, all panels closed and hidden", () => {
    const html = renderToString(<FAQ faqs={faqs} />);
    for (const f of faqs) expect(html).toContain(f.a);
    const regions = regionTags(html);
    expect(regions).toHaveLength(faqs.length);
    for (const tag of regions) {
      expect(tag).toMatch(/\shidden(=""|\s|>)/);
      expect(tag).toContain('data-state="closed"');
    }
    expect((html.match(/aria-expanded="false"/g) ?? []).length).toBe(faqs.length);
  });

  it("DOM before any click: answers present, panels hidden, no focusable content, ids linked", () => {
    const { container } = render(<FAQ faqs={faqs} />);
    const regions = Array.from(container.querySelectorAll<HTMLElement>('[role="region"]'));
    expect(regions).toHaveLength(faqs.length);
    regions.forEach((region, i) => {
      expect(region.textContent).toContain(faqs[i].a);
      expect(region).toHaveAttribute("hidden");
      expect(region).toHaveAttribute("data-state", "closed");
      expect(region.querySelectorAll("a, button, input, select, textarea, [tabindex]")).toHaveLength(0);
    });
    const triggers = screen.getAllByRole("button");
    expect(triggers).toHaveLength(faqs.length);
    triggers.forEach((trigger, i) => {
      expect(trigger).toHaveAttribute("aria-expanded", "false");
      expect(trigger.getAttribute("aria-controls")).toBe(regions[i].id);
      expect(regions[i].getAttribute("aria-labelledby")).toBe(trigger.id);
    });
  });

  it("click opens one panel (visible, aria-expanded) and closes it again; others stay hidden", () => {
    const { container } = render(<FAQ faqs={faqs} />);
    const triggers = screen.getAllByRole("button");
    const regions = Array.from(container.querySelectorAll<HTMLElement>('[role="region"]'));

    fireEvent.click(triggers[1]);
    expect(regions[1]).not.toHaveAttribute("hidden");
    expect(regions[1]).toHaveAttribute("data-state", "open");
    expect(triggers[1]).toHaveAttribute("aria-expanded", "true");
    expect(regions[0]).toHaveAttribute("hidden");
    expect(regions[2]).toHaveAttribute("hidden");

    fireEvent.click(triggers[0]); // single accordion: switching closes the previous panel
    expect(regions[0]).not.toHaveAttribute("hidden");
    expect(regions[1]).toHaveAttribute("hidden");
    expect(triggers[1]).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(triggers[0]); // collapsible: clicking the open trigger closes it
    expect(regions[0]).toHaveAttribute("hidden");
    expect(triggers[0]).toHaveAttribute("aria-expanded", "false");
  });

  it("keyboard: arrow keys move focus between triggers, Enter toggles, focus never lands in a closed panel", () => {
    const { container } = render(<FAQ faqs={faqs} />);
    const triggers = screen.getAllByRole("button");
    const regions = Array.from(container.querySelectorAll<HTMLElement>('[role="region"]'));

    triggers[0].focus();
    expect(document.activeElement).toBe(triggers[0]);
    fireEvent.keyDown(triggers[0], { key: "ArrowDown" });
    expect(document.activeElement).toBe(triggers[1]);
    fireEvent.keyDown(triggers[1], { key: "End" });
    expect(document.activeElement).toBe(triggers[2]);
    fireEvent.keyDown(triggers[2], { key: "Home" });
    expect(document.activeElement).toBe(triggers[0]);

    fireEvent.click(triggers[0]); // Radix handles Enter/Space via the native button click
    expect(regions[0]).not.toHaveAttribute("hidden");
    fireEvent.click(triggers[0]);
    expect(regions[0]).toHaveAttribute("hidden");

    for (const region of regions) expect(region.contains(document.activeElement)).toBe(false);
  });

  it("hydrates the server-rendered markup without hydration warnings", async () => {
    const html = renderToString(<FAQ faqs={faqs} />);
    const host = document.createElement("div");
    host.innerHTML = html;
    document.body.appendChild(host);
    const messages: string[] = [];
    const original = console.error;
    console.error = (...args: unknown[]) => messages.push(args.map(String).join(" "));
    try {
      await act(async () => {
        hydrateRoot(host, <FAQ faqs={faqs} />);
      });
    } finally {
      console.error = original;
    }
    expect(messages.filter((m) => /hydrat|did not match|Minified React error #4(18|22|23|25)/i.test(m))).toEqual([]);
    const regions = Array.from(host.querySelectorAll<HTMLElement>('[role="region"]'));
    expect(regions).toHaveLength(faqs.length);
    regions.forEach((r, i) => {
      expect(r).toHaveAttribute("hidden");
      expect(r.textContent).toContain(faqs[i].a);
    });
    host.remove();
  });
});
