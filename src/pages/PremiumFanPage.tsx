import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import { 
  Shield, 
  Star, 
  Leaf, 
  CheckCircle2, 
  ArrowRight, 
  Quote, 
  Award,
  Sparkles,
  Home,
  Building2,
  Calendar,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TrustBadges from '@/components/TrustBadges';

const PremiumFanPage = () => {
  const { seoHelmet } = useSEO({
    title: "Premium House Cleaning Service | Capital Clean Care",
    description: "Experience white-glove residential cleaning in Maryland, DC & Virginia. Eco-friendly products, background-checked teams, 100% satisfaction guaranteed.",
    canonical: "https://capitalcleancare.com/premium-clean",
  });
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#050B1B] font-sans selection:bg-[#10B981]/30">
      {seoHelmet}
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury Living Room" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050B1B]/90 via-[#050B1B]/60 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-[2px] w-12 bg-[#10B981]" />
                <span className="text-[#10B981] font-semibold tracking-widest uppercase text-sm">Premier Cleaning Excellence</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Experience the <span className="text-[#10B981]">Gold Standard</span> of Clean
              </h1>
              <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl font-light">
                Bespoke residential and commercial cleaning services designed for discerning spaces. 
                Trust the experts to elevate your environment to its true potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white px-8 h-14 text-lg rounded-full" asChild>
                  <a href="#quote">Book Your Premium Clean</a>
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 h-14 text-lg rounded-full backdrop-blur-sm" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Tailored Solutions</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Discover our range of professional services, each executed with surgical precision and eco-friendly care.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Residential Cleaning", 
                  desc: "Premium home maintenance for a sanctuary that sparkles. Every corner, every detail, every time.", 
                  icon: <Home className="w-8 h-8 text-[#10B981]" />,
                  image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                },
                { 
                  title: "Commercial Cleaning", 
                  desc: "Professional environments deserve a professional touch. Elevate your workspace productivity and health.", 
                  icon: <Building2 className="w-8 h-8 text-[#10B981]" />,
                  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
                },
                { 
                  title: "Specialized Services", 
                  desc: "From deep cleans to move-in/out, we handle the most demanding tasks with unmatched expertise.", 
                  icon: <Sparkles className="w-8 h-8 text-[#10B981]" />,
                  image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop"
                }
              ].map((service, i) => (
                <div 
                  key={i}
                  className="group relative h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-black/5 transition-transform duration-300 hover:-translate-y-2"
                >
                  <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/40 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 w-fit mb-4 border border-white/20">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/70 mb-6 font-light leading-relaxed">
                      {service.desc}
                    </p>
                    <Link to="/services" className="text-[#10B981] font-semibold flex items-center gap-2 group/link">
                      Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Luxury Version */}
        <section className="py-24 bg-[#050B1B] text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#10B981] font-semibold tracking-widest uppercase text-sm mb-4 block">The Capital Clean Care Difference</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Uncompromising Quality for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#34D399]">Exacting Standards.</span>
                </h2>
                
                <div className="space-y-8">
                  {[
                    { title: "Eco-Conscious Excellence", desc: "We exclusively use high-performance, non-toxic products safe for families and the environment.", icon: <Leaf className="w-6 h-6" /> },
                    { title: "Vetted Professionals", desc: "Every member of our team undergoes rigorous background checks and comprehensive training.", icon: <Shield className="w-6 h-6" /> },
                    { title: "24-Hour Satisfaction Guarantee", desc: "If you're not absolutely delighted, we'll return within 24 hours to make it perfect. Guaranteed.", icon: <Award className="w-6 h-6" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#10B981] border border-white/10">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581578731522-745d05ad9a2d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Cleaning Professional" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#10B981]/20 rounded-full blur-[100px]" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#34D399]/20 rounded-full blur-[100px]" />
                
                <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl z-20 max-w-[280px]">
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-white font-medium italic mb-4">
                    "The most thorough and professional cleaning service we've ever used. Completely transformed our home."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden" />
                    <div>
                      <p className="font-bold text-sm">Alexandra Ross</p>
                      <p className="text-white/50 text-xs uppercase tracking-tighter">Potomac, MD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-[#050B1B] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[#10B981]/5 opacity-50" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready for a spotless space?</h2>
                <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto font-light">
                  Join over 1,000+ happy clients in the DC metro area who trust Capital Clean Care. 
                  Get your personalized quote in less than 60 seconds.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white px-12 h-16 text-xl rounded-full" asChild>
                    <a href="#quote">Get Instant Quote</a>
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-12 h-16 text-xl rounded-full backdrop-blur-sm" asChild>
                    <a href="tel:+12407042551">Call (240) 704-2551</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <TrustBadges compact withBackground={false} />

      <Footer />
    </div>
  );
};

export default PremiumFanPage;
