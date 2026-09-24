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
import { alignQuoteAnchor, cancelQuoteAlignment, quoteAnchorFromClick, QUOTE_ANCHOR_IDS } from "./hash-anchor";

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

  it("foca um marcador logo antes do form — nunca o form nem um campo", () => {
    const { form } = montar("quote");
    const focoNoForm = vi.fn();
    form.addEventListener("focusin", focoNoForm);
    alignQuoteAnchor("quote");
    const marcador = document.activeElement as HTMLElement;
    expect(marcador.getAttribute("data-quote-focus")).toBe("");
    expect(marcador.getAttribute("tabindex")).toBe("-1");
    expect(marcador.nextElementSibling).toBe(form);       // imediatamente antes do form
    expect(form.contains(marcador)).toBe(false);          // e fora dele
    expect(marcador.getAttribute("aria-label")).toBe("Quote form");
    expect(marcador.hasAttribute("aria-hidden")).toBe(false);
    expect(marcador.style.display).not.toBe("none");
    // `onFocusCapture` do QuoteForm dispara form_start: nada pode focar dentro do form.
    expect(focoNoForm).not.toHaveBeenCalled();
  });

  it("o marcador é reutilizado, não se acumula, e fala espanhol em #cotizacion", () => {
    const { form } = montar("quote");
    alignQuoteAnchor("quote"); alignQuoteAnchor("quote"); alignQuoteAnchor("quote");
    expect(form.parentElement!.querySelectorAll("[data-quote-focus]").length).toBe(1);
    montar("cotizacion");
    alignQuoteAnchor("cotizacion");
    expect((document.activeElement as HTMLElement).getAttribute("aria-label")).toBe("Formulario de cotización");
  });

  it("sem form na seção, o foco recai na própria seção", () => {
    document.body.innerHTML = `<header></header><section id="quote"><p>sem formulario</p></section>`;
    const sec = document.getElementById("quote")!;
    sec.getBoundingClientRect = () => ({ top: 500, height: 100 }) as DOMRect;
    (Element.prototype as unknown as { scrollIntoView: () => void }).scrollIntoView = () => {};
    expect(alignQuoteAnchor("quote")).toBe(true);
    expect(document.activeElement).toBe(sec);
  });

  it("o honeypot bot-field não é o alvo, e o foco fica fora do form", () => {
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

describe("quoteAnchorFromClick — contrato do clique", () => {
  const loc = { origin: "https://capitalcleancare.com", pathname: "/services/deep-cleaning" };
  const plain = { button: 0, metaKey: false, ctrlKey: false, shiftKey: false, altKey: false, defaultPrevented: false };
  const link = (href: string, attrs: Record<string, string> = {}) => {
    const a = document.createElement("a");
    a.href = new URL(href, loc.origin + loc.pathname).toString();
    for (const [k, v] of Object.entries(attrs)) a.setAttribute(k, v);
    return a;
  };

  it("aceita #quote e /#... no mesmo caminho, inclusive com barra final", () => {
    expect(quoteAnchorFromClick(link("#quote"), loc, plain)).toBe("quote");
    expect(quoteAnchorFromClick(link("/services/deep-cleaning#quote"), loc, plain)).toBe("quote");
    expect(quoteAnchorFromClick(link("/services/deep-cleaning/#quote"), loc, plain)).toBe("quote");
  });

  it("aceita #cotizacion na página ES correspondente", () => {
    const es = { origin: loc.origin, pathname: "/es/contacto" };
    const a = document.createElement("a");
    a.href = new URL("#cotizacion", es.origin + es.pathname).toString();
    expect(quoteAnchorFromClick(a, es, plain)).toBe("cotizacion");
    // e continua recusando quando o caminho atual é outro
    expect(quoteAnchorFromClick(a, loc, plain)).toBeNull();
  });

  it("recusa outro caminho — a navegação tem de acontecer", () => {
    expect(quoteAnchorFromClick(link("/contact#quote"), loc, plain)).toBeNull();
  });

  it("recusa outra âncora e âncora vazia", () => {
    expect(quoteAnchorFromClick(link("#pricing"), loc, plain)).toBeNull();
    expect(quoteAnchorFromClick(link("/services/deep-cleaning"), loc, plain)).toBeNull();
  });

  it("recusa hash malformado sem lançar", () => {
    const a = document.createElement("a");
    a.setAttribute("href", "#%E0%A4%A");
    expect(() => quoteAnchorFromClick(a, loc, plain)).not.toThrow();
    expect(quoteAnchorFromClick(a, loc, plain)).toBeNull();
  });

  it("recusa modificadores, botão do meio e evento já tratado", () => {
    const a = link("#quote");
    for (const m of [{ metaKey: true }, { ctrlKey: true }, { shiftKey: true }, { altKey: true }, { button: 1 }, { defaultPrevented: true }]) {
      expect(quoteAnchorFromClick(a, loc, { ...plain, ...m })).toBeNull();
    }
  });

  it("recusa target e download", () => {
    expect(quoteAnchorFromClick(link("#quote", { target: "_blank" }), loc, plain)).toBeNull();
    expect(quoteAnchorFromClick(link("#quote", { download: "" }), loc, plain)).toBeNull();
    expect(quoteAnchorFromClick(link("#quote", { target: "_self" }), loc, plain)).toBe("quote");
  });
});

describe("jornada por teclado", () => {
  it("depois do alinhamento, o próximo tabulável em ordem de documento está dentro do formulário", () => {
    const { secao, form } = montar("quote");
    alignQuoteAnchor("quote");
    // O foco fica na seção; o Tab seguinte segue a ordem do documento, e o próximo
    // elemento focável é um campo do formulário — não algo acima, no hero.
    const marcador = document.activeElement as HTMLElement;
    expect(marcador.getAttribute("data-quote-focus")).toBe("");
    // O próximo focável em ordem de documento, depois do marcador, é um campo do formulário.
    const focaveis = Array.from(document.querySelectorAll<HTMLElement>("input, button, select, textarea, a[href]"));
    const proximo = focaveis.find((el) => marcador.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING);
    expect(proximo).toBeDefined();
    expect(form.contains(proximo!)).toBe(true);
    void secao;
  });

  it("prefers-reduced-motion é respeitado por construção: nenhuma rolagem animada é solicitada", () => {
    montar("quote");
    const chamadas: unknown[] = [];
    window.scrollTo = ((...a: unknown[]) => { chamadas.push(a); }) as unknown as typeof window.scrollTo;
    alignQuoteAnchor("quote");
    // window.scrollTo(x, y) posicional: nunca o objeto com behavior:"smooth".
    expect(chamadas.every((a) => typeof (a as unknown[])[0] === "number")).toBe(true);
  });
});
