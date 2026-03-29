"use client";

import FormWithOwner from "@/components/FormWithOwner";
import { motion } from "framer-motion";
import { use } from "react";
import { MapPin, CheckCircle, Phone, Home, DollarSign, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import areaNutley from "@/assets/area-nutley.jpg";
import areaBelleville from "@/assets/area-belleville.jpg";
import areaBloomfield from "@/assets/area-bloomfield.jpg";
import areaGeneral from "@/assets/area-general.jpg";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const areaData: Record<string, { name: string; desc: string; details: string; image: any }> = {
  nutley: {
    name: "Nutley",
    desc: "Nutley is a charming township in Essex County known for its tree-lined streets and strong community spirit. Whether you're looking to sell quickly or need a hassle-free sale, Property Buyer NJ is your trusted partner in Nutley.",
    details: "With our deep roots in the Nutley community, we understand the local market like no one else. From the historic homes near Kingsland Manor to the modern residences along Franklin Avenue, we've helped countless Nutley homeowners get fair cash offers. Our team knows every neighborhood, every school district, and every factor that influences your property's value.",
    image: areaNutley,
  },
  belleville: {
    name: "Belleville",
    desc: "Belleville offers a mix of residential charm and urban convenience. We help homeowners in Belleville sell their homes fast for cash with no repairs, fees, or stress.",
    details: "Belleville's diverse neighborhoods—from the tree-lined streets near Branch Brook Park to the bustling Silver Lake area—each have their own character. Whether your home needs major renovations or is in perfect condition, we buy Belleville houses as-is and close on your timeline.",
    image: areaBelleville,
  },
  bloomfield: {
    name: "Bloomfield",
    desc: "Bloomfield is a vibrant community with a rich history. Our team provides fair cash offers to Bloomfield homeowners looking for a quick and smooth sale.",
    details: "From the stunning Green neighborhood to the lively Watsessing Park area, Bloomfield has something for everyone. We've been buying homes throughout Bloomfield for years, giving homeowners a stress-free alternative to traditional listings with agents, showings, and months of waiting.",
    image: areaBloomfield,
  },
  "cedar-grove": {
    name: "Cedar Grove",
    desc: "Cedar Grove is known for its beautiful parks and excellent schools. We buy houses as-is in Cedar Grove, making your home sale simple and stress-free.",
    details: "Nestled against the Watchung Mountains, Cedar Grove offers a suburban paradise with easy access to NYC. Whether you own a split-level on Pompton Avenue or a colonial near the reservoir, we provide competitive cash offers that reflect the true value of Cedar Grove properties.",
    image: areaGeneral,
  },
  caldwell: {
    name: "Caldwell",
    desc: "Caldwell boasts a thriving downtown and tight-knit community. Get a competitive cash offer for your Caldwell property today.",
    details: "The Borough of Caldwell, with its charming Bloomfield Avenue shops and Victorian-era homes, is one of Essex County's hidden gems. We've helped Caldwell homeowners navigate difficult situations—foreclosure, divorce, inheritance—with fast, fair cash offers and zero hassle.",
    image: areaGeneral,
  },
  verona: {
    name: "Verona",
    desc: "Verona is a picturesque borough with a welcoming atmosphere. We help Verona homeowners sell quickly without the hassles of traditional listings.",
    details: "Verona's beautiful Verona Park, excellent schools, and close-knit community make it a desirable place to live. When life circumstances require a fast sale, our team is here to make the process seamless—from your first call to closing day.",
    image: areaGeneral,
  },
  newark: {
    name: "Newark",
    desc: "Newark is New Jersey's largest city with diverse neighborhoods and investment opportunities. We buy homes across Newark in any condition.",
    details: "From the Ironbound District to the revitalizing downtown core, Newark's real estate market is dynamic and varied. We buy properties in every Newark neighborhood—whether it's a multi-family in the North Ward, a brownstone in Forest Hill, or a fixer-upper in the South Ward. No condition is too challenging for our team.",
    image: areaGeneral,
  },
  millville: {
    name: "Millville",
    desc: "Millville offers affordability and a growing community. Whether facing foreclosure or simply want a fast sale, we're here to help Millville homeowners.",
    details: "Known as the 'Holly City,' Millville in Cumberland County has a unique charm. Our team serves Millville homeowners who need a quick, reliable sale—whether you're relocating, downsizing, or dealing with a property you've inherited.",
    image: areaGeneral,
  },
};

const benefits = [
  { icon: Clock, text: "Close in as little as 7 days" },
  { icon: DollarSign, text: "No hidden fees or commissions" },
  { icon: Home, text: "We buy in any condition" },
  { icon: Shield, text: "Fair, competitive cash offers" },
];

export default function ServiceAreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = use(params);
  const data = areaData[area] || { name: "Area", desc: "We serve this area.", details: "", image: areaGeneral };

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={data.image} alt={`${data.name} New Jersey`} className="object-cover" fill priority />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/75 to-navy/50" />
        </div>
        <div className="relative container-max section-padding w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Area Served</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Sell Your House Fast in {data.name}
            </h1>
            <p className="text-primary-foreground/80 font-body text-lg">{data.desc}</p>
            <a href="tel:917-856-1612" className="inline-block mt-6">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-orange-dark font-body font-semibold text-base px-8">
                <Phone className="w-4 h-4 mr-2" /> Call 917-856-1612
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Why Sell Your {data.name} Home to Us?
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">{data.details}</p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map(b => (
                  <div key={b.text} className="flex items-center gap-3 bg-cream rounded-xl px-4 py-3">
                    <b.icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-body font-medium text-foreground text-sm">{b.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Image src={data.image} alt={`Homes in ${data.name}`} className="rounded-2xl shadow-xl" loading="lazy" width={1280} height={720} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-max max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground">Our Promise to {data.name} Homeowners</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {["No Repairs Needed", "No Hidden Fees", "Close in 7-10 Days", "Fair Cash Offer", "As-Is Condition", "Free Consultation", "No Obligation", "We Handle Paperwork"].map(item => (
              <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="flex items-center gap-3 bg-card border rounded-xl px-5 py-4 hover:shadow-md transition-shadow">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-body font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <FormWithOwner />
        </div>
      </section>
    </>
  );
}
