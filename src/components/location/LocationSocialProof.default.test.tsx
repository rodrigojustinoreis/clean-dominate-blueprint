/**
 * O bloco de prova social ganhou dois props opcionais (`heading`, `note`) para que uma página possa
 * deixar de afirmar a cidade de quem avaliou — `pickReviews` roteia por hash as nove avaliações
 * verificadas e `RealReview` não carrega localidade.
 *
 * Este teste existe para garantir que o DEFAULT não mudou: qualquer página que não passe os props
 * continua renderizando exatamente o mesmo H2 e nenhuma linha extra.
 */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LocationSocialProof from "./LocationSocialProof";

const base = { cityName: "Bethesda", citySlug: "bethesda-md", serviceSlug: "house-cleaning", serviceLabel: "House Cleaning" };
const montar = (extra = {}) =>
  render(<MemoryRouter><LocationSocialProof {...base} {...extra} /></MemoryRouter>);

describe("LocationSocialProof — o default não muda", () => {
  it("sem os props novos, o H2 mantém a redação de sempre e não há linha extra", () => {
    const { container } = montar();
    const h2 = container.querySelector("h2")!;
    expect(h2.textContent).toBe("Bethesda Homeowners Love Our House Cleaning");
    // A linha opcional só existe quando `note` é passado.
    expect(h2.parentElement!.querySelector("p")).toBeNull();
  });

  it("com `heading`, o H2 é substituído e a cidade deixa de ser afirmada", () => {
    const { container } = montar({ heading: "What Capital Clean Care Clients Say" });
    const h2 = container.querySelector("h2")!;
    expect(h2.textContent).toBe("What Capital Clean Care Clients Say");
    expect(h2.textContent).not.toContain("Bethesda");
  });

  it("com `note`, a linha aparece logo abaixo do H2", () => {
    const nota = "Google reviews from clients across our service area. We do not publish reviewer locations.";
    const { container } = montar({ heading: "What Capital Clean Care Clients Say", note: nota });
    expect(container.querySelector("h2")!.parentElement!.querySelector("p")!.textContent).toBe(nota);
  });

  it("as avaliações renderizadas continuam sendo as reais, com nome e texto", () => {
    montar();
    expect(screen.getByText(/Client Reviews/i)).toBeTruthy();
  });
});
