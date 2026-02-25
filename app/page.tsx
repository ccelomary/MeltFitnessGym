import Image from "next/image";
import { Apple, Beef, Dumbbell, Timer } from "lucide-react";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import OfferCard from "@/components/OfferCard";
import ServiceCard from "@/components/ServiceCard";
import Gallery from "@/components/Gallery";
import PricingCard from "@/components/PricingCard";
import Testimonial from "@/components/Testimonial";
import ContactForm from "@/components/ContactForm";
import SectionReveal from "@/components/section-reveal";

const offers = [
  {
    title: "Summer Offers",
    description: "Get 30% off annual memberships plus a free fitness assessment.",
    gradient: "bg-gradient-to-r from-fuchsia-600 to-orange-400"
  },
  {
    title: "National Day Deals",
    description: "Bring a friend and both receive premium class access for one month.",
    gradient: "bg-gradient-to-r from-emerald-500 to-cyan-500"
  },
  {
    title: "Seasonal Promo",
    description: "Join this week and receive two PT sessions + custom nutrition guide.",
    gradient: "bg-gradient-to-r from-violet-700 to-pink-500"
  }
];

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />

      <section id="about" className="section-padding">
        <div className="container grid items-center gap-10 md:grid-cols-2">
          <SectionReveal>
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=80"
                alt="Gym interior with members training"
                width={700}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="text-sm font-bold uppercase tracking-wider text-primary">About Melt Fitness Gym</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">A bold new fitness experience in the UAE.</h2>
            <p className="mt-4 text-muted-foreground">
              We combine elite coaching, colorful high-energy spaces, and data-backed programming to help members build consistent routines and visible results.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section id="offers" className="section-padding bg-slate-900">
        <div className="container">
          <SectionReveal>
            <h2 className="text-3xl font-black text-white md:text-4xl">Offers You Can’t Ignore</h2>
            <p className="mt-2 max-w-xl text-sm text-white/80">Promo-style blocks inspired by social-first gym campaigns.</p>
          </SectionReveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard key={offer.title} title={offer.title} description={offer.description} gradient={offer.gradient} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-padding">
        <div className="container">
          <SectionReveal>
            <h2 className="text-3xl font-black md:text-4xl">Services That Move You Forward</h2>
          </SectionReveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard title="Lift Weights" text="Progressive strength programs for power and confidence." icon={Dumbbell} />
            <ServiceCard title="Personal Training" text="1-to-1 coaching that adapts to your body and goals." icon={Timer} />
            <ServiceCard title="Group Classes" text="High-motivation classes with energetic instructors." icon={Beef} />
            <ServiceCard title="Nutrition" text="Simple, sustainable meal guidance to support your training." icon={Apple} />
          </div>
        </div>
      </section>

      <section id="gallery" className="section-padding bg-gradient-to-b from-sky-50 to-fuchsia-50">
        <div className="container">
          <SectionReveal>
            <h2 className="text-3xl font-black md:text-4xl">Gym Gallery</h2>
          </SectionReveal>
          <div className="mt-8">
            <Gallery />
          </div>
        </div>
      </section>

      <section id="pricing" className="section-padding">
        <div className="container">
          <SectionReveal>
            <h2 className="text-3xl font-black md:text-4xl">Pricing Plans</h2>
          </SectionReveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <PricingCard plan="Starter" price="AED 199/mo" features={["Gym floor access", "1 coach consult", "Standard hours"]} />
            <PricingCard plan="Pro" price="AED 349/mo" featured features={["Full access", "4 classes/week", "Progress tracking"]} />
            <PricingCard plan="Elite" price="AED 699/mo" features={["8 PT sessions", "Custom strategy", "Priority support"]} />
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-padding bg-slate-950">
        <div className="container">
          <SectionReveal>
            <h2 className="text-3xl font-black text-white md:text-4xl">Member Transformations</h2>
          </SectionReveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Testimonial name="Sara A." quote="I lost 9kg in 3 months and now I train with confidence." />
            <Testimonial name="Khalid M." quote="The coaches keep me consistent and motivated every week." />
            <Testimonial name="Rania H." quote="Vibrant classes, amazing atmosphere, and clear progress." />
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding">
        <div className="container grid gap-8 lg:grid-cols-2">
          <SectionReveal>
            <h2 className="text-3xl font-black md:text-4xl">Book Your Free Trial</h2>
            <p className="mt-3 text-muted-foreground">Tell us your goal and our team will contact you with a personalized fitness plan.</p>
            <div className="mt-6 overflow-hidden rounded-2xl border">
              <iframe
                title="Melt Fitness Gym map"
                src="https://www.google.com/maps?q=Melt+Fitness+Gym&output=embed"
                width="100%"
                height="300"
                loading="lazy"
              />
            </div>
          </SectionReveal>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
