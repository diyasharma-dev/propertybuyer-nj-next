"use client";

import FormWithOwner from "@/components/FormWithOwner";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, Phone, Home, DollarSign, Clock, Shield, Star, ArrowRight, Flower2, Factory, Anchor, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import heroImg from "@/assets/area-general.jpg";
import affordImg from "@/assets/afford.jpg";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const stats = [
  { value: "7–10", label: "Days to Close" },
  { value: "15+", label: "Homes Purchased" },
  { value: "$0", label: "Fees or Commissions" },
  { value: "24 hrs", label: "Offer Turnaround" },
];

const highlights = [
  { icon: Flower2, title: "The Holly City", desc: "Millville's nickname reflects its unique character — a city with deep roots, natural beauty, and a strong sense of local identity." },
  { icon: Factory, title: "Growing Economy", desc: "Millville's expanding industrial and commercial base is creating new jobs and driving renewed interest in local real estate." },
  { icon: Anchor, title: "Maurice River Access", desc: "Millville's waterfront along the Maurice River offers recreational opportunities and scenic views that add to property appeal." },
  { icon: TrendingDown, title: "Affordable Market", desc: "Millville offers some of the most affordable housing in New Jersey, making it attractive for buyers and investors alike." },
];

const promises = ["No Repairs Needed", "No Hidden Fees", "Close in 7–10 Days", "Fair Cash Offer", "As-Is Condition", "Free Consultation", "No Obligation", "We Handle Paperwork"];

const faqs = [
  { q: "Do you buy homes in all parts of Millville?", a: "Yes. We buy properties throughout Millville — downtown, the Glasstown Arts District, residential neighborhoods, and surrounding areas in Cumberland County." },
  { q: "I inherited a Millville property I don't want. Can you help?", a: "Absolutely. We handle inherited properties regularly, including those in probate. We work with estates and multiple heirs to make the process as smooth as possible." },
  { q: "My Millville home has been vacant for years. Will you buy it?", a: "Yes. Vacant, abandoned, or neglected properties are exactly what we specialize in. We buy them as-is and handle all cleanup and repairs after closing." },
  { q: "How does the cash offer process work in Millville?", a: "Fill out our form or call us. We'll review your property, schedule a quick walkthrough if needed, and deliver a no-obligation cash offer within 24 hours." },
];

export default function MillvillePage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={heroImg} alt="Millville New Jersey" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-navy-dark/75" />
        </div>
        <div className="relative container-max section-padding w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Welcome to Millville, NJ
</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
             A Hidden Gem with a Rich History
            </h1>
            <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-xl">
              Located in Cumberland County, Millville is a charming town with a deep historical heritage and a growing arts community. Known as the "City of Art," Millville boasts a variety of museums, galleries, and cultural events, making it a unique and vibrant place to live. The town offers affordable real estate, great schools, and access to outdoor recreation, making it an ideal choice for families, retirees, and professionals looking for a quieter lifestyle.
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
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">Local Attractions & Amenities in Millville:</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
               ✔ The Glasstown Arts District is home to galleries, artist studios, and cultural events.<br/>

✔ Maurice River offers recreational opportunities such as boating and fishing.<br/>

✔ The Millville Army Airfield Museum highlights the city’s aviation history.<br/>

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
              <Image src={heroImg} alt="Millville NJ homes" className="rounded-2xl shadow-xl w-full" width={1280} height={720} />
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
                                
Real Estate in Millville: Millville offers affordable housing options, with many homes featuring large yards and scenic views. The real estate market here is attractive for both homebuyers and investors, offering a great opportunity for those looking for homes in a quieter, less expensive area.
                                            </p>
                                    <h2>Why Choose Millville? 

      
                              
                              </h2><br/>
                                            <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                                            A thriving arts community with a rich history and cultural heritage.
      
                        <br/>
                              
                            Affordable housing options with easy access to outdoor activities.<br/>
                              
                         A peaceful and growing community with a bright future.<br/>
                  
                          Millville’s real estate market offers great investment potential for those looking for a quieter life.
                        
                                            </p>
                                          </motion.div>
                                    
                                        </div>
                                      </div>
                                    </section>

      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground">What Makes Millville Special</h2>
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
            <h2 className="font-heading text-3xl font-bold text-foreground">Our Promise to Millville Homeowners</h2>
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
              "Fast, fair, and friendly. They made selling my inherited Millville home completely painless. I'd recommend them to anyone."
            </blockquote>
            <p className="text-muted-foreground font-body font-medium">Diane W. — Millville, NJ</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground">Millville FAQs</h2>
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
