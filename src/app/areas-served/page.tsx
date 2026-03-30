"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FormWithOwner from "@/components/FormWithOwner";
import areaNutley from "@/assets/area-nutley.jpg";
import Belleville from "@/assets/Belleville.png";
import areaBloomfield from "@/assets/area-bloomfield.jpg";
import areaGeneral from "@/assets/area-general.jpg";
import condos from "@/assets/condos.png";
import homes from "@/assets/homes.jpeg";
import rentals from "@/assets/rentals.png";
import townhomes from "@/assets/townhomes.jpeg";
import verona from "@/assets/verona.png";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const areas = [
  { slug: "nutley",      name: "Nutley",      county: "Essex County",      tagline: "A Charming Suburb with NYC Convenience",       image: areaNutley },

  { slug: "belleville",  name: "Belleville",  county: "Essex County",      tagline: "Affordable Living with Urban Accessibility",    image: Belleville },

  { slug: "bloomfield",  name: "Bloomfield",  county: "Essex County",      tagline: "Historic Charm Meets Modern Living",            image: areaBloomfield },

  { slug: "cedar-grove", name: "Cedar Grove", county: "Essex County",      tagline: "Peaceful Suburban Living at Its Finest",        image: townhomes},

  { slug: "caldwell",    name: "Caldwell",    county: "Essex County",      tagline: "Small-Town Feel with Big-City Access",          image: verona },
  { slug: "verona",      name: "Verona",      county: "Essex County",      tagline: "Scenic Borough with a Welcoming Community",     image: rentals },

  { slug: "newark",      name: "Newark",      county: "Essex County",      tagline: "NJ's Largest City, Full of Opportunity",        image: homes },

  { slug: "millville",   name: "Millville",   county: "Cumberland County", tagline: "Affordable Living in Southern New Jersey",      image: condos },
];

export default function AreasServedPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy section-padding">
        <div className="container-max text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">New Jersey</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Areas We Serve
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl mx-auto mb-8">
              We buy houses for cash across New Jersey. Select your area below to learn more about how we can help you sell fast.
            </p>
            <a href="tel:917-856-1612">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-orange-dark font-body font-semibold px-8">
                <Phone className="w-4 h-4 mr-2" /> Call 917-856-1612
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((a, i) => (
              <motion.div
                key={a.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.07 }}
                className="bg-card border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={a.image}
                    alt={`${a.name}, New Jersey`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <MapPin className="w-3 h-3 text-white" />
                    <span className="text-white text-xs font-body font-medium">{a.county}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="font-heading text-lg font-bold text-foreground mb-1">{a.name}</h2>
                  <p className="text-muted-foreground font-body text-sm mb-4 leading-snug">{a.tagline}</p>
                  <Link
                    href={`/services/${a.slug}`}
                    className="inline-flex items-center gap-1.5 font-body font-semibold text-sm text-foreground hover:text-accent transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <FormWithOwner />
        </div>
      </section>
    </>
  );
}
