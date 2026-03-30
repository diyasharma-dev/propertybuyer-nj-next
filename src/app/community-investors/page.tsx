"use client";

import FormWithOwner from "@/components/FormWithOwner";
import { motion } from "framer-motion";
import { Home, DollarSign, Handshake, TrendingUp } from "lucide-react";
import Image from "next/image";
import communityImg from "@/assets/community.jpg";
import affordImg from "@/assets/afford.jpg";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const benefits = [
  { icon: TrendingUp, title: "High ROI Potential", desc: "Earn rental income, appreciation & tax benefits." },
  { icon: DollarSign, title: "Passive Income", desc: "Generate monthly cash flow effortlessly." },
  { icon: Handshake, title: "Diversification", desc: "Hedge against volatility with tangible assets." },
  { icon: Home, title: "Leverage Power", desc: "Amplify returns using mortgages & OPM." },
];

export default function CommunityInvestorsPage() {
  return (
    <>
      <section className="gradient-navy section-padding">
        <div className="container-max text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Community Investors</h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl mx-auto">
              We're Community Investors, not just Real Estate Investors. Creating positive change in communities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">More Than Just Investors</h2>
              <p className="text-muted-foreground font-body mb-4 leading-relaxed">
              At Property Buyer NJ, we take pride in being Community Investors, not just Real Estate Investors. For years, we have been dedicated to creating positive change in inner cities because we believe that the residents are the heart of any community, not just the properties.
              </p>
              <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                Our commitment goes beyond property investment. We actively participate in programs designed to rebuild communities by improving people’s lives. We are proud to volunteer weekly at the Caven Point recreation sports program in Jersey City, helping to shape the future of our youth through sports and mentorship. Additionally, we sponsor the impactful film documentary “How Many Lives,” which sheds light on important social issues.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Image src={communityImg} alt="Community youth program" className="rounded-2xl shadow-xl" loading="lazy" width={1280} height={854} />
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
          Through our involvement with youth organizations and community programs, we have the opportunity to guide and mentor inner-city youth. We frequently speak at schools and community events, covering a variety of topics aimed at positively influencing young lives. If you would like us to speak at your public school or community event, please contact us, and a representative will get back to you shortly.
        </p>

        <p className="text-muted-foreground font-body mb-4 leading-relaxed">
          Our mission is simple: To serve and uplift ALL residents of OUR COMMUNITIES!
        </p>
      </motion.div>

    </div>
  </div>
</section>

      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground">Investor Partner Benefits</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                className="bg-card border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-10">Want to Be Part as an Investor?</h2>
          <FormWithOwner />
        </div>
      </section>
    </>
  );
}
