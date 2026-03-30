"use client";

import CashOfferForm from "@/components/CashOfferForm";
import FormWithOwner from "@/components/FormWithOwner";
import ClientReviews from "@/components/ClientReviews";
import { motion } from "framer-motion";
import { MapPin, Shield, Users, Handshake, Phone, Home, DollarSign, CheckCircle, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import heroImg from "@/assets/hero-house.jpg";
import aboutImg from "@/assets/about-house.jpg";
import sellImg from "@/assets/sell-house.jpg";
import Image from "next/image";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const features = [
  { icon: MapPin, title: "Local Market Expertise", desc: "Deep knowledge of New Jersey neighborhoods and property values." },
  { icon: Users, title: "Personalized Service", desc: "We take time to understand your unique needs and preferences." },
  { icon: Handshake, title: "Smooth Transactions", desc: "End-to-end support ensuring a hassle-free experience." },
  { icon: Shield, title: "Skilled Negotiation", desc: "Expert negotiators who work to get you the best deal." },
];

const steps = [
  { icon: Phone, title: "Contact Us", desc: "Call us or complete the form — you and our office manager will then have a quick 5-10 minute conversation to see if we are the right fit for your real estate needs. Then within 24 hours we will provide a ballpark range cash offer. If you are in agreement we then schedule an appointment." },
  { icon: DollarSign, title: "Get Your Offer", desc: "We go to the appointment. Within 1 hour of the appointment we will solidify our offer and send you a contract for your house. We sign a contract and we start the escrow process. At this Point we HAVE A DEAL. Then we take care of all the nuances of selling a house" },
  { icon: CheckCircle, title: "Get Paid", desc: "THEN HAPPY DAYS 😉 Title is cleared and we schedule a close date. We then close on escrow and you get paid in as little as 7-10 business days! You move out on your schedule, and just like that your home is sold! For more details, check out our HOW IT WORKS page." },
];

const areas = ["Nutley", "Belleville", "Bloomfield", "Cedar Grove", "Caldwell", "Verona", "Newark", "Millville"];

const faqs = [
  { q: "How quickly can I sell my home?", a: "Our buyers can get cash in your hands as soon as this week." },
  { q: "Do I need to make any repairs before selling?", a: "No repairs or inspections needed. We buy properties in as-is condition." },
  { q: "Are there any fees or commissions?", a: "There isn't a single fee involved. Our service is completely free, and our buyers accept your property exactly how it is." },
  { q: "What kinds of properties do you buy?", a: "We buy outdated homes, damaged homes, rentals, foreclosures, townhomes, condos — virtually any property type." },
  { q: "How is the offer price determined?", a: "We analyze market conditions, property value, and comparable sales to provide a fair, competitive cash offer." },
  { q: "Can I still sell if I owe more than my home is worth?", a: "Yes! Contact us to discuss your situation. We work with homeowners in all financial circumstances." },
];

const properties = ["Outdated Homes", "Damaged Homes", "Rentals", "Foreclosures", "Townhomes", "Condos"];

export default function IndexPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={heroImg} alt="Beautiful New Jersey home" className="w-full h-full object-cover" fill priority />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-navy/40" />
        </div>
        <div className="relative container-max section-padding w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-body font-semibold mb-6">
                Sell Simple, Easy & Professional
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Need To Sell Your House Fast In <span className="text-gradient-orange">New Jersey?</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg font-body mb-8 max-w-lg">
                Sell Your House Quickly for Cash – No Repairs, No Fees, No Stress. Tired of waiting for a traditional buyer?
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:917-856-1612">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-orange-dark font-body font-semibold text-base px-8">
                    <Phone className="w-4 h-4 mr-2" /> Call Now
                  </Button>
                </a>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-black-foreground hover:bg-primary-foreground/10 font-body">
                    How It Works <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
              <CashOfferForm variant="dark" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">What Sets Property Buyer NJ Apart?</h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              We’re not just another real estate company—we’re your trusted partner in achieving your property goals. With years of experience, a dedication to hard work, and a commitment to delivering real results, we make navigating the New Jersey market simple and stress-free. You can count on us to guide you with confidence every step of the way.


            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <f.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">About Us – Property Buyer NJ
</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Your Trusted Cash Home Buyer in New Jersey

              </h2>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                We're more than just a real estate company; we're your trusted partner in navigating the complexities of buying and selling houses in New Jersey. We've established a solid reputation for excellence in Nutley, Belleville, Bloomfield, Caldwell, Cedar Grove, Verona, Newark, Millville, and beyond by focusing on delivering seamless transactions and exceptional service.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {["Investment Properties", "Efficient Process", "Tailored Approach"].map(item => (
                  <div key={item} className="bg-card rounded-xl p-4 text-center border">
                    <p className="font-body text-sm font-semibold text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button className="bg-accent text-accent-foreground hover:bg-orange-dark font-body font-semibold">
                  Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Image src={aboutImg} alt="New Jersey neighborhood" className="rounded-2xl shadow-2xl" loading="lazy" width={1280} height={854} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="section-padding gradient-navy">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-14">
            <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Get Cash in as little as 7 Days</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
              Sell Your NJ House in Just 3 Easy Steps!
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.15 }}
                className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <s.icon className="w-8 h-8 text-accent" />
                </div>
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-body">
                  {i + 1}
                </span>
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">{s.title}</h3>
                <p className="text-primary-foreground/70 font-body text-sm leading-relaxed max-w-sm mx-auto">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We buy section */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Image src={sellImg} alt="Happy homeowners" className="rounded-2xl shadow-xl" loading="lazy" width={1280} height={854} />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Ready to sell your house</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                What Kinds of Properties Do We Buy?
              </h2>
              <p className="text-muted-foreground font-body mb-6">
                Even if you think your home is unsellable, we will get you an offer for it. You can't beat the speed of our offer through a traditional sale.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {properties.map(p => (
                  <div key={p} className="flex items-center gap-2 bg-cream rounded-xl px-4 py-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-body text-sm font-medium text-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="section-padding bg-cream">
        <div className="container-max text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">Areas We Serve</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map(a => (
                <Link key={a} href={`/services/${a.toLowerCase().replace(" ", "-")}`}
                  className="bg-card border rounded-full px-6 py-3 font-body font-medium text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 shadow-sm">
                  <MapPin className="w-4 h-4 inline mr-1.5" />{a}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Reviews */}
      <ClientReviews />

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="bg-card border rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-body font-semibold text-foreground">
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 text-accent transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted-foreground font-body text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy">
        <div className="container-max text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Sell Your Home Fast?
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg mb-8 max-w-xl mx-auto">
              Get a fair cash offer today—no fees, no repairs, no hassle! 🚀
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:917-856-1612">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-orange-dark font-body font-semibold text-lg px-10 py-7">
                  <Phone className="w-5 h-5 mr-2" /> 917-856-1612
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-black-foreground hover:bg-primary-foreground/10 font-body text-lg px-10 py-7">
                  Contact Us Online
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Form with Owner */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <FormWithOwner />
        </div>
      </section>
    </>
  );
}
