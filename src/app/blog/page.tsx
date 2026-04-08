"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import affordImg from "@/assets/afford.jpg";
import sellImg from "@/assets/sell-house.jpg";
import communityImg from "@/assets/community.jpg";
import aboutImg from "@/assets/about-house.jpg";
import homesImg from "@/assets/homes.jpeg";
import areaImg from "@/assets/area-general.jpg";
import areaBloomfieldImg from "@/assets/area-bloomfield.jpg";
import areaNutleyImg from "@/assets/area-nutley.jpg";
import areaBellevilleImg from "@/assets/area-belleville.jpg";
import condosImg from "@/assets/condos.png";
import rentalsImg from "@/assets/rentals.png";
import townhomesImg from "@/assets/townhomes.jpeg";
import heroImg from "@/assets/hero-house.jpg";
import ownerImg from "@/assets/owner.png";
import commentImg from "@/assets/comment.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const posts = [
  { slug: "sell-house-fast-nutley-nj-2025", title: "How to Sell Your House Fast in Nutley, NJ in 2025 (Even in a Tough Market)", excerpt: "Selling a house in Nutley, NJ can feel challenging in a competitive market. Whether you're dealing with a distressed property, tight timelines, or simply looking for a hassle-free process, this guide covers every strategy.", category: "Selling Tips", readTime: "5 min read", image: areaNutleyImg, featured: true },
  { slug: "we-buy-houses-belleville-nj-2025", title: "We Buy Houses in Belleville, NJ – Get a Cash Offer Fast in 2025", excerpt: "Life happens — whether it's job relocation, foreclosure, inheritance, or simply wanting to avoid realtor commissions. At Property Buyer NJ, we buy houses in Belleville, NJ with no repairs, no fees, no long waits.", category: "Local Insights", readTime: "5 min read", image: areaBellevilleImg, featured: false },
  { slug: "selling-house-as-is-bloomfield-nj-2025", title: "Selling Your House As-Is in Bloomfield, NJ? Here's What's Changing in 2025", excerpt: "If you're looking to sell your house as-is in Bloomfield, NJ, 2025 brings some important updates you need to know. Whether your home needs major repairs, you're facing foreclosure, or you just want a quick sale.", category: "Selling Tips", readTime: "4 min read", image: areaBloomfieldImg, featured: false },
  { slug: "avoid-foreclosure-clifton-nj-2025", title: "Sell My House Fast in Clifton, NJ – Foreclosure Help for 2025", excerpt: "Are you facing foreclosure in Clifton, NJ in 2025? Don't wait until it's too late. Whether you're behind on mortgage payments or just need a quick home sale, this guide explains how to sell fast and avoid foreclosure.", category: "Financial Tips", readTime: "6 min read", image: homesImg, featured: false },
  { slug: "sell-inherited-home-essex-county-nj", title: "Sell Inherited Home Fast in Essex County, NJ: A Complete 2025 Guide", excerpt: "If you've recently inherited a home in Montclair or anywhere in Essex County, NJ, you might be asking: 'How can I sell my inherited home fast without headaches?' This complete guide walks you through every step.", category: "Selling Tips", readTime: "7 min read", image: aboutImg, featured: false },
  { slug: "sell-fire-damaged-house-new-jersey", title: "We Buy Fire-Damaged Houses in New Jersey – Your Definitive Guide for 2025", excerpt: "Are you a homeowner in New Jersey grappling with the devastating aftermath of a house fire? This comprehensive guide empowers you with information on how to sell your fire-damaged home quickly for cash.", category: "How It Works", readTime: "8 min read", image: sellImg, featured: false },
  { slug: "divorce-selling-house-new-jersey-2025", title: "Divorce & Selling Your House in New Jersey: A 2025 Guide for a Fast, Fair Sale", excerpt: "Navigating a divorce is one of life's most challenging experiences. When the family home becomes part of the equation, the emotional and financial complexities can feel overwhelming. Here's how to sell quickly and efficiently.", category: "Financial Tips", readTime: "6 min read", image: communityImg, featured: false },
  { slug: "we-buy-houses-kearny-nj-2025", title: "We Buy Houses in Kearny, NJ (2025) | ASAP Cash Home Buyers NJ", excerpt: "Looking to sell your house fast in Kearny, NJ in 2025? Whether you're relocating, downsizing, dealing with an inherited property, or need ASAP cash home buyers in NJ, we provide a quick, fair, and stress-free sale.", category: "Local Insights", readTime: "5 min read", image: heroImg, featured: false },
  { slug: "cash-home-buyers-passaic-county-nj-2025", title: "Selling Your House Fast for Cash in Passaic County NJ 2025", excerpt: "When the need arises to sell your house fast for cash in Passaic County, NJ, it's about finding freedom, regaining control, and achieving peace of mind. This article covers everything you need to know.", category: "Local Insights", readTime: "7 min read", image: areaImg, featured: false },
  { slug: "cheap-cash-home-buyers-new-jersey", title: "Are Cheap Cash Home Buyers New Jersey Truly a 'Lose-Lose' in 2025?", excerpt: "The phrase 'cheap cash home buyers New Jersey' often triggers a knee-jerk reaction: you'll get less for your house. However, in the dynamic 2025 NJ real estate market, the true value of a cash offer extends far beyond the initial price.", category: "How It Works", readTime: "6 min read", image: affordImg, featured: false },
  { slug: "cash-house-buyers-cumberland-county-nj", title: "Cash House Buyers Cumberland County NJ – Is It a Good Idea in 2025?", excerpt: "That's a question many New Jersey homeowners are asking this year. With the housing market shifting, interest rates rising, and more distressed properties hitting the market, cash house buyers in Cumberland County have become a go-to solution.", category: "Local Insights", readTime: "6 min read", image: townhomesImg, featured: false },
  { slug: "montclair-cash-home-buyers-2025", title: "Montclair Cash Home Buyers: Sell Fast with Confidence in 2025", excerpt: "Are you searching for Montclair cash home buyers? Whether you're relocating, facing foreclosure, or dealing with an inherited property, quick cash sales offer a stress-free alternative to traditional listings.", category: "Local Insights", readTime: "5 min read", image: condosImg, featured: false },
  { slug: "sell-house-fast-rutherford-nj-2025", title: "How to Sell My House Fast in Rutherford, NJ (2025 Guide)", excerpt: "In 2025, with rising interest rates and slower buyer activity, many NJ homeowners are turning to cash home sales to avoid delays, agent fees, and costly repairs. Here's exactly how to sell fast — no fluff, just facts.", category: "Selling Tips", readTime: "5 min read", image: rentalsImg, featured: false },
  { slug: "nj-homeowners-hidden-tax-trap-2025", title: "New Jersey Homeowners Face a Hidden Tax Trap When Selling: Is Your Equity at Risk in 2025?", excerpt: "A crucial revelation has emerged that could significantly impact your next home sale: a substantial percentage of NJ homeowners are sitting on 'hidden' home equity that could trigger an unexpected tax bill.", category: "Financial Tips", readTime: "4 min read", image: ownerImg, featured: false },
  { slug: "top-cash-home-buyers-new-jersey-2025", title: "Top Rated and Best Cash Home Buyers in New Jersey 2025: Who Buys Homes Fast for Cash?", excerpt: "The phrase 'top and best cash home buyers in New Jersey 2025' isn't just trending — it's a sign of a changing real estate market. Here's a data-driven, unbiased review of the top-rated cash home buying companies.", category: "How It Works", readTime: "7 min read", image: commentImg, featured: false },
  { slug: "sell-house-fast-nutley-cash-buyer", title: "How to Sell Your House Fast in Nutley, NJ | Cash Home Buyer Nutley", excerpt: "How to sell your house fast in Nutley, NJ is one of the most common questions homeowners face when life throws curveballs — whether it's job relocation, financial stress, or the desire for a fresh start.", category: "Selling Tips", readTime: "5 min read", image: areaNutleyImg, featured: false },
  { slug: "sell-house-as-is-jersey-city-nj", title: "Selling a Home As-Is in Jersey City NJ | Cash Buyer Hudson County", excerpt: "If you're wondering how to sell house as-is in Jersey City NJ, you're not alone. Many homeowners in Hudson County face the challenge of selling properties that need repairs, upgrades, or just a faster sale.", category: "Selling Tips", readTime: "5 min read", image: heroImg, featured: false },
  { slug: "we-buy-houses-paramus-nj", title: "We Buy Houses in Paramus, NJ | Cash Home Buyers Fast", excerpt: "We buy houses in Paramus, NJ to help homeowners like you get on the fast track when selling your property. Whether you're navigating financial challenges, dealing with an inherited house, or simply ready to move on.", category: "Local Insights", readTime: "4 min read", image: areaImg, featured: false },
  { slug: "avoid-foreclosure-jefferson-nj", title: "Avoid Foreclosure in Jefferson, NJ | Fast Home-Selling Solutions", excerpt: "Facing foreclosure in Jefferson, NJ can be stressful and overwhelming — especially when you're worried about losing your home, damaging your credit, and dealing with financial uncertainty. But you do have options.", category: "Financial Tips", readTime: "5 min read", image: homesImg, featured: false },
  { slug: "sell-house-as-is-west-milford-nj", title: "Top Benefits of Selling Your House As-Is in West Milford, NJ", excerpt: "Selling a home can be a major decision, especially when the property needs repairs or updates. Many homeowners in West Milford, NJ find themselves overwhelmed by renovation costs and long listing timelines.", category: "Selling Tips", readTime: "5 min read", image: areaBloomfieldImg, featured: false },
  { slug: "verona-nj-cash-home-buyers", title: "What Verona, NJ Homeowners Should Know About Cash Home Buyers", excerpt: "Selling a home in Verona, NJ can feel overwhelming, especially if your property needs repairs or if you're facing a time-sensitive situation. Here's everything you should know about how cash home buyers work.", category: "Local Insights", readTime: "5 min read", image: areaBellevilleImg, featured: false },
  { slug: "sell-home-memories-repairs-clutter-nj", title: "Home Full of Memories, Repairs, or Clutter? We'll Handle the Hard Part", excerpt: "Selling a home can feel overwhelming, especially when it holds years of memories, needs major repairs, or contains clutter that feels impossible to sort through. Property Buyer NJ makes the solution simple.", category: "How It Works", readTime: "4 min read", image: communityImg, featured: false },
  { slug: "sell-home-before-holidays-nj", title: "No Listings, No Open Houses, No Delays — Just a Smooth Sale Before the Holidays", excerpt: "The holiday season is meant for family, celebration, and slowing down. But if you're planning to sell your home, the end of the year can feel overwhelming. Property Buyer NJ offers a faster, simpler alternative.", category: "Selling Tips", readTime: "4 min read", image: sellImg, featured: false },
  { slug: "turn-property-into-purpose-holiday", title: "Turn Your Property into Purpose This Holiday Season", excerpt: "The holiday season brings reflection, new beginnings, and the opportunity to make meaningful changes. For many New Jersey homeowners, this time of year is the perfect moment to simplify, reset, or transition into a new chapter.", category: "Selling Tips", readTime: "4 min read", image: aboutImg, featured: false },
  { slug: "your-home-our-offer-nj", title: "Your Home. Our Offer. A Deal You'll Be Thankful For.", excerpt: "Selling a home can be stressful, time-consuming, and uncertain. At Property Buyer NJ, we believe homeowners deserve an easier way. When you choose a direct cash sale, you skip everything that makes selling difficult.", category: "How It Works", readTime: "4 min read", image: ownerImg, featured: false },
  { slug: "inherited-property-new-jersey-sell-quickly", title: "Inherited Property in New Jersey: How to Sell Quickly & Avoid Hassle", excerpt: "Inheriting a home sounds like a blessing — until reality sets in. Probate filings, tax questions, reluctant heirs, and mounting costs can turn an inherited property into a full-time responsibility.", category: "Selling Tips", readTime: "6 min read", image: affordImg, featured: false },
  { slug: "how-to-get-fair-cash-offer-nj-home", title: "How to Get a Fair Cash Offer for Your NJ Home", excerpt: "Selling your home for cash can feel overwhelming — especially if you're facing a time crunch, financial stress, or a property that needs more work than you can handle. Here's how fair cash offers actually work.", category: "How It Works", readTime: "6 min read", image: townhomesImg, featured: false },
  { slug: "probate-property-sales-new-jersey", title: "How to Handle Probate Property Sales in New Jersey", excerpt: "Losing a loved one is hard enough. Handling their estate — especially a home filled with memories, paperwork, and legal requirements — can feel overwhelming. This guide gives executors a clear roadmap.", category: "Selling Tips", readTime: "7 min read", image: commentImg, featured: false },
  { slug: "tired-of-showings-sell-belleville-home-as-is", title: "Tired of Showings? Sell Your Belleville Home As-Is Without a Realtor or Repairs", excerpt: "Belleville homeowners are facing a new kind of real estate fatigue. The good news? You don't need a realtor, repairs, or showings to sell your Belleville home fast — and you don't have to settle for uncertainty.", category: "Local Insights", readTime: "7 min read", image: rentalsImg, featured: false },
  { slug: "what-bloomfield-sellers-should-know", title: "What Bloomfield Sellers Should Know Before Selling", excerpt: "Trying to sell your Bloomfield home may leave you feeling overwhelmed long before the process even begins. Between the township's Transfer of Property requirements, older housing stock, and rising repair costs.", category: "Local Insights", readTime: "6 min read", image: condosImg, featured: false },
  { slug: "fair-cash-offer-cedar-grove-house", title: "Get a Fair Cash Offer for Your Cedar Grove House", excerpt: "If you're thinking about selling your house in Cedar Grove, you may already be feeling the pressure — rising property taxes, expensive repairs, stricter township requirements, and a shifting real estate market.", category: "Local Insights", readTime: "6 min read", image: areaBloomfieldImg, featured: false },
  { slug: "avoid-essex-county-tax-drain-caldwell", title: "Avoid the Essex County Tax Drain: Sell Your Caldwell House Fast Before Next Quarter", excerpt: "Watching another quarterly tax bill approach as a homeowner in Caldwell can send you down a spiral. Essex County has some of the highest property taxes in New Jersey — and every new quarter adds a major hit.", category: "Financial Tips", readTime: "6 min read", image: heroImg, featured: false },
  { slug: "cash-house-buyer-belleville-nj-reasons", title: "Top Reasons Homeowners Choose a Cash House Buyer in Belleville, NJ", excerpt: "Selling a home in Belleville can feel overwhelming, especially if time, repairs, or finances are working against you. Working with cash home buyers in Belleville NJ is often the smartest move.", category: "Local Insights", readTime: "5 min read", image: areaBellevilleImg, featured: false },
  { slug: "selling-bloomfield-property-as-is", title: "Selling Your Bloomfield Property As-Is: Benefits & What to Expect", excerpt: "Deciding to sell your house as-is in Bloomfield NJ is often the most effective way to avoid the crushing costs of modern renovations. By choosing this path, you bypass the stress of traditional inspections.", category: "Selling Tips", readTime: "5 min read", image: areaBloomfieldImg, featured: false },
  { slug: "west-milford-real-estate-market-2026", title: "West Milford Real Estate Market Trends: What Sellers Should Know in 2026", excerpt: "Understanding the West Milford NJ real estate market 2026 is essential for homeowners looking to capitalize on the area's resilient pricing power. With median sales prices holding steady at $410,500 and inventory tight.", category: "Local Insights", readTime: "5 min read", image: areaImg, featured: false },
  { slug: "cash-home-buyer-jefferson-nj", title: "How a Cash Home Buyer Makes Selling Your Jefferson Home Simple", excerpt: "Finding reputable cash home buyers in Jefferson NJ is the most effective way to simplify your sale in today's shifting market. A cash offer provides immediate certainty, bypassing the seller concessions frequently seen in 2026.", category: "Local Insights", readTime: "5 min read", image: homesImg, featured: false },
  { slug: "selling-nj-house-without-repairs", title: "Selling Your NJ House Without Repairs? Here's What You Should Know", excerpt: "Choosing the path of selling a house as-is in NJ is a strategic way to bypass the grueling renovation cycles that often delay traditional listings. New Jersey's 2026 disclosure laws remain strict regarding material defects.", category: "Selling Tips", readTime: "5 min read", image: sellImg, featured: false },
  { slug: "what-does-cash-home-buyer-nj-do", title: "What Does a Cash Home Buyer in New Jersey Really Do?", excerpt: "Understanding how cash home buyers work in New Jersey is the first step toward a stress-free sale in today's complex real estate landscape. A cash transaction offers a streamlined, guaranteed path to closing.", category: "How It Works", readTime: "5 min read", image: affordImg, featured: false },
];

const categories = ["All", "Selling Tips", "Local Insights", "Financial Tips", "How It Works"];

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy section-padding">
        <div className="container-max text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-body font-semibold mb-4">
              Resources & Insights
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              The Property Buyer NJ Blog
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl mx-auto">
              Tips, guides, and local insights to help New Jersey homeowners make confident decisions about selling their home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="bg-cream border-b">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-body font-medium border transition-all duration-200 ${
                cat === "All"
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-card text-foreground border-border hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <p className="text-accent font-body font-semibold text-sm uppercase tracking-wider mb-6">Featured Post</p>
            <Link href={`/blog/${featured.slug}`} className="group grid lg:grid-cols-2 gap-8 bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-accent/10 text-accent text-xs font-body font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {featured.category}
                  </span>
                  <span className="text-muted-foreground text-xs font-body flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {featured.readTime}
                  </span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-accent font-body font-semibold text-sm">
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Post Grid — all remaining posts */}
      <section className="section-padding bg-cream pt-0">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: (i % 6) * 0.07 }}
              >
                <Link href={`/blog/${post.slug}`} className="group bg-card border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full block">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-accent/10 text-accent text-xs font-body font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Tag className="w-3 h-3" /> {post.category}
                      </span>
                      <span className="text-muted-foreground text-xs font-body flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-accent font-body font-semibold text-sm mt-4">
                      Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy">
        <div className="container-max text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Sell Your NJ Home?
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg mb-8 max-w-xl mx-auto">
              Skip the hassle. Get a fair cash offer within 24 hours — no repairs, no fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:917-856-1612">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-orange-dark font-body font-semibold text-base px-8">
                  Call 917-856-1612
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-black-foreground hover:bg-primary-foreground/10 font-body">
                  Get a Cash Offer <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
