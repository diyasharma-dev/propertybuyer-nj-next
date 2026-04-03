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

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const posts = [
  {
    slug: "how-to-sell-your-house-fast-in-nj",
    title: "How to Sell Your House Fast in New Jersey (Without the Stress)",
    excerpt:
      "Selling a home the traditional way can take months. Here's how cash buyers make the process simple, fast, and fee-free — even if your home needs work.",
    category: "Apartment",
    readTime: "5 min read",
    image: sellImg,
    featured: true,
  },
  {
    slug: "cash-offer-vs-traditional-sale",
    title: "What Does a Cash Home Buyer in New Jersey Really Do?",
    excerpt:
      "Understanding how cash home buyers work in New Jersey is the first step toward a stress-free sale in today’s complex real estate landscape. While traditional listings often stall due to 2026’s strict mandatory disclosure laws and financing delays, a cash transaction offers a streamlined, guaranteed path to closing. If you are thinking about selling your",
    category: "Apartment",
    readTime: "4 min read",
    image: affordImg,
    featured: false,
  },
  {
    slug: "top-neighborhoods-in-nj",
    title: "Selling Your NJ House Without Repairs? Here’s What You Should Know",
    excerpt:
      "Choosing the path of selling a house as-is in NJ is a strategic way to bypass the grueling renovation cycles that often delay traditional listings. While New Jersey’s 2026 disclosure laws remain strict regarding material defects, this method allows you to skip cosmetic repairs and move directly toward a simplified closing. Selling a home in",
    category: "Apartment",
    readTime: "6 min read",
    image: areaImg,
    featured: false,
  },
  {
    slug: "what-happens-during-cash-sale",
    title: "How a Cash Home Buyer Makes Selling Your Jefferson Home Simple",
    excerpt:
      "Finding reputable cash home buyers in Jefferson NJ is the most effective way to simplify your sale in today’s shifting market. While traditional listings in Morris County currently average 29 days on market, a cash offer provides immediate certainty, bypassing the 12% seller concessions frequently seen in early 2026. Selling a home in Jefferson can",
    category: "Apartment",
    readTime: "5 min read",
    image: aboutImg,
    featured: false,
  },
  {
    slug: "avoid-foreclosure-nj",
    title: "West Milford Real Estate Market Trends: What Sellers Should Know in 2026",
    excerpt:
      "Understanding the West Milford NJ real estate market 2026 is essential for homeowners looking to capitalize on the area’s resilient pricing power. With median sales prices currently holding steady at $410,500 and inventory remaining tight, local sellers are uniquely positioned to leverage high demand for a fast, profitable exit. For property owners in West Milford,",
    category: "Apartment",
    readTime: "7 min read",
    image: homesImg,
    featured: false,
  },
  {
    slug: "selling-inherited-property-nj",
    title: "Selling Your Bloomfield Property As-Is: Benefits & What to Expect",
    excerpt:
      "Deciding to sell your house as-is in Bloomfield NJ is often the most effective way to avoid the crushing costs of modern renovations. By choosing this path, you bypass the stress of traditional inspections and expensive repairs, moving straight to a guaranteed closing on a timeline that works for you. Selling a home that needs",
    category: "Apartment",
    readTime: "6 min read",
    image: communityImg,
    featured: false,
  },
];

const categories = ["All", "Selling Tips", "Home Selling", "Local Insights", "How It Works", "Financial Tips"];

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

      {/* Post Grid */}
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
                transition={{ delay: i * 0.1 }}
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
