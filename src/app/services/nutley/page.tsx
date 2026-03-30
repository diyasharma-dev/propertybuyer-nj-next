"use client";

import FormWithOwner from "@/components/FormWithOwner";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, Phone, Home, DollarSign, Clock, Shield, Star, ArrowRight, Trees, School, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import heroImg from "@/assets/area-nutley.jpg";
import affordImg from "@/assets/afford.jpg";


const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const stats = [
  { value: "", label: "Local Market Expertise" },
  { value: "", label: "Personalized Service" },
  { value: "", label: "Skilled Negotiation" },
  { value: "", label: "Smooth Transactions" },
];

const highlights = [
  { icon: Trees, title: "Tree-Lined Streets", desc: "Nutley's iconic neighborhoods like Yantacaw Brook Park make it one of Essex County's most desirable townships." },
  { icon: School, title: "Top-Rated Schools", desc: "Nutley Public Schools consistently rank among the best in New Jersey, driving strong property demand." },
  { icon: Train, title: "NYC Commuter Access", desc: "Easy access to NYC via NJ Transit buses and major highways makes Nutley a prime location for commuters." },
  { icon: Home, title: "Diverse Housing Stock", desc: "From Victorian colonials to modern ranches, Nutley's varied housing market means we buy all property types." },
];

const promises = ["No Repairs Needed", "No Hidden Fees", "Close in 7–10 Days", "Fair Cash Offer", "As-Is Condition", "Free Consultation", "No Obligation", "We Handle Paperwork"];

const faqs = [
  { q: "How fast can I sell my Nutley home?", a: "We can close in as little as 7 days. Once you accept our offer, we handle all the paperwork and coordinate with the title company to get you paid fast." },
  { q: "Do I need to clean or repair my Nutley property?", a: "Not at all. We buy homes in any condition — whether it needs cosmetic updates or major structural work. Leave everything as-is." },
  { q: "What types of Nutley properties do you buy?", a: "We buy single-family homes, multi-family properties, condos, townhomes, and even vacant land throughout Nutley and the surrounding Essex County area." },
  { q: "Are there any fees when selling to Property Buyer NJ?", a: "Zero fees. No agent commissions, no closing costs, no hidden charges. The offer we make is the amount you receive." },
];

export default function NutleyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={heroImg} alt="Nutley New Jersey" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-navy-dark/75" />
        </div>
        <div className="relative container-max section-padding w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Welcome to Nutley, NJ</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
Nutley, NJ: A Charming Suburb with NYC Convenience            </h1>
            <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-xl">
             Discover the Best of Suburban Living Near Manhattan Nestled in Essex County, Nutley, NJ, offers the perfect balance of small-town charm and big-city access. With tree-lined streets, top-rated schools, and a quick 30-minute commute to NYC, it’s no wonder families, professionals, and investors are flocking to this vibrant community.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:917-856-1612">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-orange-dark font-body font-semibold px-8">
                  <Phone className="w-4 h-4 mr-2" /> Call 917-856-1612
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white hover:text-navy-dark font-body font-semibold">
                  Get Cash Offer <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-accent-foreground/20">
            {stats.map((s, i) => (
              <motion.div key={i} initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: i * 0.1 }} className="text-center py-5 px-4">
                <p className="font-heading text-2xl font-bold text-accent-foreground">{s.value}</p>
                <p className="font-body text-sm text-accent-foreground/80 mt-0.5">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Nutley + Why Us */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Local Experts</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">Local Attractions & Amenities in  Nutley</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                ✔ Enjoy outdoor recreation at the Nutley Park and Memorial Park.<br/>

✔ The Nutley Public Library offers various community programs and activities.<br/>

✔ Dining options range from cozy cafes to fine dining establishments.<br/>

📞 Call or Text Us Now: +1917-856-1612<br/>

📩 Get Your Free Offer Today! Fill out our simple online form & we’ll reach out ASAP<br/>
              </p>
             
              <div className="grid grid-cols-2 gap-3">
                {[{ icon: Clock, text: "Close in 7 days" }, { icon: DollarSign, text: "No fees or commissions" }, { icon: Home, text: "Buy in any condition" }, { icon: Shield, text: "Fair cash offers" }].map(b => (
                  <div key={b.text} className="flex items-center gap-3 bg-cream rounded-xl px-4 py-3">
                    <b.icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-body font-medium text-foreground text-sm">{b.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Image src={heroImg} alt="Nutley NJ homes" className="rounded-2xl shadow-xl w-full" width={1280} height={720} />
            </motion.div>
          </div>
        </div>
      </section>


       <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image - LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src={affordImg}
                alt="Community youth program"
                className="rounded-2xl shadow-xl"
                loading="lazy"
                width={1280}
                height={854}
              />
            </motion.div>
      
            {/* Content - RIGHT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
            <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                Real Estate in Nutley: Nutley’s real estate market features a mix of single-family homes, townhomes, and apartment complexes. Homes in Nutley tend to be well-maintained, with many classic early-to-mid-century houses alongside modern developments. Whether you’re looking to buy your first home, upgrade, or invest in a rental property, Nutley provides diverse options.
              </p>
      <h2>Why Choose Nutley?
</h2>
              <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                Access to top-rated schools and community programs.
                Close-knit community with a welcoming atmosphere.
Commuter-friendly, with easy access to major highways and public transportation.
Nutley is a great area for real estate investments, with steady demand for homes in various price ranges.
              </p>
            </motion.div>
      
          </div>
        </div>
      </section>

      {/* Nutley Highlights */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground">Why Nutley Homeowners Choose Us</h2>
            <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">We understand what makes Nutley unique — and we price your home accordingly.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <h.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">{h.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise checklist */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground">Our Promise to Nutley Homeowners</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {promises.map((item, i) => (
              <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-card border rounded-xl px-5 py-4 hover:shadow-md transition-shadow">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-body font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-cream">
        <div className="container-max max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
            </div>
            <blockquote className="font-heading text-xl md:text-2xl font-semibold text-foreground leading-relaxed mb-6">
              "Property Buyer NJ made selling my Nutley home completely stress-free. I had cash in hand in under two weeks — couldn't be happier!"
            </blockquote>
            <p className="text-muted-foreground font-body font-medium">Maria T. — Nutley, NJ</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground">Nutley FAQs</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.07 }}
                className="bg-card border rounded-xl p-6">
                <h3 className="font-heading font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-max"><FormWithOwner /></div>
      </section>
    </>
  );
}
