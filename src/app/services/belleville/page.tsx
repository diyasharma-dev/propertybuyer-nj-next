"use client";

import FormWithOwner from "@/components/FormWithOwner";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, Phone, Home, DollarSign, Clock, Shield, Star, ArrowRight, Building2, Landmark, Bus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import heroImg from "@/assets/area-belleville.jpg";
import affordImg from "@/assets/afford.jpg";


const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const stats = [
  { value: "", label: "Local Market Expertise" },
  { value: "", label: "Personalized Service" },
  { value: "", label: "Skilled Negotiation" },
  { value: "", label: "Smooth Transactions" },
];

const highlights = [
  { icon: Landmark, title: "Branch Brook Park", desc: "Home to the largest cherry blossom collection in the US, Belleville's parks add significant value to local properties." },
  { icon: Bus, title: "NYC Transit Access", desc: "Just 14 miles from Midtown Manhattan with NJ Transit bus routes, making Belleville a top commuter destination." },
  { icon: Building2, title: "Revitalized Downtown", desc: "New restaurants, shops, and cultural venues are transforming Belleville's downtown into a vibrant community hub." },
  { icon: Users, title: "Diverse Community", desc: "Belleville's rich cultural diversity creates a welcoming atmosphere and strong neighborhood pride throughout the township." },
];

const promises = ["No Repairs Needed", "No Hidden Fees", "Close in 7–10 Days", "Fair Cash Offer", "As-Is Condition", "Free Consultation", "No Obligation", "We Handle Paperwork"];

const faqs = [
  { q: "How quickly can I sell my Belleville home?", a: "We can close in as little as 7 days. Our streamlined process means no waiting for bank approvals or buyer financing — we pay cash." },
  { q: "My Belleville home needs major repairs. Will you still buy it?", a: "Absolutely. We specialize in buying homes as-is. Whether it needs a new roof, foundation work, or a full renovation, we'll make you a fair offer." },
  { q: "What neighborhoods in Belleville do you serve?", a: "We buy homes throughout all of Belleville — Silver Lake, the Heights, Washington Avenue corridor, and every neighborhood in between." },
  { q: "How is my Belleville home's value determined?", a: "We analyze recent comparable sales, current market conditions, your property's location, and its condition to arrive at a fair, competitive cash offer." },
];

export default function BellevillePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={heroImg} alt="Belleville New Jersey" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-navy-dark/75" />
        </div>
        <div className="relative container-max section-padding w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Welcome to Belleville, NJ
</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Belleville, NJ: Affordable Suburban Living with NYC Access

            </h1>
            <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-xl">
              Your Gateway to Essex County's Best Value Located in the heart of Essex County, Belleville, NJ offers home buyers the perfect combination of small-town charm, urban convenience, and unbeatable affordability. Just 14 miles from Midtown Manhattan, this diverse community delivers Homes priced 20-30% below neighboring towns, 45-minute commute to NYC via NJ Transit buses and Revitalized downtown with new restaurants and cultural venues
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

      {/* About + Why Us */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Local Experts</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">Local Attractions & Amenities in Belleville:
</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Branch Brook Park, home to beautiful cherry blossoms in the spring.
<br/>
✔ Belleville’s historical landmarks and charming downtown area.<br/>

✔ A range of dining and shopping options, from casual eateries to unique boutiques.<br/>

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
              <Image src={heroImg} alt="Belleville NJ homes" className="rounded-2xl shadow-xl w-full" width={1280} height={720} />
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
               Belleville, NJ Real Estate: Affordable Homes with Strong Growth Potential: Belleville’s thriving real estate market offers a rare combination of affordability and investment upside, just 30 minutes from NYC. Belleville is becoming an increasingly attractive destination for investors. Whether you’re seeking your first home or a larger property, the town provides competitive prices, making it a more affordable alternative to neighboring cities.
              </p>
      <h2>Why Choose Belleville ?

</h2><br/>
              <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                Single-family homes from $350K – ideal for first-time buyers and families<br/>

Modern condos/townhomes priced 20% below nearby markets <br/>

Multi-family properties with high rental demand – perfect for investors
              </p>
            </motion.div>
      
          </div>
        </div>
      </section>
      

      {/* Highlights */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground">What Makes Belleville Special</h2>
            <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">We factor in everything that makes Belleville unique when crafting your offer.</p>
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

      {/* Promise */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground">Our Promise to Belleville Homeowners</h2>
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
              "I needed to sell fast and Property Buyer NJ delivered. Fair offer, no games, closed in 9 days. Highly recommend to any Belleville homeowner."
            </blockquote>
            <p className="text-muted-foreground font-body font-medium">James R. — Belleville, NJ</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground">Belleville FAQs</h2>
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
