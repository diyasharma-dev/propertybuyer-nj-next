"use client";
import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Tag, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { postContent } from "../content";
import affordImg from "@/assets/afford.jpg";
import sellImg from "@/assets/sell-house.jpg";
import communityImg from "@/assets/community.jpg";
import aboutImg from "@/assets/about-house.jpg";
import homesImg from "@/assets/homes.jpeg";
import areaImg from "@/assets/area-general.jpg";
import areaBloomfieldImg from "@/assets/area-bloomfield.jpg";
import areaNutleyImg from "@/assets/area-nutley.jpg";
import affordabilityImg from "@/assets/affordability.jpg";
import condosImg from "@/assets/condos.png";
import rentalsImg from "@/assets/rentals.png";
import townhomesImg from "@/assets/townhomes.jpeg";
import heroImg from "@/assets/hero-house.jpg";
import sellhomeImg from "@/assets/sellhome.jpg";
import commentImg from "@/assets/comment.jpg";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const imageMap: Record<string, typeof sellImg> = {
  "sell-house-fast-nutley-nj-2025": areaNutleyImg,
  "we-buy-houses-belleville-nj-2025": affordabilityImg,
  "selling-house-as-is-bloomfield-nj-2025": areaBloomfieldImg,
  "avoid-foreclosure-clifton-nj-2025": homesImg,
  "sell-inherited-home-essex-county-nj": aboutImg,
  "sell-fire-damaged-house-new-jersey": sellImg,
  "divorce-selling-house-new-jersey-2025": communityImg,
  "we-buy-houses-kearny-nj-2025": heroImg,
  "cash-home-buyers-passaic-county-nj-2025": areaImg,
  "cheap-cash-home-buyers-new-jersey": affordImg,
  "cash-house-buyers-cumberland-county-nj": townhomesImg,
  "montclair-cash-home-buyers-2025": condosImg,
  "sell-house-fast-rutherford-nj-2025": rentalsImg,
  "nj-homeowners-hidden-tax-trap-2025": sellhomeImg,
  "top-cash-home-buyers-new-jersey-2025": commentImg,
  "sell-house-fast-nutley-cash-buyer": areaNutleyImg,
  "sell-house-as-is-jersey-city-nj": heroImg,
  "we-buy-houses-paramus-nj": areaImg,
  "avoid-foreclosure-jefferson-nj": homesImg,
  "sell-house-as-is-west-milford-nj": areaBloomfieldImg,
  "verona-nj-cash-home-buyers": affordabilityImg,
  "sell-home-memories-repairs-clutter-nj": communityImg,
  "sell-home-before-holidays-nj": sellImg,
  "turn-property-into-purpose-holiday": aboutImg,
  "your-home-our-offer-nj": sellhomeImg,
  "inherited-property-new-jersey-sell-quickly": affordImg,
  "how-to-get-fair-cash-offer-nj-home": townhomesImg,
  "probate-property-sales-new-jersey": commentImg,
  "tired-of-showings-sell-belleville-home-as-is": rentalsImg,
  "what-bloomfield-sellers-should-know": condosImg,
  "fair-cash-offer-cedar-grove-house": areaBloomfieldImg,
  "avoid-essex-county-tax-drain-caldwell": heroImg,
  "cash-house-buyer-belleville-nj-reasons": affordabilityImg,
  "selling-bloomfield-property-as-is": areaBloomfieldImg,
  "west-milford-real-estate-market-2026": areaImg,
  "cash-home-buyer-jefferson-nj": homesImg,
  "selling-nj-house-without-repairs": sellImg,
  "what-does-cash-home-buyer-nj-do": affordImg,
};

const relatedSlugs: Record<string, string[]> = {
  "sell-house-fast-nutley-nj-2025": ["we-buy-houses-belleville-nj-2025", "sell-house-fast-nutley-cash-buyer"],
  "we-buy-houses-belleville-nj-2025": ["tired-of-showings-sell-belleville-home-as-is", "cash-house-buyer-belleville-nj-reasons"],
  "selling-house-as-is-bloomfield-nj-2025": ["what-bloomfield-sellers-should-know", "selling-bloomfield-property-as-is"],
  "avoid-foreclosure-clifton-nj-2025": ["avoid-foreclosure-jefferson-nj", "divorce-selling-house-new-jersey-2025"],
  "sell-inherited-home-essex-county-nj": ["inherited-property-new-jersey-sell-quickly", "probate-property-sales-new-jersey"],
  "sell-fire-damaged-house-new-jersey": ["how-to-get-fair-cash-offer-nj-home", "selling-nj-house-without-repairs"],
  "divorce-selling-house-new-jersey-2025": ["avoid-foreclosure-clifton-nj-2025", "cash-home-buyers-passaic-county-nj-2025"],
  "we-buy-houses-kearny-nj-2025": ["cash-home-buyers-passaic-county-nj-2025", "sell-house-fast-rutherford-nj-2025"],
  "cash-home-buyers-passaic-county-nj-2025": ["we-buy-houses-kearny-nj-2025", "avoid-foreclosure-clifton-nj-2025"],
  "cheap-cash-home-buyers-new-jersey": ["top-cash-home-buyers-new-jersey-2025", "what-does-cash-home-buyer-nj-do"],
  "cash-house-buyers-cumberland-county-nj": ["sell-house-fast-nutley-nj-2025", "how-to-get-fair-cash-offer-nj-home"],
  "montclair-cash-home-buyers-2025": ["sell-inherited-home-essex-county-nj", "inherited-property-new-jersey-sell-quickly"],
  "sell-house-fast-rutherford-nj-2025": ["we-buy-houses-kearny-nj-2025", "sell-house-fast-nutley-nj-2025"],
  "nj-homeowners-hidden-tax-trap-2025": ["how-to-get-fair-cash-offer-nj-home", "divorce-selling-house-new-jersey-2025"],
  "top-cash-home-buyers-new-jersey-2025": ["cheap-cash-home-buyers-new-jersey", "what-does-cash-home-buyer-nj-do"],
  "sell-house-fast-nutley-cash-buyer": ["sell-house-fast-nutley-nj-2025", "we-buy-houses-belleville-nj-2025"],
  "sell-house-as-is-jersey-city-nj": ["selling-nj-house-without-repairs", "what-does-cash-home-buyer-nj-do"],
  "we-buy-houses-paramus-nj": ["sell-house-fast-rutherford-nj-2025", "we-buy-houses-kearny-nj-2025"],
  "avoid-foreclosure-jefferson-nj": ["avoid-foreclosure-clifton-nj-2025", "cash-home-buyer-jefferson-nj"],
  "sell-house-as-is-west-milford-nj": ["west-milford-real-estate-market-2026", "selling-nj-house-without-repairs"],
  "verona-nj-cash-home-buyers": ["fair-cash-offer-cedar-grove-house", "how-to-get-fair-cash-offer-nj-home"],
  "sell-home-memories-repairs-clutter-nj": ["your-home-our-offer-nj", "sell-home-before-holidays-nj"],
  "sell-home-before-holidays-nj": ["turn-property-into-purpose-holiday", "your-home-our-offer-nj"],
  "turn-property-into-purpose-holiday": ["sell-home-before-holidays-nj", "sell-home-memories-repairs-clutter-nj"],
  "your-home-our-offer-nj": ["sell-home-memories-repairs-clutter-nj", "how-to-get-fair-cash-offer-nj-home"],
  "inherited-property-new-jersey-sell-quickly": ["sell-inherited-home-essex-county-nj", "probate-property-sales-new-jersey"],
  "how-to-get-fair-cash-offer-nj-home": ["what-does-cash-home-buyer-nj-do", "selling-nj-house-without-repairs"],
  "probate-property-sales-new-jersey": ["inherited-property-new-jersey-sell-quickly", "sell-inherited-home-essex-county-nj"],
  "tired-of-showings-sell-belleville-home-as-is": ["we-buy-houses-belleville-nj-2025", "cash-house-buyer-belleville-nj-reasons"],
  "what-bloomfield-sellers-should-know": ["selling-bloomfield-property-as-is", "selling-house-as-is-bloomfield-nj-2025"],
  "fair-cash-offer-cedar-grove-house": ["verona-nj-cash-home-buyers", "avoid-essex-county-tax-drain-caldwell"],
  "avoid-essex-county-tax-drain-caldwell": ["fair-cash-offer-cedar-grove-house", "nj-homeowners-hidden-tax-trap-2025"],
  "cash-house-buyer-belleville-nj-reasons": ["we-buy-houses-belleville-nj-2025", "tired-of-showings-sell-belleville-home-as-is"],
  "selling-bloomfield-property-as-is": ["what-bloomfield-sellers-should-know", "selling-house-as-is-bloomfield-nj-2025"],
  "west-milford-real-estate-market-2026": ["sell-house-as-is-west-milford-nj", "cash-home-buyers-passaic-county-nj-2025"],
  "cash-home-buyer-jefferson-nj": ["avoid-foreclosure-jefferson-nj", "selling-nj-house-without-repairs"],
  "selling-nj-house-without-repairs": ["what-does-cash-home-buyer-nj-do", "how-to-get-fair-cash-offer-nj-home"],
  "what-does-cash-home-buyer-nj-do": ["selling-nj-house-without-repairs", "cheap-cash-home-buyers-new-jersey"],
};

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let listBuffer: string[] = [];
  const flushList = (key: string) => {
    if (listBuffer.length > 0) {
      elements.push(
        <ul key={`list-${key}`} className="list-disc ml-6 space-y-1 my-3">
          {listBuffer.map((item, j) => <li key={j} className="font-body text-muted-foreground leading-relaxed">{item}</li>)}
        </ul>
      );
      listBuffer = [];
    }
  };
  lines.forEach((line, i) => {
    if (line.startsWith("## ")) {
      flushList(String(i));
      elements.push(<h2 key={i} className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">{line.replace("## ", "")}</h2>);
    } else if (line.startsWith("- ")) {
      listBuffer.push(line.replace("- ", ""));
    } else if (line === "") {
      flushList(String(i));
    } else {
      flushList(String(i));
      elements.push(<p key={i} className="font-body text-muted-foreground leading-relaxed my-2">{line}</p>);
    }
  });
  flushList("end");
  return elements;
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = postContent[slug];
  if (!data) notFound();

  const image = imageMap[slug] ?? sellImg;
  const related = (relatedSlugs[slug] || [])
    .filter((s) => postContent[s])
    .map((s) => ({ slug: s, ...postContent[s], image: imageMap[s] ?? sellImg }));

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy section-padding">
        <div className="container-max">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent font-body text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-accent/20 text-accent text-xs font-body font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <Tag className="w-3 h-3" /> {data.category}
              </span>
              <span className="text-primary-foreground/50 text-xs font-body flex items-center gap-1">
                <Clock className="w-3 h-3" /> {data.readTime}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-3xl leading-tight mb-10">{data.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-background">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src={image} alt={data.title} fill className="object-cover" priority />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-2">
              {renderContent(data.content)}
            </motion.article>
            <motion.aside initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
              <div className="bg-card border rounded-2xl p-6 sticky top-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Ready to Sell?</h3>
                <p className="text-muted-foreground font-body text-sm mb-5 leading-relaxed">Get a no-obligation cash offer within 24 hours. No repairs, no fees, no stress.</p>
                <a href="tel:917-856-1612" className="block mb-3">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-orange-dark font-body font-semibold">
                    <Phone className="w-4 h-4 mr-2" /> Call 917-856-1612
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" className="w-full font-body">Get a Cash Offer Online</Button>
                </Link>
              </div>
              {related.length > 0 && (
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="group flex gap-3 bg-card border rounded-xl p-3 hover:shadow-md transition-shadow">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={r.image} alt={r.title} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-body text-xs text-accent font-semibold mb-1">{r.category}</p>
                          <p className="font-heading text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug line-clamp-2">{r.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream pt-0">
        <div className="container-max">
          <div className="flex items-center justify-between border-t pt-8">
            <Link href="/blog">
              <Button variant="outline" className="font-body"><ArrowLeft className="w-4 h-4 mr-2" /> All Articles</Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-orange-dark font-body font-semibold">
                Get a Cash Offer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
