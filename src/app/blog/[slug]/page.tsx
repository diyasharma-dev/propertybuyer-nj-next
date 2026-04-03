"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Tag, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import sellImg from "@/assets/sell-house.jpg";
import affordImg from "@/assets/afford.jpg";
import areaImg from "@/assets/area-general.jpg";
import aboutImg from "@/assets/about-house.jpg";
import homesImg from "@/assets/homes.jpeg";
import communityImg from "@/assets/community.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const posts: Record<string, {
  title: string;
  category: string;
  readTime: string;
  image: typeof sellImg;
  content: string;
}> = {
  "how-to-sell-your-house-fast-in-nj": {
    title: "How to Sell Your House Fast in New Jersey (Without the Stress)",
    category: "Selling Tips",
    readTime: "5 min read",
    image: sellImg,
    content: `
Selling a home the traditional way can take months — open houses, negotiations, inspections, and endless waiting. For many New Jersey homeowners, that timeline just doesn't work.

Whether you're dealing with a job relocation, financial pressure, an inherited property, or simply want to move on quickly, there's a better path: selling directly to a cash buyer.

## Why Traditional Sales Take So Long

The conventional route involves listing with an agent, staging your home, waiting for offers, and then navigating a lengthy escrow process. On average, homes in New Jersey sit on the market for 30–60 days before going under contract — and closing can take another 30–45 days after that.

Add in repairs requested by buyers, appraisal issues, and financing fall-throughs, and you could easily be looking at 3–6 months from start to finish.

## The Cash Buyer Difference

When you sell to a cash buyer like Property Buyer NJ, the process looks completely different:

- No repairs or cleaning required — we buy as-is
- No agent commissions or hidden fees
- No waiting for bank financing to be approved
- Close in as little as 7–10 business days

We make a fair offer based on your home's current condition and local market data. If you accept, we handle the paperwork and you pick your closing date.

## Who Is This Right For?

A fast cash sale is a great fit if you:

- Need to sell quickly due to a life change
- Own a property that needs significant repairs
- Are behind on mortgage payments or facing foreclosure
- Inherited a home you don't want to manage
- Are a landlord tired of dealing with tenants

## How to Get Started

It's simple. Give us a call or fill out our online form. We'll have a quick conversation about your property, schedule a visit, and get you a solid offer within 24 hours. No pressure, no obligation.

If the offer works for you, we move forward on your timeline. That's it.
    `,
  },
  "cash-offer-vs-traditional-sale": {
    title: "Cash Offer vs. Traditional Sale: Which Is Right for You?",
    category: "Home Selling",
    readTime: "4 min read",
    image: affordImg,
    content: `
When it's time to sell your home, you have two main paths: list it on the open market with an agent, or sell directly to a cash buyer. Both have real advantages — the right choice depends on your priorities.

## Traditional Sale: The Pros

If your home is in great shape and you have time on your side, a traditional listing can sometimes yield a higher sale price. You'll get exposure to a wide pool of buyers, and competition can drive up offers.

## Traditional Sale: The Cons

The process is slow and unpredictable. Buyers can back out, financing can fall through, and you may be asked to make costly repairs after inspection. Agent commissions typically run 5–6% of the sale price, and closing costs add more on top.

## Cash Sale: The Pros

Speed and certainty are the biggest advantages. There's no financing contingency, no waiting, and no surprises. You sell as-is, pay no commissions, and close on your schedule — sometimes in under two weeks.

## Cash Sale: The Cons

Cash offers are typically below full market value. You're trading some equity for speed, convenience, and certainty. For many sellers, that trade-off is absolutely worth it.

## The Bottom Line

If maximizing sale price is your top priority and you can wait 3–6 months, a traditional listing may be the way to go. But if you value speed, simplicity, and a guaranteed close, a cash offer is hard to beat.

At Property Buyer NJ, we're always upfront about our offers and never pressure you into a decision. Reach out and see what your home is worth — it costs nothing to find out.
    `,
  },
  "top-neighborhoods-in-nj": {
    title: "Top Neighborhoods to Know in Essex & Cumberland County NJ",
    category: "Local Insights",
    readTime: "6 min read",
    image: areaImg,
    content: `
New Jersey is one of the most diverse states in the country, and that diversity shows up in its neighborhoods. From the tree-lined streets of Nutley to the historic blocks of Belleville, each community has its own character — and its own real estate dynamics.

Here's a quick look at some of the areas we serve and what makes them unique.

## Nutley

Nutley is a tight-knit township in Essex County known for its strong school system and suburban feel. Home values here have been steadily rising, making it a competitive market for buyers and a good time for sellers to act.

## Belleville

Belleville sits just outside Newark and offers more affordable entry points than many surrounding towns. It's a popular choice for first-time buyers and investors, and demand has been growing steadily.

## Bloomfield

Bloomfield blends suburban comfort with easy access to NYC via NJ Transit. It attracts commuters and families alike, and its diverse housing stock — from colonials to condos — gives sellers a broad buyer pool.

## Cedar Grove

Cedar Grove is one of Essex County's more upscale communities. Larger lots, newer construction, and top-rated schools make it a desirable destination. Homes here tend to sell quickly when priced right.

## Verona

Verona is a small but highly sought-after township. Its walkable downtown, excellent schools, and strong community identity keep demand high year-round.

## Newark

Newark is New Jersey's largest city and a major hub for investment. With ongoing development and improving infrastructure, it's attracting both residents and investors at an increasing rate.

## Millville

Located in Cumberland County, Millville offers some of the most affordable housing in the state. It's a great market for investors and buyers looking for value outside the metro area.

No matter which area you're in, Property Buyer NJ buys homes across all these communities — as-is, for cash, on your timeline.
    `,
  },
  "what-happens-during-cash-sale": {
    title: "What Actually Happens During a Cash Home Sale?",
    category: "How It Works",
    readTime: "5 min read",
    image: aboutImg,
    content: `
If you've never sold a home for cash before, the process might seem mysterious. It's actually straightforward — and much simpler than a traditional sale. Here's exactly what to expect when you work with Property Buyer NJ.

## Step 1: You Reach Out

It starts with a quick call or form submission. We'll ask a few basic questions about your property — location, condition, your timeline, and what you're hoping to get out of the sale. This usually takes 5–10 minutes.

## Step 2: We Schedule a Visit

Within 24 hours, we'll set up a time to see the property. This isn't an inspection — it's just a walkthrough so we can understand what we're working with. You don't need to clean or fix anything.

## Step 3: You Get an Offer

Within an hour of the visit, we'll give you a firm cash offer. No lowball games, no bait-and-switch. If the number works for you, we move forward. If not, there's no obligation.

## Step 4: We Sign a Contract

Once you accept, we sign a purchase agreement and open escrow. From this point, we handle all the paperwork and logistics. You don't need to coordinate with agents, lenders, or inspectors.

## Step 5: You Get Paid

Title is cleared, a closing date is scheduled, and you receive your funds — typically within 7–10 business days. You move out on your own schedule, and that's it. Done.

The whole process from first contact to cash in hand can happen in as little as two weeks. That's the power of a cash sale.
    `,
  },
  "avoid-foreclosure-nj": {
    title: "Facing Foreclosure in NJ? Here Are Your Options",
    category: "Financial Tips",
    readTime: "7 min read",
    image: homesImg,
    content: `
Foreclosure is one of the most stressful situations a homeowner can face. But it's important to know: you have options, and acting quickly can make a real difference.

## Understanding the NJ Foreclosure Timeline

New Jersey is a judicial foreclosure state, meaning the lender must go through the courts to foreclose. This process typically takes 12–18 months from the first missed payment to a sheriff's sale. That timeline gives you more room to act than you might think.

## Option 1: Loan Modification

If you're behind on payments but want to keep your home, contact your lender immediately. Many lenders offer modification programs that can reduce your monthly payment or extend your loan term. You'll need to demonstrate financial hardship and provide documentation.

## Option 2: Short Sale

If you owe more than your home is worth, a short sale allows you to sell the property for less than the outstanding mortgage balance — with lender approval. It's better for your credit than a foreclosure, but the process can be slow and complicated.

## Option 3: Deed in Lieu of Foreclosure

This involves voluntarily transferring ownership of your home to the lender in exchange for being released from the mortgage. It avoids the foreclosure process but still impacts your credit.

## Option 4: Sell for Cash Before Foreclosure

This is often the fastest and cleanest solution. If you sell your home before the foreclosure is finalized, you can pay off the mortgage, avoid the foreclosure on your record, and potentially walk away with some equity.

At Property Buyer NJ, we work with homeowners in pre-foreclosure situations regularly. We can move quickly, often closing before a sheriff's sale date. If you're in this situation, don't wait — reach out today.

## The Most Important Thing

Whatever you do, don't ignore the problem. The earlier you act, the more options you have. A free consultation with us costs nothing and could open doors you didn't know existed.
    `,
  },
  "selling-inherited-property-nj": {
    title: "Selling Your Bloomfield Property As-Is: Benefits & What to Expect",
    category: "Apartment",
    readTime: "6 min read",
    image: communityImg,
    content: `
Deciding to sell your house as-is in Bloomfield NJ is often the most effective way to avoid the crushing costs of modern renovations. By choosing this path, you bypass the stress of traditional inspections and expensive repairs, moving straight to a guaranteed closing on a timeline that works for you.

## First: Understand the Legal Process

Selling a home that needs work in Bloomfield can feel like a losing battle. Repairs are expensive, inspections are stressful, and timelines stretch longer than most people can afford.
If you’re saying, “I need to sell my house as-is in Bloomfield, NJ,” there is a Property Buyer NJ that specializes in this. We’ve helped homeowners across Bloomfield and Essex County sell properties that traditional buyers walked away from.



## Why Bloomfield’s Older Homes Make As-Is Sales a Smart Choice


Bloomfield has a large inventory of pre-war homes with aging infrastructure – foundations, grading, electrical systems, and fire code issues are common, especially in multi-family properties.

Overlooking an as-is sale for all the above-mentioned reasons can quickly turn into a costly mistake. Homeowners often find themselves pouring money into meeting Certificate of Occupancy standards, waiting on approvals from local building or fire officials, and watching contracts fall apart once inspections or financing issues surface.

Choosing to sell as-is removes those obstacles, allowing you to move forward without repairs, delays, or uncertainty.


## How Selling a House As-Is in Bloomfield Works

When you sell as-is, you’re offering the property in its current condition. You disclose known issues under New Jersey as-is property disclosure laws, but you’re not agreeing to fix them.

Working with Bloomfield property buyers who pay cash means:

No inspections or appraisal contingencies
No lender delays tied to code violations
Flexible closings, often in 7–10 days
This is especially valuable for homes with:

Code violations or failed CO inspections
Foundation or grading issues
Deferred maintenance or hoarding situations
Tenant-occupied units or non-performing rentals
Cash buyers evaluate the property, factor repairs into the offer, and handle the rest.

## Local Market and Legal Considerations

Bloomfield’s real estate process has layers. The Health Department, zoning rules, and the “3-unit rule” can complicate traditional sales. For inherited homes, the Essex County Surrogate’s Court, Letters Testamentary, or small estate procedures add more time.

In today’s market, rising repair costs and stricter lending standards make fixer-uppers harder to sell conventionally. Many sellers find that a fair cash offer nets more once they avoid commissions, repairs, and holding costs.

That’s why cash home sale options in Bloomfield are becoming a standard solution, not a last resort.

## Key Benefits of Selling As-Is for Cash

Skip costly repairs and upgrades
Avoid real estate commissions and staging
Sell even with code or occupancy issues
Close on your timeline, not the buyer’s
Reduce stress during probate, foreclosure, or relocation

## Local Expertise and a Faster Way to Sell As-Is in Bloomfield

Property Buyer NJ is a New Jersey-based real estate company focused on solving problems, not listing houses. We’ve completed successful as-is transactions across Bloomfield, Nutley, Belleville, Newark, and surrounding towns.

With Property Buyer NJ, our clients get the benefits of:

Deep knowledge of local codes, probate, and title issues
A simple three-step process: contact us, get your offer, get paid
Local decision-making, not out-of-state call centers
Closings in as little as 7–10 business days
We don’t guess. We know Bloomfield streets, property types, and real buyer demand.

If repairs, codes, or time are holding you back, selling as-is may be the smartest move. You don’t need to fix, clean, or wait. All you need to do is contact Property Buyer NJ today to get a fast, no-contingency cash offer and move forward with confidence.

Begin the process here:
https://propertybuyernj.com/
    `,
  },
};

const relatedSlugs: Record<string, string[]> = {
  "how-to-sell-your-house-fast-in-nj": ["cash-offer-vs-traditional-sale", "what-happens-during-cash-sale"],
  "cash-offer-vs-traditional-sale": ["how-to-sell-your-house-fast-in-nj", "avoid-foreclosure-nj"],
  "top-neighborhoods-in-nj": ["how-to-sell-your-house-fast-in-nj", "selling-inherited-property-nj"],
  "what-happens-during-cash-sale": ["how-to-sell-your-house-fast-in-nj", "cash-offer-vs-traditional-sale"],
  "avoid-foreclosure-nj": ["cash-offer-vs-traditional-sale", "selling-inherited-property-nj"],
  "selling-inherited-property-nj": ["avoid-foreclosure-nj", "top-neighborhoods-in-nj"],
};

function renderContent(content: string) {
  return content.trim().split("\n").map((line, i) => {
    if (line.startsWith("## ")) {
      return <h2 key={i} className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">{line.replace("## ", "")}</h2>;
    }
    if (line.startsWith("**") && line.endsWith("**")) {
      return <p key={i} className="font-body font-semibold text-foreground mt-4">{line.replace(/\*\*/g, "")}</p>;
    }
    if (line.startsWith("- ")) {
      return <li key={i} className="font-body text-muted-foreground leading-relaxed ml-4 list-disc">{line.replace("- ", "")}</li>;
    }
    if (line === "") return <br key={i} />;
    return <p key={i} className="font-body text-muted-foreground leading-relaxed">{line}</p>;
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) notFound();

  const related = (relatedSlugs[params.slug] || []).map((s) => ({ slug: s, ...posts[s] }));

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy section-padding pb-0">
        <div className="container-max">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent font-body text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-accent/20 text-accent text-xs font-body font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <Tag className="w-3 h-3" /> {post.category}
              </span>
              <span className="text-primary-foreground/50 text-xs font-body flex items-center gap-1">
                <Clock className="w-3 h-3" /> {post.readTime}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-3xl leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container-max px-4 sm:px-6 lg:px-8 -mt-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </motion.div>
      </div>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <motion.article
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="lg:col-span-2 prose-custom space-y-2"
            >
              {renderContent(post.content)}
            </motion.article>

            {/* Sidebar */}
            <motion.aside initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
              {/* CTA Card */}
              <div className="bg-card border rounded-2xl p-6 sticky top-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Ready to Sell?</h3>
                <p className="text-muted-foreground font-body text-sm mb-5 leading-relaxed">
                  Get a no-obligation cash offer within 24 hours. No repairs, no fees, no stress.
                </p>
                <a href="tel:917-856-1612" className="block mb-3">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-orange-dark font-body font-semibold">
                    <Phone className="w-4 h-4 mr-2" /> Call 917-856-1612
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" className="w-full font-body">Get a Cash Offer Online</Button>
                </Link>
              </div>

              {/* Related Posts */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`}
                        className="group flex gap-3 bg-card border rounded-xl p-3 hover:shadow-md transition-shadow">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={r.image} alt={r.title} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-body text-xs text-accent font-semibold mb-1">{r.category}</p>
                          <p className="font-heading text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug line-clamp-2">
                            {r.title}
                          </p>
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

      {/* Back to Blog */}
      <section className="section-padding bg-cream pt-0">
        <div className="container-max">
          <div className="flex items-center justify-between border-t pt-8">
            <Link href="/blog">
              <Button variant="outline" className="font-body">
                <ArrowLeft className="w-4 h-4 mr-2" /> All Articles
              </Button>
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
