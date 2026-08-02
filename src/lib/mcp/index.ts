import { defineMcp } from "@lovable.dev/mcp-js";
import listServices from "./tools/list-services";
import getService from "./tools/get-service";
import listServiceAreas from "./tools/list-service-areas";
import getBusinessInfo from "./tools/get-business-info";
import requestQuote from "./tools/request-quote";

export default defineMcp({
  name: "capital-clean-launch",
  title: "Capital Clean Launch",
  version: "0.1.0",
  instructions:
    "Tools for Capital Clean Care, an eco-friendly house cleaning company serving Maryland, Washington DC and Northern Virginia. Use `list_services` and `get_service` for service details, `list_service_areas` for coverage, `get_business_info` for contact details, and `request_quote` to submit a free quote request once the customer confirms their details.",
  tools: [listServices, getService, listServiceAreas, getBusinessInfo, requestQuote],
});