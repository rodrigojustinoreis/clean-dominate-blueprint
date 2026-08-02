import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "@/data/services";

export default defineTool({
  name: "list_services",
  title: "List cleaning services",
  description:
    "List every cleaning service Capital Clean Care offers, with slug and a short description.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = services.map((s) => ({
      slug: s.slug,
      name: s.name,
      description: s.shortDescription,
    }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { services: items },
    };
  },
});