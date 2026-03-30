"use client";

import FormWithOwner from "@/components/FormWithOwner";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, Phone, Home, DollarSign, Clock, Shield, Star, ArrowRight, Globe, TrendingUp, Building2, Train } from "lucide-react";
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
  { icon: Globe, title: "Ironbound District", desc: "Newark's famous Ironbound neighborhood is a cultural hub with strong community ties and high property demand." },
  { icon: TrendingUp, title: "Revitalizing Market", desc: "Newark's downtown revitalization is driving significant investment and rising property values across the city." },
  { icon: Building2, title: "Diverse Property Types", desc: "From brownstones to multi-families to condos, Newark's varied housing stock means we buy all property types in any condition." },
  { icon: Train, title: "Transit Hub", desc: "Newark Penn Station connects residents to NYC, the airport, and the entire Northeast Corridor — a major value driver." },
];

const promises = ["No Repairs Needed", "No Hidden Fees", "Close in 7–10 Days", "Fair Cash Offer", "As-Is Condition", "Free Consultation", "No Obligation", "We Handle Paperwork"];

const faqs = [
  { q: "Do you buy homes in all Newark neighborhoods?", a: "Yes. We buy properties in every Newark neighborhood — the Ironbound, North Ward, South Ward, West Ward, East Ward, and Forest Hill. No area is off-limits." },
  { q: "My Newark property has code violations. Will you still buy it?", a: "Absolutely. We buy properties with code violations, unpermitted work, and structural issues. We handle all of that after closing — you don't need to fix anything." },
  { q: "Can you buy my Newark multi-family property?", a: "Yes. We purchase duplexes, triplexes, four-families, and larger multi-unit properties throughout Newark. Tenant-occupied is fine too." },
  { q: "How do you handle the Newark closing process?", a: "We work with a reputable local title company to handle all paperwork, title searches, and legal requirements. You just show up to sign and collect your cash." },
];

export default function NewarkPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={heroImg} alt="Newark New Jersey" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-navy-dark/75" />
        </div>
        <div className="relative container-max section-padding w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Welcome to Newark, NJ
</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              A Thriving City with Endless Opportunities
            </h1>
            <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-xl">
             Newark, the largest city in New Jersey, offers a vibrant urban lifestyle with a rich cultural scene, excellent dining options, and easy access to New York City. With its strong economy, diverse population, and world-class amenities, Newark has become a thriving hub for both businesses and residents. The city features beautiful parks, top-tier educational institutions, and a wide range of entertainment options.
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
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">Local Attractions & Amenities in  Newark
</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                ✔ Prudential Center, a major venue for concerts, sports events, and entertainment.<br/>

✔ The Newark Museum of Art, offering exhibits, performances, and events<br/>

✔ Plenty of dining, shopping, and cultural events throughout the year.<br/>

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
              <Image src={heroImg} alt="Newark NJ homes" className="rounded-2xl shadow-xl w-full" width={1280} height={720} />
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
                                   Real Estate in Newark: Newark’s real estate market has become increasingly attractive for investors and first-time homebuyers due to its growing economy and proximity to New York City. The city offers a mix of housing options, from historic brownstones to modern condos and apartments. Whether you’re looking for a city apartment or a family home, Newark has diverse opportunities.
                                      </p>
                              <h2>Why Choose Newark?

                        
                        </h2><br/>
                                      <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                                      Urban living with a wide variety of amenities and services.

                  <br/>
                        
                        Easy access to New York City and major transportation hubs. <br/>
                        
                    A dynamic, diverse community with plenty of job opportunities and business growth.<br/>
            
                    Real estate here is on the rise, making it a prime location for investment.
                  
                                      </p>
                                    </motion.div>
                              
                                  </div>
                                </div>
                              </section>

      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground">What Makes Newark Unique</h2>
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
            <h2 className="font-heading text-3xl font-bold text-foreground">Our Promise to Newark Homeowners</h2>
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
              "I had a property in rough shape and they still gave me a great offer. No judgment, no games — just a fair deal and fast cash."
            </blockquote>
            <p className="text-muted-foreground font-body font-medium">Carlos D. — Newark, NJ</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground">Newark FAQs</h2>
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
