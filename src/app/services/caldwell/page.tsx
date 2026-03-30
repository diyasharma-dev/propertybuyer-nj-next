"use client";

import FormWithOwner from "@/components/FormWithOwner";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, Phone, Home, DollarSign, Clock, Shield, Star, ArrowRight, Store, History, Heart, Car } from "lucide-react";
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
  { icon: Store, title: "Thriving Downtown", desc: "Bloomfield Avenue's boutiques, restaurants, and cafes make Caldwell's downtown one of Essex County's most charming commercial strips." },
  { icon: History, title: "Historic Architecture", desc: "Victorian-era homes and classic colonials give Caldwell a timeless character that attracts buyers and preserves property values." },
  { icon: Heart, title: "Tight-Knit Community", desc: "Caldwell's strong sense of community and local pride creates a welcoming environment that homeowners love." },
  { icon: Car, title: "Easy Highway Access", desc: "Convenient access to Routes 46 and 280 makes Caldwell a practical choice for commuters throughout the region." },
];

const promises = ["No Repairs Needed", "No Hidden Fees", "Close in 7–10 Days", "Fair Cash Offer", "As-Is Condition", "Free Consultation", "No Obligation", "We Handle Paperwork"];

const faqs = [
  { q: "I'm facing foreclosure on my Caldwell home — can you help?", a: "Yes. We specialize in helping homeowners in pre-foreclosure situations. A fast cash sale can stop the foreclosure process and protect your credit." },
  { q: "How do I get a cash offer for my Caldwell property?", a: "Call us or fill out our online form. We'll review your property details and deliver a no-obligation cash offer within 24 hours." },
  { q: "Do you buy multi-family homes in Caldwell?", a: "Absolutely. We purchase single-family homes, duplexes, triplexes, and other multi-family properties throughout Caldwell and Essex County." },
  { q: "What happens after I accept your Caldwell offer?", a: "We open escrow with a reputable title company, handle all paperwork, and coordinate closing on your chosen date. You receive cash at closing." },
];

export default function CaldwellPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={heroImg} alt="Caldwell New Jersey" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-navy-dark/75" />
        </div>
        <div className="relative container-max section-padding w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Welcome to Caldwell, NJ
</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
A Small Town with Big Charm</h1>
            <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-xl">
              Located in western Essex County, Caldwell is a quaint yet vibrant town with a close-knit community and a strong sense of tradition. Known for its historic homes, tree-lined streets, and friendly atmosphere, Caldwell offers an excellent quality of life. With easy access to major highways and public transportation, it is ideal for commuters to New York City while still offering a peaceful, suburban lifestyle.
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
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">Local Attractions & Amenities in Caldwell
</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
               ✔ The historic downtown area is home to local shops, cafes, and restaurants.<br/>

✔ Caldwell University offers academic excellence and community events.
<br/>
✔ Parks and recreational activities for families, including parks with playgrounds and sports fields.
<br/>
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
              <Image src={heroImg} alt="Caldwell NJ homes" className="rounded-2xl shadow-xl w-full" width={1280} height={720} />
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
                                Real Estate in Caldwell: Caldwell features a combination of older, historic homes and newer construction, offering a unique blend of architectural styles. Many properties in Caldwell are spacious, with large yards and tree-lined streets. The real estate market here offers options for first-time buyers, families, and those looking to invest in a more established neighborhood.
                                </p>
                        <h2>Why Choose Caldwell?

      
                  
                  </h2><br/>
                                <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                                 Family-friendly community with strong schools and public services.
            <br/>
                  
                  Rich in history and offers a mix of traditional charm and modern conveniences. <br/>
                  
                Easy access to both suburban tranquility and New York City.<br/>
      
                Real estate here is known for its long-term value and appeal.
            
                                </p>
                              </motion.div>
                        
                            </div>
                          </div>
                        </section>

      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground">What Makes Caldwell Special</h2>
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
            <h2 className="font-heading text-3xl font-bold text-foreground">Our Promise to Caldwell Homeowners</h2>
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
              "They were professional, honest, and fast. Exactly what I needed during a tough time. I can't recommend them enough."
            </blockquote>
            <p className="text-muted-foreground font-body font-medium">Linda M. — Caldwell, NJ</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground">Caldwell FAQs</h2>
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
