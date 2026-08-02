import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseAnon } from "../supabase";

export default defineTool({
  name: "request_quote",
  title: "Request a free cleaning quote",
  description:
    "Submit a free cleaning quote request to Capital Clean Care. Only submit with the customer's explicit confirmation of their real contact details.",
  inputSchema: {
    name: z.string().describe("Customer full name."),
    phone: z.string().describe("Customer phone number."),
    email: z.string().describe("Customer email address."),
    zip: z.string().describe("Service address zip code."),
    service: z.string().describe("Requested service, e.g. 'deep-cleaning'."),
    bedrooms: z.string().optional().describe("Number of bedrooms."),
    bathrooms: z.string().optional().describe("Number of bathrooms."),
    frequency: z.string().optional().describe("one-time, weekly, bi-weekly or monthly."),
    preferredDate: z.string().optional().describe("Preferred date, YYYY-MM-DD."),
    message: z.string().optional().describe("Any extra notes from the customer."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async (input) => {
    const supabase = supabaseAnon();
    const { error } = await supabase.from("quote_requests").insert({
      name: input.name,
      phone: input.phone,
      email: input.email,
      zip: input.zip,
      service: input.service,
      bedrooms: input.bedrooms ?? null,
      bathrooms: input.bathrooms ?? null,
      frequency: input.frequency ?? null,
      preferred_date: input.preferredDate ?? null,
      message: input.message ?? null,
    });
    if (error) throw new ToolError(`Could not submit the quote request: ${error.message}`);
    return {
      content: [
        {
          type: "text" as const,
          text: `Quote request submitted for ${input.name}. The team will reach out by phone or email shortly.`,
        },
      ],
      structuredContent: { submitted: true },
    };
  },
});