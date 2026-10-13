import { Link } from "react-router-dom";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import { FAQSchema } from "@/components/SchemaMarkup";
import { StaticTrustChips } from "@/components/home/HomeTrustMarquee";

/**
 * Body of /resources/eco-cleaning-tips-winters-maryland (winter cleaning checklist), 2026-10-12.
 * Source: Rodrigo Reis's own account of the team's winter process, organized and edited (Codex V3
 * package, winter-content-package-2026-10-11) and re-edited here for plain, direct English. The host
 * template (BlogPost.tsx) owns the H1, byline, date, title/description and Article/Breadcrumb schema.
 * Styling is Tailwind only: a <style> element in page JSX breaks hydration in this pipeline.
 * Photos are the team's own (public/images/blog/winter-cleaning); captions say only what they show.
 */

const IMG = "/images/blog/winter-cleaning";
const EPA_AIR = "https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home";
const EPA_DUCTS = "https://www.epa.gov/indoor-air-quality-iaq/should-you-have-air-ducts-your-home-cleaned";
const EPA_MOLD = "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home";
const EPA_SC = "https://www.epa.gov/saferchoice";
const NWFA = "https://woodfloors.org/maintenance/";
const CRI = "https://carpet-rug.org/wp-content/uploads/2019/03/CRI-205-Residential.pdf";

export const WINTER_FAQS = [
  {
    q: "Why do you clean from the top down?",
    a: "Dust you knock off a high surface lands on whatever is below it. Doing ceilings, fans, curtains and trim before floors and carpets means less rework. It does not mean no dust will ever settle again.",
  },
  {
    q: "How often should I change my air filter in winter?",
    a: "Follow the equipment and filter maker's instructions. I suggest looking at an accessible filter once a month during heating season and replacing it when it is due, not on a fixed monthly schedule. If you are not sure of the size, rating or how to reach it safely, ask an HVAC professional.",
  },
  {
    q: "Is cleaning vent covers the same as air duct cleaning?",
    a: "No. We wash covers that come off safely and clean the surface dust around them. We do not clean inside the duct system. A suspected problem inside the system needs an HVAC or duct specialist.",
  },
  {
    q: "Can carpets be cleaned in winter?",
    a: "Yes, when the carpet suits the method and the room can dry properly. Talk through the rooms, the method and when you need the space back before you book.",
  },
  {
    q: "How do you dry carpet after cleaning in winter?",
    a: "Keep air moving with fans as directed, keep the heat on, do not shut the room up while the carpet is damp, and stay off it until it is dry. Open a window only if the weather allows. If drying stalls, call the provider.",
  },
  {
    q: "Does every bedroom need a HEPA air purifier?",
    a: "No. A purifier is an optional extra for rooms where you want more filtration. It does not replace dusting or fix a moisture problem. If you add one, size it to the room (its CADR) and keep up with the filter.",
  },
  {
    q: "Are replacement filters and purifiers included in the price?",
    a: "Only if the written quote lists them. You can book the cleaning without buying a purifier or adding every task on this checklist.",
  },
  {
    q: "How long does a Winter-Ready Home Reset take?",
    a: "It depends on the rooms, their condition, how many filters and vent covers there are, and the carpet areas. We confirm the scope before scheduling. Carpet drying is separate: the visit can end before the carpet is ready to walk on.",
  },
];

const CHECKLIST: [string, string, string][] = [
  ["HVAC filters", "Find each filter, check it and replace the ones that are due.", "The right size and rating for the system, and safe access."],
  ["Vent covers", "Take off the covers that come off safely, wash them and let them dry before they go back.", "Material, finish and how the cover is installed."],
  ["Dust, top to bottom", "Work from the ceiling down with HEPA-filter vacuums and the right tools.", "Delicate surfaces, fabric care labels and reach."],
  ["Carpets", "Vacuum first. Extraction, if it suits the carpet, comes after the dusty work.", "Material, stains and how the room will dry."],
  ["Products", "Match the product to each surface for the whole visit.", "Surface and label directions."],
  ["Room purifier (optional)", "Supply and set up a portable HEPA unit if you choose one.", "Room size, placement and the cost of the unit and filters."],
  ["Entryway", "Keep boots, grit, slush and water near the door.", "Mats that suit the floor, and quick cleanup."],
  ["Upkeep", "Check dust, filters and busy areas again during the season.", "Your household and the equipment instructions."],
];

const TOC: [string, string][] = [
  ["winter-checklist", "The checklist at a glance"],
  ["winter-decide", "Clean it, replace it or call a specialist?"],
  ["winter-step-1", "Step 1: HVAC filters"],
  ["winter-step-2", "Step 2: Vent covers"],
  ["winter-step-3", "Step 3: Dust from the top down"],
  ["winter-step-4", "Step 4: Carpets last"],
  ["winter-step-5", "Step 5: The right products"],
  ["winter-step-6", "Step 6: A bedroom purifier, if it fits"],
  ["winter-entry", "The front door"],
  ["winter-quote", "What your quote should include"],
  ["winter-faq", "Winter cleaning questions"],
];

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-primary underline underline-offset-4 hover:no-underline">{children}</a>
);
const L = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-primary underline underline-offset-4 hover:no-underline">{children}</Link>
);

const Photo = ({ base, small, large, w, h, alt, caption, portrait }: { base: string; small: number; large: number; w: number; h: number; alt: string; caption: string; portrait?: boolean }) => (
  <figure className={`not-prose my-8 ${portrait ? "mx-auto max-w-sm" : ""}`}>
    <img
      src={`${IMG}/${base}-${large}.webp`}
      srcSet={`${IMG}/${base}-${small}.webp ${small}w, ${IMG}/${base}-${large}.webp ${large}w`}
      sizes={portrait ? "(min-width: 640px) 384px, 100vw" : "(min-width: 768px) 720px, 100vw"}
      alt={alt}
      width={w}
      height={h}
      loading="lazy"
      decoding="async"
      className="h-auto w-full rounded-2xl shadow-md"
    />
    <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">{caption}</figcaption>
  </figure>
);

const WinterCleaningArticle = () => (
  <article
    className={[
      "max-w-none text-[17px] leading-[1.75] text-foreground",
      // Direct children only (the not-prose blocks keep their own styles). The prose plugin is not installed here.
      "[&>h2]:mb-4 [&>h2]:mt-12 [&>h2]:scroll-mt-28 [&>h2]:font-heading [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:leading-tight [&>h2]:tracking-[-0.02em] md:[&>h2]:text-[1.85rem]",
      "[&>p]:mb-5 [&>ul]:mb-6 [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-6 [&_li]:marker:text-primary",
      "[&>div>h3]:mb-2 [&>div>h3]:mt-7 [&>div>h3]:scroll-mt-28 [&>div>h3]:font-heading [&>div>h3]:text-xl [&>div>h3]:font-bold [&>div>p]:mb-4",
      "[&>p.lead]:text-lg [&>p.lead]:text-muted-foreground",
    ].join(" ")}
  >
    <FAQSchema faqs={WINTER_FAQS} />

    <p className="lead text-muted-foreground">
      Most winter lists stop at the gutters, the pipes and the furnace. This one starts inside the house: get the
      built-up dust out first, in the right order, then decide what extra filtration is worth adding.
    </p>

    <div className="not-prose my-8 rounded-r-2xl border-l-4 border-primary bg-primary/[0.06] p-6 md:p-7">
      <p className="text-base leading-relaxed text-foreground md:text-[17px]">
        <strong>Quick answer:</strong> Check your HVAC filters and replace the ones that are due, using the size and
        rating your system calls for. Wash the vent covers that come off safely. Dust each room from the top down,
        vacuum, and leave carpet extraction for last with a plan for drying. Use products that suit each surface. If
        you want more filtration, a HEPA purifier sized for the room can help in a bedroom, but it does not replace the
        cleaning.
      </p>
    </div>

    <details className="not-prose my-8 rounded-2xl border border-border bg-card px-5 py-2">
      <summary className="flex min-h-11 cursor-pointer items-center font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">In this guide</summary>
      <nav aria-label="Table of contents">
        <ol className="mb-2 mt-1 divide-y divide-border">
          {TOC.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className="block min-h-11 py-2.5 text-[15px] text-primary hover:underline">{label}</a></li>
          ))}
        </ol>
      </nav>
    </details>

    <p>
      Every fall the same reminders come back: clean the gutters, protect the pipes, service the furnace. Those jobs
      matter. But I also want homeowners to look inside, at the tops of the curtains, the fan blades, the return
      grilles and the carpets the family walks on every day.
    </p>
    <p>
      Our team cleans homes in Montgomery County and around the DMV every week. When we get a home ready for winter,
      the rule is simple: <strong>take out the dust that has built up first, then think about what filtration can
      add.</strong> A better filter will not clean a baseboard. An air purifier will not pull dirt out of a carpet.
    </p>
    <p>
      That is the idea behind our Winter-Ready Home Reset. Below is the order our team follows, why the order matters,
      and what you can do yourself.
    </p>

    <Photo
      base="team-cleaning-living-room" small={420} large={840} w={840} h={1111} portrait
      alt="Two Capital Clean Care team members cleaning a living room floor and window"
      caption="Our team cleaning a living room floor and window. The photos in this guide show individual tasks, not one complete winter visit."
    />

    <h2>Why winter prep needs an indoor cleaning plan</h2>
    <p>
      Servicing the heating system and cleaning the house are two different jobs. A furnace tune-up does not wipe
      shelves, vacuum curtains or pick up the grit that comes in on boots. Both are worth doing before the holidays
      fill the calendar.
    </p>
    <p>
      The EPA describes air filtration as a supplement to removing the sources of pollutants and bringing in clean
      outdoor air (<A href={EPA_AIR}>EPA guide to air cleaners in the home</A>). That is how we work: remove the dirt we
      can reach instead of expecting a machine to do the whole job. This guide is about cleaning. It does not diagnose
      indoor air problems or promise to remove every particle.
    </p>

    <h2 id="winter-checklist">Your winter house cleaning checklist at a glance</h2>
    <div className="not-prose my-6 overflow-hidden rounded-2xl border border-border bg-card">
      <table className="w-full border-collapse text-left text-[15px] leading-relaxed">
        <caption className="sr-only">Winter cleaning checklist: task, what we do and what to check</caption>
        <thead className="hidden bg-secondary sm:table-header-group">
          <tr>
            <th scope="col" className="p-4 font-semibold">Task</th>
            <th scope="col" className="p-4 font-semibold">What we do</th>
            <th scope="col" className="p-4 font-semibold">What to check</th>
          </tr>
        </thead>
        <tbody>
          {CHECKLIST.map(([task, what, check]) => (
            <tr key={task} className="block border-t border-border p-4 first:border-t-0 sm:table-row sm:p-0 sm:first:border-t">
              <th scope="row" className="block pb-2 font-heading text-lg font-semibold text-foreground sm:table-cell sm:p-4 sm:align-top sm:font-sans sm:text-[15px]">{task}</th>
              <td className="block pb-2 sm:table-cell sm:p-4 sm:align-top">
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground sm:hidden" aria-hidden="true">What we do</span>
                {what}
              </td>
              <td className="block text-muted-foreground sm:table-cell sm:p-4 sm:align-top">
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground sm:hidden" aria-hidden="true">What to check</span>
                {check}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p>Not every home needs every task. Your quote lists the work, any replacement filters and any purifier you choose.</p>

    <section className="not-prose my-10 rounded-2xl border border-border bg-card p-6 md:p-8" aria-labelledby="winter-decide">
      <h2 id="winter-decide" className="scroll-mt-28 font-heading text-2xl font-bold text-foreground md:text-3xl">Clean it, replace it or call a specialist?</h2>
      <div className="mt-5 space-y-5 text-[16px] leading-relaxed text-foreground">
        <div>
          <h3 className="font-heading text-lg font-bold">Dust on surfaces you can reach: clean it</h3>
          <p className="mt-1 text-muted-foreground">Dust on a vent cover, door trim or baseboard goes on the cleaning list. Work from high to low and follow the material's care directions. A dusty cover on its own is not a reason to pay for whole-system duct cleaning.</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold">A filter you cannot identify: check the specification</h3>
          <p className="mt-1 text-muted-foreground">Look at the equipment instructions and any label you can see safely. If the size, rating or access is unclear, ask an HVAC professional before replacing it. Do not open equipment panels just to get details for a cleaning quote.</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold">Damp, musty or possible mold: find the cause</h3>
          <p className="mt-1 text-muted-foreground">Ongoing moisture, a musty smell or suspected mold needs a proper assessment. Fragrance will not fix it, and neither will routine cleaning or a purifier. House cleaning is not a mold diagnosis or remediation service.</p>
        </div>
      </div>
    </section>

    <h2 id="winter-step-1">Step 1: Find and check the HVAC filters</h2>
    <p>
      We start by finding the filters that are part of the visit. Many homes have more than one, and they do not
      always take the same size or type. The question is not "which filter looks strongest?" but "which one is right
      for this system?"
    </p>
    <p>
      We check the filters we can reach and replace the ones whose condition and maintenance schedule call for it,
      rather than swapping every filter because it is fall. The EPA recommends a MERV 13 filter, or the highest rating
      the system can handle (<A href={EPA_AIR}>EPA</A>). A filter that fits the slot is not automatically the right
      one, so if the specification is unclear, an HVAC professional should confirm it.
    </p>
    <p>
      Doing it yourself? Follow the manufacturer's directions for shutting the system off and reaching the filter.
      Changing a filter is not a reason to open other panels or attempt repairs.
    </p>

    <h2 id="winter-step-2">Step 2: Wash the vent covers, not the ducts</h2>
    <p>
      Next come the supply registers and return grilles. When the material, finish and installation allow it, we take
      the cover off, wash it and let it dry completely before putting it back. Some covers need a gentler method, and
      not every cover should be soaked.
    </p>
    <p>
      We keep water out of the opening and only vacuum the dust we can reach at the surface. We do not go deep into the
      ducts, and washing a grille does not clean the air system. The EPA does not recommend routine duct cleaning for
      every home (<A href={EPA_DUCTS}>EPA on air duct cleaning</A>). Mold, water damage or unusual buildup inside the
      system calls for a specialist, not a harder scrub of the cover.
    </p>

    <Photo
      base="washing-removable-vent-cover" small={480} large={960} w={960} h={720}
      alt="Capital Clean Care team member washing a removable vent cover in a sink"
      caption="Washing a removable vent cover. This is cover cleaning, not duct cleaning or a filter change."
    />

    <h2 id="winter-step-3">Step 3: Dust each room from the top down</h2>
    <p>This is the detailed part of the reset. We work down through the room so dust from higher surfaces does not land on a floor we already finished. Depending on the materials and what we agreed to reach, that covers:</p>
    <ul>
      <li>Ceiling corners, cobwebs and the dust line above doors.</li>
      <li>Fan blades and light fixtures we can reach, switched off first.</li>
      <li>Curtain tops and drapes, following their care labels.</li>
      <li>Window frames, shelves, cabinet tops and door trim.</li>
      <li>Baseboards and the reachable spaces beside and under furniture.</li>
    </ul>
    <p>
      Our team uses vacuums with HEPA filtration for this work. The right attachment and a well-kept machine still
      matter: a good filter does not make every technique right for every material.
    </p>
    <p>
      If you are doing this yourself, start with one room and work from high to low. Do not stand on a chair, move
      heavy furniture alone or wash a delicate curtain without reading its label. If you book us, mention the spots that are hard
      to reach so we can plan for them. For more on dust at home, see our guide{" "}
      <L to="/resources/can-house-dust-make-you-sick">Can house dust make you sick?</L>
    </p>

    <Photo
      base="cleaning-upper-door-panel" small={480} large={960} w={960} h={1280} portrait
      alt="Capital Clean Care team member wiping the upper panel of an interior door"
      caption="Cleaning the upper panel of a door before the lower areas."
    />

    <h2 id="winter-step-4">Step 4: Leave carpet extraction for after the dusty work</h2>
    <p>
      With carpets in winter, the order and the drying plan go together. We vacuum the loose soil first. When
      extraction suits the carpet and is part of the visit, it comes after the work above, not before the fan blades
      and curtain tops.
    </p>
    <p>
      Not every carpet needs extraction every fall. The material, backing, condition and care instructions decide it,
      and delicate rugs may need a specialist. For single spills, our{" "}
      <L to="/resources/carpet-stain-guide-pets-wine-milk">carpet stain guide</L> helps you avoid trying one product
      after another.
    </p>
    <p>
      Tell us when you need the room back. If guests arrive that evening, we talk about drying and access before
      booking: air movement, moving furniture and when the carpet can be walked on.
    </p>
    <p>
      <strong>The goal is for the carpet to dry promptly, not to stay damp for two days.</strong> The EPA's 24 to 48
      hour figure is about drying materials after water damage (<A href={EPA_MOLD}>EPA guide to mold and
      moisture</A>), not a target for a cleaning visit. Follow the carpet maker's and the cleaner's directions, and
      call the provider if drying is not going as expected.
    </p>

    <h2 id="winter-step-5">Step 5: Use products that suit the surface</h2>
    <p>
      Our team uses EPA Safer Choice certified products in our work (<L to="/why-eco-friendly-cleaning">why we clean
      this way</L>). We pick the product for the material and follow the label, including dilution and ventilation. A
      cleaner that is right for one finish may be wrong for another.
    </p>
    <p>
      Safer Choice identifies products whose ingredients meet its criteria (<A href={EPA_SC}>EPA Safer Choice</A>). It
      does not certify Capital Clean Care as a company, and it does not make a product risk-free. A cleaner is only a
      disinfectant if its label says so.
    </p>
    <p>
      Products are step 5 in this list, but we choose them for every step, including the surface and carpet work
      above. Tell us about fragrance preferences, delicate finishes and any products you do not want used. At home,
      never mix chemicals or make a solution stronger than the label says.
    </p>

    <h2 id="winter-step-6">Step 6: Add a bedroom HEPA purifier when it makes sense</h2>
    <p>
      After the cleaning, some homeowners want more filtration in certain rooms. We can supply and set up portable
      HEPA air purifiers. Bedrooms are a good place to consider because of the hours people spend there, but not every
      bedroom needs a new appliance.
    </p>
    <p>
      The EPA advises matching the purifier's clean air delivery rate (CADR) to the room (<A href={EPA_AIR}>EPA</A>).
      Check the maker's room-size guidance, keep the airflow clear of curtains and furniture, and keep up with the
      filter. Avoid devices that produce ozone on purpose.
    </p>
    <p>
      The principle stays the same: <strong>clean the surfaces first, then use filtration where it helps.</strong> We
      do not promise allergy relief or the removal of every indoor pollutant. If you choose a purifier, the model,
      quantity and cost go on the quote.
    </p>

    <h2 id="winter-entry">Don't forget the front door</h2>
    <p>
      The reset deals with the dirt that has built up. The entryway is where you keep the next round out. Give wet
      boots a tray, use mats with a backing that suits your floor, and clean the mats before trapped moisture becomes
      a problem of its own.
    </p>
    <p>
      Sweep up loose grit before you wipe, and use a cleaner made for that floor and finish. Vinegar and water is not
      right for every wood, stone or carpet. The National Wood Flooring Association recommends finish-appropriate
      cleaners and advises against wet or steam mops on wood (<A href={NWFA}>NWFA floor maintenance</A>). Wipe up water
      quickly. If salt residue stays, check the flooring maker's guidance instead of soaking the spot.
    </p>

    <h2>Winter cleaning tips between visits</h2>
    <p>
      For filters you can reach, I recommend a quick look once a month from November through March, as long as the
      equipment instructions allow safe access. That is a reminder to check, not to replace every month. The
      manufacturer's instructions come first.
    </p>
    <p>
      Between visits, keep up with the simple things: entry mats, spills, vacuuming and surfaces that look dusty. Let
      pets, the number of people at home and the rooms you actually use set the routine. Condensation, a musty smell or
      lasting damp need their cause fixed, not another air freshener.
    </p>
    <p>
      Late October or November is a good time to plan a reset, before guests and busy weeks. It is not a weather
      deadline for every home in Maryland, DC or Northern Virginia, so book around your own maintenance and plans.
    </p>

    <h2 id="winter-quote">What should your winter cleaning quote include?</h2>
    <p>A quote should describe the work, not leave you guessing from a package name. Our Winter-Ready Home Reset combines the steps above to fit your home and the scope we agree on. Check that it covers:</p>
    <ul>
      <li>The rooms, surfaces and vent covers to be cleaned.</li>
      <li>Filter sizes and quantities, who supplies them and any charge.</li>
      <li>Carpet areas, material limits, furniture moving and the drying plan.</li>
      <li>Purifier model, quantity, cost, setup and future filter costs, if you choose one.</li>
      <li>Access limits, exclusions and aftercare.</li>
    </ul>
    <p>
      To help us prepare, tell us your priority rooms, any delicate surfaces and when you need carpeted rooms back. If
      it is safe and easy, have photos of the vent covers or the filter label ready. Do not remove a panel, climb or
      move heavy furniture to get them.
    </p>
    <p>
      For a full room-by-room clean, see our <L to="/services/deep-cleaning">deep cleaning service</L>, or{" "}
      <L to="/locations/rockville-md/deep-cleaning">deep cleaning in Rockville</L> if you are local.
    </p>
    <p>
      Furnace repairs, combustion safety, inside-the-duct cleaning, mold remediation and chimney work are not part of
      a house cleaning. Book those with a qualified provider, so the cleaning and the maintenance work together.
    </p>

    <h2 id="winter-faq">Winter cleaning questions</h2>
    {WINTER_FAQS.map((f) => (
      <div key={f.q}>
        <h3>{f.q}</h3>
        <p>
          {f.a}
          {f.q.startsWith("How do you dry carpet") && (
            <> The Carpet and Rug Institute's <A href={CRI}>residential cleaning standard</A> covers these drying practices.</>
          )}
        </p>
      </div>
    ))}

    <h2>Let us help you get the inside of your home ready for winter</h2>
    <p>
      Capital Clean Care is based in Silver Spring and cleans homes in Maryland, Washington, DC and Northern Virginia.
      Tell us where you live, what needs attention and which parts of this checklist you want help with. We confirm
      the scope and the quote before scheduling, and you do not have to pick every service.
    </p>

    <div className="not-prose my-8">
      <StaticTrustChips className="mb-6" />
      <BlogInlineCTA
        headline="Get a winter cleaning quote"
        subtext="Tell us the rooms, the carpets and any filters or vent covers you want included. We confirm the scope in writing before we schedule."
        ctaLabel="Request My Winter Cleaning Quote →"
        ctaTo="/contact"
        analyticsLocation="winter_cleaning_quote"
      />
    </div>

    <h2>About this guide</h2>
    <p>
      <L to="/about">Rodrigo Reis</L> is the founder and owner of Capital Clean Care. This guide comes from his account
      of how the team prepares homes for winter; it was organized and edited with AI assistance, and the technical
      points link to their sources. The photos show the tasks named in their captions. They are not air quality tests
      or proof of health benefits.
    </p>

    <h2>Sources</h2>
    <ul className="text-base">
      <li><A href={EPA_AIR}>EPA: Guide to Air Cleaners in the Home</A></li>
      <li><A href={EPA_DUCTS}>EPA: Should You Have the Air Ducts in Your Home Cleaned?</A></li>
      <li><A href={EPA_MOLD}>EPA: A Brief Guide to Mold, Moisture and Your Home</A></li>
      <li><A href={EPA_SC}>EPA: Safer Choice</A></li>
      <li><A href={NWFA}>National Wood Flooring Association: Maintenance</A></li>
      <li><A href={CRI}>Carpet and Rug Institute: CRI 205 Residential Carpet Maintenance and Cleaning Standard</A></li>
    </ul>
  </article>
);

export default WinterCleaningArticle;
