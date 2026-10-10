/**
 * Verifiable credentials shown on the home trust band and next to the contact form (lot of
 * 2026-10-09). Single source for status, links and copy. Facts checked by Codex on 2026-10-09:
 *  - BBB: "Capital Clean Care LLC is BBB Accredited" since 2026-10-08; rating NR (Not Rated).
 *    Text reference and link only; the graphic seal needs the licensed asset from the BBB portal.
 *  - Google: Local Services Ads business verification complete ("Google Verified"). This is the
 *    current program name; the former Google Guaranteed money-back guarantee was discontinued.
 *    No public per-business verification link was available in the recorded checks, so the link
 *    goes to Google's help page.
 * Nothing here is a rating, a certification of quality or a guarantee.
 */
export const CREDENTIALS_CHECKED_ON = "2026-10-09";

export type Credential = {
  id: "bbb" | "google";
  label: string;
  /** Short qualifier shown next to the label. */
  detail: string;
  href: string;
  /** Visible link text, named for what the destination really is. */
  linkText: string;
  /** One sentence used in the disclosure. */
  explain: string;
};

export const CREDENTIALS: readonly Credential[] = [
  {
    id: "bbb",
    label: "BBB Accredited",
    detail: "Since October 2026",
    href: "https://www.bbb.org/us/md/silver-spring/profile/house-cleaning/capital-clean-care-llc-0241-236108525",
    linkText: "Verify BBB accreditation",
    explain:
      "Accredited since October 2026. Accreditation means the Better Business Bureau reviewed our business and we agreed to its Standards for Trust; it is separate from a BBB rating or from customer reviews. View our BBB business profile and accreditation.",
  },
  {
    id: "google",
    label: "Google Verified",
    detail: "Local Services Ads",
    href: "https://support.google.com/localservices/answer/16498018?hl=en",
    linkText: "About Google verification",
    explain:
      "Our business has completed Google Local Services Ads verification (business details, license acknowledgement, background and insurance checks for that program). This is not a Google money-back guarantee.",
  },
] as const;

export const GOOGLE_REVIEWS = {
  href: "https://www.google.com/maps?cid=1774420840079969097",
  text: "Read customer reviews on Google",
} as const;

export const CREDENTIALS_FAQ = {
  q: "What can I check before booking?",
  a: "You can check our BBB profile and read customer reviews on Google. Before booking, ask us to confirm the cleaning scope and price for your home.",
} as const;
