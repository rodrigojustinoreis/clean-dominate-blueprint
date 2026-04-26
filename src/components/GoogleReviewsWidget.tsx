// Replace ELFSIGHT_APP_ID with your real ID from elfsight.com
// Example: "elfsight-app-a1b2c3d4-e5f6-7890-abcd-ef1234567890"
const ELFSIGHT_APP_ID = "elfsight-app-0f09526e-a50e-47c3-916a-da919ce5e531";

const GoogleReviewsWidget = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-8">
        <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
          Google Reviews
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
          What Our Clients Say on Google
        </h2>
      </div>
      <div className={ELFSIGHT_APP_ID} data-elfsight-app-lazy />
    </div>
  </section>
);

export default GoogleReviewsWidget;
