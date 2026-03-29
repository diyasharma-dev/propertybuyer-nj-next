"use client";

import { motion } from "framer-motion";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="gradient-navy section-padding">
        <div className="container-max text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Terms & Conditions</h1>
            <p className="text-primary-foreground/70 font-body text-lg">Last updated: March 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg font-body text-foreground">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">By accessing and using the Property Buyer NJ website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">2. Services</h2>
            <p className="text-muted-foreground mb-6">Property Buyer NJ provides cash home-buying services in New Jersey. We purchase residential properties as-is, without requiring repairs, inspections, or realtor commissions. All offers are subject to evaluation and are not guaranteed until a formal agreement is signed.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">3. Property Submissions</h2>
            <p className="text-muted-foreground mb-6">When you submit property information through our forms, you represent that you are the legal owner or authorized representative of the property. The information provided must be accurate and complete to the best of your knowledge.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">4. No Obligation</h2>
            <p className="text-muted-foreground mb-6">Submitting your information does not create a binding contract. You are under no obligation to accept any offer we make. Our cash offers are provided free of charge with no hidden fees or commitments.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">5. Communication Consent</h2>
            <p className="text-muted-foreground mb-6">By submitting a form on our website, you consent to being contacted by Property Buyer NJ via phone, email, or text message regarding your property and our services. You may opt out at any time.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">All content on this website, including text, images, logos, and design elements, is the property of Property Buyer NJ and is protected by applicable intellectual property laws. Unauthorized use is prohibited.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">Property Buyer NJ shall not be liable for any damages arising from the use of this website or reliance on information provided herein. All information is provided "as is" without warranties of any kind.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">8. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated date. Continued use of the website constitutes acceptance of revised terms.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">9. Contact</h2>
            <p className="text-muted-foreground mb-6">If you have questions about these Terms and Conditions, please contact us at <a href="mailto:info@propertybuyernj.com" className="text-accent hover:underline">info@propertybuyernj.com</a> or call <a href="tel:917-856-1612" className="text-accent hover:underline">917-856-1612</a>.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
