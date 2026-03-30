"use client";

import FormWithOwner from "@/components/FormWithOwner";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, Phone, Home, DollarSign, Clock, Shield, Star, ArrowRight, Leaf, Music, ShoppingBag, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import affordImg from "@/assets/afford.jpg";
import heroImg from "@/assets/area-bloomfield.jpg";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const stats = [
  { value: "", label: "Local Market Expertise" },
  { value: "", label: "Personalized Service" },
  { value: "", label: "Skilled Negotiation" },
  { value: "", label: "Smooth Transactions" },
];

const highlights = [
  { icon: Leaf, title: "Watsessing Park", desc: "Bloomfield's beloved green spaces and parks make it a top choice for families and nature lovers alike." },
  { icon: Music, title: "Rich Cultural History", desc: "From its historic downtown to its vibrant arts scene, Bloomfield has a character that drives strong community pride." },
  { icon: ShoppingBag, title: "Thriving Commerce", desc: "Bloomfield Avenue's shops, restaurants, and services create a walkable, convenient lifestyle for residents." },
  { icon: Building, title: "Varied Housing Stock", desc: "Colonials, Victorians, split-levels, and condos — Bloomfield's diverse housing market means we buy all property types." },
];

const promises = ["No Repairs Needed", "No Hidden Fees", "Close in 7–10 Days", "Fair Cash Offer", "As-Is Condition", "Free Consultation", "No Obligation", "We Handle Paperwork"];

const faqs = [
  { q: "How do I start the process of selling my Bloomfield home?", a: "Simply call us or fill out our online form. We'll schedule a quick walkthrough and deliver a no-obligation cash offer within 24 hours." },
  { q: "Can you buy my Bloomfield home if it's in foreclosure?", a: "Yes. We work with homeowners in pre-foreclosure and foreclosure situations. Acting quickly can help you avoid further financial damage." },
  { q: "Do I need to be present for the closing in Bloomfield?", a: "Not necessarily. We can coordinate remote closings through a title company, making the process convenient no matter your situation." },
  { q: "What if I inherited a Bloomfield property I don't want?", a: "We handle inherited properties regularly. We can work with estates, multiple heirs, and probate situations to make the sale as smooth as possible." },
];

export default function BloomfieldPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={heroImg} alt="Bloomfield New Jersey" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-navy-dark/75" />
        </div>
        <div className="relative container-max section-padding w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Welcome to Bloomfield, NJ
</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              A Perfect Blend of Suburban and Urban Living
            </h1>
            <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-xl">
              Nestled in the heart of Essex County, Bloomfield strikes the perfect balance between peaceful suburban living and easy access to urban excitement. This vibrant community welcomes you with tree-lined streets, beautifully maintained parks, and a warm, diverse atmosphere that makes everyone feel at home. Families love Bloomfield for its top-rated schools and safe, friendly neighborhoods. Young professionals appreciate the quick commute to Manhattan – just 30 minutes by train – along with the thriving local dining and entertainment scene along Bloomfield Avenue. Nature lovers enjoy spending time in Brookdale Park, while culture seekers explore the town's historic sites and community events.
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
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">Local Attractions & Amenities in Bloomfield</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Watsessing Park and Brookdale Park offer beautiful green spaces for outdoor activities.<br/>

✔ Bloomfield Center features unique shops, restaurants, and cultural experiences.<br/>

✔ Bloomfield Public Library hosts events for all ages.<br/>

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
              <Image src={heroImg} alt="Bloomfield NJ homes" className="rounded-2xl shadow-xl w-full" width={1280} height={720} />
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
                     Real Estate in Bloomfield: The Bloomfield real estate market offers a variety of homes, from traditional Colonial-style houses to more modern apartments and condos. The neighborhood offers homes that cater to a range of budgets, making it a great option for first-time homebuyers and those looking for long-term investments. The demand for properties in Bloomfield has remained strong due to its proximity to public transportation and access to New York City.
                    </p>
            <h2>Why Choose Bloomfield ?

      
      </h2><br/>
                    <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                      Affordable real estate with easy access to New York City.
<br/>
      
      Active community with plenty of events and programs for residents <br/>
      
     Excellent parks and recreation facilities for families and outdoor enthusiasts.

                    </p>
                  </motion.div>
            
                </div>
              </div>
            </section>
            
      

      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground">What Makes Bloomfield Special</h2>
            <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">We factor in everything that makes Bloomfield unique when crafting your offer.</p>
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
            <h2 className="font-heading text-3xl font-bold text-foreground">Our Promise to Bloomfield Homeowners</h2>
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
              "Smooth process from start to finish. They handled everything and I walked away with cash fast. Best decision I made."
            </blockquote>
            <p className="text-muted-foreground font-body font-medium">Sandra K. — Bloomfield, NJ</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground">Bloomfield FAQs</h2>
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
