import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { cities } from "../../../data/locations";

export default defineTool({
  name: "list_service_areas",
  title: "List service areas",
  description:
    "List the cities and counties Capital Clean Care serves across Maryland, Washington DC and Northern Virginia. Optionally filter by state abbreviation or a name search.",
  inputSchema: {
    state: z.string().optional().describe("Filter by state abbreviation, e.g. MD, DC, VA."),
    search: z.string().optional().describe("Case-insensitive substring match on the city name."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ state, search }) => {
    const stateFilter = state?.trim().toUpperCase();
    const searchFilter = search?.trim().toLowerCase();
    const items = cities
      .filter((c) => (stateFilter ? c.state.toUpperCase() === stateFilter : true))
      .filter((c) => (searchFilter ? c.name.toLowerCase().includes(searchFilter) : true))
      .map((c) => ({ name: c.name, slug: c.slug, state: c.state, county: c.county ?? null }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { count: items.length, areas: items },
    };
  },
});