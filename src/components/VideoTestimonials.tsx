import { Card, CardContent } from "@/components/ui/card";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Sarah M. — Bethesda, MD",
    description: "Hear how Capital Clean Care transformed Sarah's home with our eco-friendly cleaning service.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "James T. — Arlington, VA",
    description: "James shares his experience with our bi-weekly recurring cleaning service.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Lauren K. — Capitol Hill, DC",
    description: "Lauren discusses her post-renovation deep cleaning experience.",
  },
];

const VideoTestimonials = ({ className = "" }: { className?: string }) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Hear From Our Clients</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Watch real testimonials from homeowners across Maryland, DC, and Virginia.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((v, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={`Video testimonial from ${v.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm mb-1">{v.title}</h3>
              <p className="text-xs text-muted-foreground">{v.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground mt-6">
        Replace placeholder video IDs with your actual YouTube testimonial videos.
      </p>
    </div>
  </section>
);

export default VideoTestimonials;
