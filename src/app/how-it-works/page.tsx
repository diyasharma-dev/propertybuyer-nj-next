"use client";

import FormWithOwner from "@/components/FormWithOwner";
import { motion } from "framer-motion";
import { Phone, DollarSign, CheckCircle, Shield, Zap, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const steps = [
  { icon: Phone, step: "Step 1", title: "Complete Our Quick Online Form", desc: "Start by sharing basic details about your property in our easy, no-obligation form. It takes just minutes, and there's no commitment required!" },
  { icon: DollarSign, step: "Step 2", title: "Get a Competitive Cash Offer (Within 24 Hours!)", desc: "Our pre-vetted cash buyers will review your details and send you a no-pressure, all-cash offer—often in 24 hours or less. No hidden fees, no surprises!" },
  { icon: CheckCircle, step: "Step 3", title: "Close on Your Timeline (Fast & Flexible!)", desc: "Choose a closing date that works for you—some sellers close in as little as 7 days! Get your cash in hand and move forward without the delays." },
];

const whyUs = [
  { icon: Shield, title: "Highly Vetted Buyers", desc: "Property Buyer NJ vets every buyer to cut through the noise and escort you to the professionals." },
  { icon: Zap, title: "Lightning Quick Response", desc: "Once you fill out our form, it takes less than 3 seconds for the best fitting cash buyer in your neighborhood to receive your details." },
  { icon: Heart, title: "People Over Profit", desc: "Having to leave your home is a major life event. This entire platform exists to help you navigate this challenging time." },
];

const faqs = [
  { q: "How quickly can I sell my home?", a: "Our buyers are exceptionally efficient and can oftentimes get cash in your hands as soon as this week." },
  { q: "Do I need to make any repairs before selling?", a: "You do not need to make any repairs or go through any inspections. Our buyers want to pay for your property in as-is condition." },
  { q: "Are there any fees or commissions?", a: "There isn't a single fee involved. The Property Buyer NJ service is complimentary, and our buyers will accept your property exactly how it is." },
];

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="gradient-navy section-padding">
        <div className="container-max text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">How It Works</h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl mx-auto">
              Sell your home in 3 easy steps. Selling your home for cash has never been easier!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max max-w-4xl">
          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="w-24 h-24 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 relative">
                  <s.icon className="w-10 h-10 text-accent" />
                  <span className="absolute -top-3 -right-3 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-body">{i + 1}</span>
                </div>
                <div>
                  <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">{s.step}</span>
                  <h3 className="font-heading text-2xl font-bold text-foreground mt-1 mb-3">{s.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="tel:917-856-1612">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-orange-dark font-body font-semibold text-lg px-10">
                Get Cash Offer Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Why Use Property Buyer NJ?</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((w, i) => (
              <motion.div key={w.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                className="bg-card border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <w.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{w.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-10">FAQs</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-body font-semibold text-foreground">
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 text-accent transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-muted-foreground font-body text-sm">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-max">
          <FormWithOwner />
        </div>
      </section>
    </>
  );
}
