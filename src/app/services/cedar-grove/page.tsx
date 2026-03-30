"use client";

import FormWithOwner from "@/components/FormWithOwner";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, Phone, Home, DollarSign, Clock, Shield, Star, ArrowRight, Mountain, GraduationCap, TreePine, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import affordImg from "@/assets/afford.jpg";
import heroImg from "@/assets/area-general.jpg";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const stats = [
  { value: "", label: "Local Market Expertise" },
  { value: "", label: "Personalized Service" },
  { value: "", label: "Skilled Negotiation" },
  { value: "", label: "Smooth Transactions" },
];

const highlights = [
  { icon: Mountain, title: "Watchung Mountains", desc: "Cedar Grove is nestled against the scenic Watchung Mountains, offering stunning natural surroundings that boost property appeal." },
  { icon: GraduationCap, title: "Excellent Schools", desc: "Cedar Grove's top-rated school district is one of the biggest draws for families, keeping property values strong." },
  { icon: TreePine, title: "Beautiful Parks", desc: "From Hilltop Reservation to local nature trails, Cedar Grove's green spaces make it a paradise for outdoor enthusiasts." },
  { icon: Waves, title: "Reservoir Views", desc: "Properties near the Pequannock Watershed offer rare natural beauty that we factor into every cash offer we make." },
];

const promises = ["No Repairs Needed", "No Hidden Fees", "Close in 7–10 Days", "Fair Cash Offer", "As-Is Condition", "Free Consultation", "No Obligation", "We Handle Paperwork"];

const faqs = [
  { q: "Why should I sell my Cedar Grove home to Property Buyer NJ?", a: "We offer speed, certainty, and zero fees. No waiting for buyers, no agent commissions, no repairs — just a fair cash offer and a fast close." },
  { q: "Will you buy my Cedar Grove home if it has a lien?", a: "Yes. We work with title companies to resolve liens and encumbrances as part of the closing process. We handle the complexity so you don't have to." },
  { q: "How do you determine the value of my Cedar Grove property?", a: "We look at recent comparable sales in Cedar Grove, your home's condition, lot size, location, and current market trends to arrive at a fair offer." },
  { q: "Can I sell my Cedar Grove home if I'm going through a divorce?", a: "Absolutely. We work with both parties and their attorneys to facilitate a smooth, fast sale that satisfies all legal requirements." },
];

export default function CedarGrovePage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={heroImg} alt="Cedar Grove New Jersey" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-navy-dark/75" />
        </div>
        <div className="relative container-max section-padding w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Welcome to Cedar Grove, NJ</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Tranquil Living Close to Everything
            </h1>
            <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-xl">
              Cedar Grove is a picturesque town located in Essex County, offering a peaceful suburban environment with proximity to New York City. The town is known for its exceptional parks, top-rated schools, and close-knit community. Cedar Grove is ideal for those looking for a quiet lifestyle with access to everything the city has to offer. The town is a great choice for families, retirees, and professionals alike.
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
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">Local Attractions & Amenities in Cedar Grove:
</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
             ✔ Cedar Grove Park offers walking trails, sports fields, and a lake for fishing.<br/>

✔ A variety of local dining options and small businesses.<br/>

✔ Excellent schools, including Cedar Grove High School, which boasts a strong academic reputation.
<br/>
📞 Call or Text Us Now: +1917-856-1612<br/>
📩 Get Your Free Offer Today! Fill out our simple online form & we’ll reach out ASAP
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
              <Image src={heroImg} alt="Cedar Grove NJ homes" className="rounded-2xl shadow-xl w-full" width={1280} height={720} />
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
                          Real Estate in Cedar Grove: Cedar Grove offers a variety of residential properties, from charming single-family homes to townhouses and apartments. The real estate market here is desirable due to the town’s combination of peaceful living and convenient location. There is also a growing demand for homes in Cedar Grove, making it a solid choice for homebuyers and investors.
                          </p>
                  <h2>Why Choose Cedar Grove ?

            
            </h2><br/>
                          <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                            A serene, family-oriented atmosphere with great schools and parks
      <br/>
            
            Easy access to public transportation for commuting to NYC. <br/>
            
           A quiet, residential community with plenty of recreational opportunities.<br/>

           Real estate prices are competitive, making it a solid investment for future value.
      
                          </p>
                        </motion.div>
                  
                      </div>
                    </div>
                  </section>

      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground">What Makes Cedar Grove Special</h2>
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
            <h2 className="font-heading text-3xl font-bold text-foreground">Our Promise to Cedar Grove Homeowners</h2>
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
              "Best decision I made. No repairs, no open houses — just a fair offer and a fast close. Property Buyer NJ made it effortless."
            </blockquote>
            <p className="text-muted-foreground font-body font-medium">Tom B. — Cedar Grove, NJ</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground">Cedar Grove FAQs</h2>
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
