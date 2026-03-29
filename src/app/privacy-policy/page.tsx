"use client";

import { motion } from "framer-motion";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="gradient-navy section-padding">
        <div className="container-max text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Privacy Policy</h1>
            <p className="text-primary-foreground/70 font-body text-lg">Last updated: March 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="prose prose-lg font-body text-foreground">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-6">We collect personal information that you voluntarily provide when using our website, including your name, phone number, email address, and property address. We may also collect non-personal information such as browser type, IP address, and pages visited.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Evaluate your property and provide a cash offer</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal obligations</li>
              <li>Send you relevant updates (with your consent)</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground mb-6">We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our business, provided they agree to keep your information confidential.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-6">We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
            <p className="text-muted-foreground mb-6">Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though some features of the website may not function properly.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">6. Third-Party Links</h2>
            <p className="text-muted-foreground mb-6">Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground mb-6">You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, contact us using the information below.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">8. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-6">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground mb-6">If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@propertybuyernj.com" className="text-accent hover:underline">info@propertybuyernj.com</a> or call <a href="tel:917-856-1612" className="text-accent hover:underline">917-856-1612</a>.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
