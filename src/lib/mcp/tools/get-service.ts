import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "../../../data/services";

export default defineTool({
  name: "get_service",
  title: "Get service details",
  description:
    "Get full details for one cleaning service: intro, what's included, benefits and FAQs. Use list_services for valid slugs.",
  inputSchema: {
    slug: z.string().describe("Service slug, e.g. 'deep-cleaning'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const service = services.find((s) => s.slug === slug);
    if (!service) {
      throw new ToolError(
        `Unknown service '${slug}'. Valid slugs: ${services.map((s) => s.slug).join(", ")}`,
      );
    }
    const detail = {
      slug: service.slug,
      name: service.name,
      description: service.shortDescription,
      intro: service.intro,
      whatsIncluded: service.whatsIncluded,
      benefits: service.benefits,
      faqs: service.faqs,
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(detail, null, 2) }],
      structuredContent: detail,
    };
  },
});