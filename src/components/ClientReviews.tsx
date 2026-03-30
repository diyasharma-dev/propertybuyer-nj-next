"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Jackie Merizalde.", location: "Nutley, NJ", text: "Very experienced and professional.If you are looking for a seamless , trustworthy transaction for your home sale . This is the way to go .", rating: 5 },
  { name: "Enrique Bernal.", location: "Belleville, NJ", text: "Javier is very easy to work with. Super professional and knowledgeable in the field.", rating: 5 },
  { name: "Kike Gonzalez.", location: "Bloomfield, NJ", text: "Very good is the best buyer In NEW JERSEY", rating: 5 },
  { name: "Jayne Adamsky.", location: "Newark, NJ", text: "My experience with Property Buyer NJ was very positive. He was timely, cooperative and always helpful. I would t hesitate to recommend Javier.", rating: 5 },
  { name: "Angela D.", location: "Caldwell, NJ", text: "From the first phone call to closing day, the team was incredibly supportive. They truly put people over profit.", rating: 5 },
  { name: "Carlos P.", location: "Verona, NJ", text: "Sold my rental property in under two weeks. The cash offer was fair and the process was seamless. Will definitely work with them again.", rating: 4 },
];

export default function ClientReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-cream">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Client Reviews</h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border bg-card flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border bg-card flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] max-w-[340px] bg-card border rounded-2xl p-6 snap-start flex-shrink-0 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className={`w-4 h-4 ${s < r.rating ? "fill-accent text-accent" : "text-border"}`} />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-navy flex items-center justify-center text-primary-foreground font-body font-bold text-sm">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">{r.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{r.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
