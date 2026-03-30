"use client";

import FormWithOwner from "@/components/FormWithOwner";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, Phone, Home, DollarSign, Clock, Shield, Star, ArrowRight, Sunset, BookOpen, Bike, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import heroImg from "@/assets/area-general.jpg";
import affordImg from "@/assets/afford.jpg";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const stats = [
  { value: "", label: "Local Market Expertise" },
  { value: "", label: "Personalized Service" },
  { value: "", label: "Skilled Negotiation" },
  { value: "", label: "Smooth Transactions" },
];

const highlights = [
  { icon: Sunset, title: "Verona Park", desc: "The iconic Verona Park with its lake and walking paths is the heart of the community and a major draw for homebuyers." },
  { icon: BookOpen, title: "Award-Winning Schools", desc: "Verona's highly rated public schools consistently attract families, keeping demand — and property values — strong." },
  { icon: Bike, title: "Active Lifestyle", desc: "From cycling trails to recreational facilities, Verona supports an active, outdoor-oriented community lifestyle." },
  { icon: Coffee, title: "Walkable Village", desc: "Verona's charming downtown with local shops and restaurants creates a walkable, small-town feel residents love." },
];

const promises = ["No Repairs Needed", "No Hidden Fees", "Close in 7–10 Days", "Fair Cash Offer", "As-Is Condition", "Free Consultation", "No Obligation", "We Handle Paperwork"];

const faqs = [
  { q: "How fast can I get a cash offer for my Verona home?", a: "Within 24 hours of your inquiry. We review your property details and deliver a no-obligation offer quickly so you can make an informed decision." },
  { q: "Do I need to stage or clean my Verona home before selling?", a: "Not at all. We buy homes exactly as they are. No cleaning, staging, or repairs required — just call us and we handle the rest." },
  { q: "Can you buy my Verona home if I'm relocating out of state?", a: "Yes. We work with out-of-state sellers regularly and can coordinate remote closings so you don't need to be present in New Jersey." },
  { q: "What if my Verona home has tenants?", a: "We buy tenant-occupied properties. We'll work with you to navigate the situation and close on a timeline that works for everyone involved." },
];

export default function VeronaPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={heroImg} alt="Verona New Jersey" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-navy-dark/75" />
        </div>
        <div className="relative container-max section-padding w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Welcome to Verona, NJ
</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
             A Beautiful, Family-Friendly Community
            </h1>
            <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-xl">
              Verona is a charming town in Essex County, known for its family-friendly atmosphere, excellent schools, and beautiful parks. With its scenic streets, vibrant local businesses, and close-knit community, Verona offers the perfect suburban living experience while remaining just a short distance from New York City. Whether you're enjoying the outdoors, shopping, or dining, Verona offers everything you need to live comfortably and happily.
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

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Local Experts</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">Local Attractions & Amenities in Verona</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                ✔ Verona Park, a beautiful lakefront park with walking trails, tennis courts, and playgrounds.<br/>

✔ Vibrant local businesses and dining options in the town center.<br/>

✔ Top-tier schools and community programs for all ages.<br/>

📞 Call or Text Us Now: +1917-856-1612<br/>

📩 Get Your Free Offer Today! Fill out our simple online form & we’ll reach out ASAP.
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
              <Image src={heroImg} alt="Verona NJ homes" className="rounded-2xl shadow-xl w-full" width={1280} height={720} />
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
                             Real Estate in Verona: The Verona real estate market is known for its well-maintained homes in beautiful, tree-lined neighborhoods. Homes here range from charming older properties to newer constructions. The market is highly competitive, with many buyers attracted to the town’s excellent schools and proximity to New York City.
                                </p>
                        <h2>Why Choose Verona ? 
      
                  
                  </h2><br/>
                                <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                                A peaceful, safe environment with exceptional schools and recreational opportunities.
            <br/>
                  
                  Proximity to New York City with an easy commute for professionals. <br/>
                  
               Beautiful parks and green spaces perfect for outdoor activities and relaxation.<br/>
      
               Verona’s strong real estate market makes it a great place for both buyers and investors.
            
                                </p>
                              </motion.div>
                        
                            </div>
                          </div>
                        </section>

      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground">What Makes Verona Special</h2>
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

      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground">Our Promise to Verona Homeowners</h2>
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

      <section className="section-padding bg-cream">
        <div className="container-max max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
            </div>
            <blockquote className="font-heading text-xl md:text-2xl font-semibold text-foreground leading-relaxed mb-6">
              "Property Buyer NJ gave me a fair offer within 24 hours. Closed on my timeline with zero stress. Couldn't ask for more."
            </blockquote>
            <p className="text-muted-foreground font-body font-medium">Rachel P. — Verona, NJ</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground">Verona FAQs</h2>
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
