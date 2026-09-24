/**
 * Regressão do alvo dos CTAs de orçamento (incidente 24/09).
 *
 * O defeito: `scrollIntoView({behavior:"smooth"})` fixa o deslocamento no instante do clique. Em
 * /services/post-construction-cleaning o documento cresceu 3.455 px durante a animação e a página
 * parou 3.574 px acima da âncora. Aqui o alvo passa a ser o FORMULÁRIO, sem animação, com
 * realinhamento enquanto o layout assenta.
 *
 * Nenhuma requisição de rede e nenhum envio de formulário.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { alignQuoteAnchor, cancelQuoteAlignment, QUOTE_ANCHOR_IDS } from "./hash-anchor";

const HEADER_H = 102;   // medido em produção a 1280 px
const GAP = 12;         // folga do helper

let scrollY = 0;
const scrollTo = vi.fn((_x: number, y: number) => {
  scrollY = y;
  Object.defineProperty(window, "scrollY", { value: y, configurable: true });
});

/** Monta header + seção #id com um <form> deslocado `formOffset` px abaixo do topo da seção. */
function montar(id: string, { secaoTop = 1000, formOffset = 600 } = {}) {
  document.body.innerHTML = `
    <header></header>
    <main><section id="${id}"><h2>t</h2><form><input name="bot-field" /><input id="name" /></form></section></main>`;
  const header = document.querySelector("header")!;
  header.getBoundingClientRect = () => ({ height: HEADER_H, top: 0, bottom: HEADER_H }) as DOMRect;
  const secao = document.getElementById(id)!;
  const form = secao.querySelector("form")!;
  secao.getBoundingClientRect = () => ({ top: secaoTop - scrollY, height: 900 }) as DOMRect;
  form.getBoundingClientRect = () => ({ top: secaoTop + formOffset - scrollY, height: 300 }) as DOMRect;
  return { secao, form };
}

beforeEach(() => {
  scrollY = 0;
  Object.defineProperty(window, "scrollY", { value: 0, configurable: true });
  window.scrollTo = scrollTo as unknown as typeof window.scrollTo;
  scrollTo.mockClear();
  (global as unknown as { ResizeObserver: unknown }).ResizeObserver =
    class { observe() {} unobserve() {} disconnect() {} };
});
afterEach(() => { cancelQuoteAlignment(); document.body.innerHTML = ""; vi.restoreAllMocks(); });

describe("alignQuoteAnchor", () => {
  it("leva o FORMULÁRIO para baixo do header, não o topo da seção", () => {
    const { form } = montar("quote");
    expect(alignQuoteAnchor("quote")).toBe(true);
    // form em 1600 absoluto; destino = 1600 - (102 + 12)
    expect(scrollTo).toHaveBeenCalledWith(0, 1600 - (HEADER_H + GAP));
    expect(form.getBoundingClientRect().top).toBe(HEADER_H + GAP);
  });

  it("nunca rola para posição negativa quando o formulário está acima do offset", () => {
    montar("quote", { secaoTop: 10, formOffset: 20 });
    alignQuoteAnchor("quote");
    expect(scrollTo.mock.calls.every(([, y]) => y >= 0)).toBe(true);
  });

  it("devolve false e não rola quando a âncora não existe na página", () => {
    document.body.innerHTML = "<header></header><main></main>";
    expect(alignQuoteAnchor("quote")).toBe(false);
    expect(scrollTo).not.toHaveBeenCalled();
  });

  it("atende as duas línguas: #quote e #cotizacion", () => {
    expect([...QUOTE_ANCHOR_IDS]).toEqual(["quote", "cotizacion"]);
    montar("cotizacion");
    expect(alignQuoteAnchor("cotizacion")).toBe(true);
    expect(scrollTo).toHaveBeenCalled();
  });

  it("clique repetido termina na mesma posição, sem acumular", () => {
    montar("quote");
    alignQuoteAnchor("quote");
    const primeiro = scrollTo.mock.calls.at(-1)![1];
    alignQuoteAnchor("quote");
    const segundo = scrollTo.mock.calls.at(-1)![1];
    expect(segundo).toBe(primeiro);
  });

  it("move o foco para a SEÇÃO — nunca para o form nem para um campo", () => {
    const { secao, form } = montar("quote");
    const focoNoForm = vi.fn();
    form.addEventListener("focusin", focoNoForm);
    alignQuoteAnchor("quote");
    expect(document.activeElement).toBe(secao);
    expect(secao.getAttribute("tabindex")).toBe("-1");
    // `onFocusCapture` do QuoteForm dispara form_start: nada pode focar dentro do form.
    expect(focoNoForm).not.toHaveBeenCalled();
  });

  it("o honeypot bot-field não é o alvo", () => {
    const { form } = montar("quote");
    alignQuoteAnchor("quote");
    expect((document.activeElement as HTMLElement)?.getAttribute("name")).not.toBe("bot-field");
    expect(form.contains(document.activeElement)).toBe(false);
  });

  it("uma nova solicitação cancela a anterior: um só alinhamento ativo", () => {
    montar("quote");
    alignQuoteAnchor("quote");
    alignQuoteAnchor("quote");
    cancelQuoteAlignment();
    const antes = scrollTo.mock.calls.length;
    window.dispatchEvent(new Event("load"));
    expect(scrollTo.mock.calls.length).toBe(antes);
  });

  it("não usa rolagem animada: o destino é final de imediato", () => {
    montar("quote");
    // jsdom não implementa scrollIntoView; define antes de espionar.
    (Element.prototype as unknown as { scrollIntoView: () => void }).scrollIntoView = () => {};
    const spy = vi.spyOn(Element.prototype, "scrollIntoView");
    alignQuoteAnchor("quote");
    const suave = spy.mock.calls.some(([o]) => (o as ScrollIntoViewOptions | undefined)?.behavior === "smooth");
    expect(suave).toBe(false);
  });
});
