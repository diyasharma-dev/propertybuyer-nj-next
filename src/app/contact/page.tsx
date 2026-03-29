"use client";

import FormWithOwner from "@/components/FormWithOwner";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const contactInfo = [
  { icon: Mail, label: "Email Address", value: "info@propertybuyernj.com", href: "mailto:jpaulino1201@gmail.com" },
  { icon: Phone, label: "Phone Number", value: "1-917-856-1612", href: "tel:917-856-1612" },
  { icon: MapPin, label: "Office Address", value: "157 Highfield Ln, Nutley, NJ 07110", href: undefined },
];

export default function ContactPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
  };

  return (
    <>
      <section className="gradient-navy section-padding">
        <div className="container-max text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-primary-foreground/70 font-body text-lg">
              Have some questions? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((c) => (
              <motion.div key={c.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="bg-card border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <c.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{c.label}</h3>
                {c.href ? (
                  <a href={c.href} className="text-muted-foreground font-body text-sm hover:text-accent transition-colors">{c.value}</a>
                ) : (
                  <p className="text-muted-foreground font-body text-sm">{c.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Got A Questions For Us? Or Need To Drop Us A Note?
</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Full Name" required className="font-body" />
                <Input placeholder="Phone Number" type="tel" required className="font-body" />
                <Input placeholder="Email" type="email" required className="font-body" />
                <Input placeholder="Subject" required className="font-body" />
                <Textarea placeholder="Your Message" rows={5} required className="font-body" />
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-orange-dark font-body font-semibold py-6">
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Schedule a Consultation</h2>
              <p className="text-muted-foreground font-body text-sm mb-4">
                Pick a preferred date and we'll reach out to confirm your appointment.
              </p>
              <div className="bg-card border rounded-2xl p-4 inline-block">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="pointer-events-auto"
                  disabled={(d) => d < new Date()}
                />
              </div>
              {date && (
                <p className="mt-4 text-sm font-body text-accent font-semibold">
                  Selected: {date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">Find Us</h2>
            <p className="text-muted-foreground font-body">157 Highfield Ln, Nutley, NJ 07110</p>
          </motion.div>
          <div className="rounded-2xl overflow-hidden shadow-lg border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.8!2d-74.16!3d40.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2ff!2s157+Highfield+Ln+Nutley+NJ+07110!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Property Buyer NJ Office Location"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-max">
          <FormWithOwner />
        </div>
      </section>
    </>
  );
}
