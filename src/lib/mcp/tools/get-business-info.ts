import { defineTool } from "@lovable.dev/mcp-js";
import { BUSINESS_INFO } from "@/data/business-info";

export default defineTool({
  name: "get_business_info",
  title: "Get business info",
  description:
    "Get Capital Clean Care's public contact details, address, business hours, rating and differentiators.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: BUSINESS_INFO.name,
      phone: BUSINESS_INFO.phone.display,
      email: BUSINESS_INFO.email,
      website: BUSINESS_INFO.url,
      address: BUSINESS_INFO.address,
      hours: BUSINESS_INFO.hours,
      rating: BUSINESS_INFO.rating,
      differentiators: BUSINESS_INFO.differentiators,
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});