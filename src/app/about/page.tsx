"use client";

import FormWithOwner from "@/components/FormWithOwner";
import { motion } from "framer-motion";
import { CheckCircle, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import aboutImg from "@/assets/about-house.jpg";
import sellImg from "@/assets/sell-house.jpg";
import commentImg from "@/assets/comment.jpg";
import type { Metadata } from "next";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const areas = ["Nutley", "Belleville", "Bloomfield", "Cedar Grove", "Caldwell", "Verona", "Newark", "Millville"];
const propertyTypes = ["Outdated Homes", "Damaged Homes", "Rentals", "Foreclosures", "Townhomes", "Condos"];

export default function AboutPage() {
  return (
    <>
      <section className="gradient-navy section-padding">
        <div className="container-max text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Us</h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl mx-auto">
              We are Property Buyer NJ — your dedicated ally in simplifying the home buying and selling process across New Jersey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">We Are Property Buyer NJ</h2>
              <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                At Property Buyer NJ, we're not just another real estate company—we're your dedicated ally in simplifying the home buying and selling process across New Jersey. With a proven track record in Nutley, Belleville, Bloomfield, Caldwell, Cedar Grove, Verona, Newark, Millville, and surrounding areas, we pride ourselves on making every transaction smooth, stress-free, and tailored to you.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {["Local Market Expertise", "Personalized Service", "Financial Hardship", "Rental Property"].map(item => (
                  <span key={item} className="bg-cream rounded-full px-4 py-2 text-sm font-body font-medium text-foreground flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-accent" />{item}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Image src={aboutImg} alt="New Jersey communities" className="rounded-2xl shadow-xl" loading="lazy" width={1280} height={854} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-max text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">What Kinds of Properties Do We Buy?</h2>
            <p className="text-muted-foreground font-body mb-10 max-w-xl mx-auto">
              Maybe your home has significant damage, is in an undesirable location, or the materials are out of date.

Even if you think your home is unsellable, we will get you an offer for it. You can’t beat the speed of our offer through a traditional sale.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {propertyTypes.map(p => (
              <div key={p} className="bg-card border rounded-xl p-5 flex items-center gap-3 hover:shadow-md transition-shadow">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-body font-medium text-foreground text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Image src={sellImg} alt="Selling homes in NJ" className="rounded-2xl shadow-xl" loading="lazy" width={1280} height={854} />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">What Sets Property Buyer NJ Apart?</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
               Our mission is straightforward: to ensure that buying or selling your New Jersey house is as hassle-free and efficient as possible.” Whether you’re facing a mortgage or have yet to make a house payment, foreclosure, or bankruptcy, we understand that selling a house can be daunting. Here’s where we step in: rather than acting as mere intermediaries, we purchase houses directly from individuals facing challenges such as mortgage arrears, foreclosure, or bankruptcy, providing a solution when the bank reclaims the property.” Once we purchase the home, the house sale is our target. Propertybuyernj.com offers a unique service that eliminates the need for managers, inspectors, and hidden fees
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                “We buy houses as is, reducing the hassle of repairs and saving time and money.” Our qualified experts will collaborate with you one-on-one to fully grasp your needs before offering a tailored solution to assist you in achieving your goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Property Buyer NJ – Location In The New Jersey Area
</h2>
              <p className="text-muted-foreground font-body mb-4 leading-relaxed">
              Our goal is simple: To remove the headaches from buying or selling your home in New Jersey. Whether you’re dealing with mortgage challenges, foreclosure, bankruptcy, or simply need a fast and fair sale, we’re here to help. No pressure, no complications—just a straightforward solution designed for your situation. Here’s where we step in: rather than acting as mere intermediaries, we purchase houses directly from individuals facing challenges such as mortgage arrears, foreclosure, or bankruptcy, providing a solution when the bank reclaims the property.
              </p>
              <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                Once we purchase the home, the house sale is our target. Propertybuyernj.com offers a unique service that eliminates the need for managers, inspectors, and hidden fees. “We buy houses as is, reducing the hassle of repairs and saving time and money.” Our qualified experts will collaborate with you one-on-one to fully grasp your needs before offering a tailored solution to assist you in achieving your goals.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Image src={commentImg} alt="Community youth program" className="rounded-2xl shadow-xl" loading="lazy" width={1280} height={854} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-max text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Areas We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map(a => (
              <Link key={a} href={`/services/${a.toLowerCase().replace(" ", "-")}`}
                className="bg-card border rounded-full px-5 py-2.5 font-body font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all">
                <MapPin className="w-4 h-4 inline mr-1" />{a}
              </Link>
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
