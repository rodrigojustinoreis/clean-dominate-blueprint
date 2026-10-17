import { Link } from "react-router-dom";
import { CheckCircle2, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";

/** Stripe success page for /book. The booking is confirmed server-side by the Stripe webhook. */
const BookingConfirmed = () => {
  const { seoHelmet } = useSEO({
    title: "Booking Confirmed",
    description: "Your Capital Clean Care booking is confirmed.",
    canonical: "https://capitalcleancare.com/book/confirmed",
    noIndex: true,
  });
  return (
    <Layout>
      {seoHelmet}
      <section className="container mx-auto max-w-xl px-4 py-16 text-center md:py-24">
        <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-600" aria-hidden="true" />
        <h1 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">You're booked!</h1>
        <p className="mt-3 text-muted-foreground">
          Thank you — your deposit was received and your date and arrival time are reserved. A payment receipt is on its way
          to your e-mail, and our team will reach out before your cleaning.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground">Back to home</Link>
          <a href="tel:+12407042551" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold">
            <Phone className="h-4 w-4" aria-hidden="true" /> (240) 704-2551
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default BookingConfirmed;
