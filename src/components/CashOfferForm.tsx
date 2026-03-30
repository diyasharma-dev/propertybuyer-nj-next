"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface CashOfferFormProps {
  variant?: "light" | "dark";
}

export default function CashOfferForm({ variant = "light" }: CashOfferFormProps) {
  const { toast } = useToast();
  const [timeline, setTimeline] = useState("ASAP");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Request Submitted!", description: "We'll get back to you within 24 hours with a fair cash offer." });
  };

  const isDark = variant === "dark";

  return (
    <form onSubmit={handleSubmit} className={`rounded-2xl p-6 md:p-8 space-y-4 ${isDark ? "gradient-navy" : "bg-card shadow-xl border"}`}>
      <h2 className={`font-heading text-xl font-bold ${isDark ? "text-primary-foreground" : "text-foreground"}`}>Ready to Sell Your Home Fast?
</h2>
<p className={`text-sm font-body ${isDark ? "text-primary-foreground/80" : "text-muted-foreground"}`}>Just fill out the form below and we will connect you with a hand-picked investor.</p>

      <Input placeholder="Property Address" required className="font-body" />
      <Input placeholder="Full Name" required className="font-body" />
      <div className="grid grid-cols-2 gap-3">
        <Input placeholder="Phone Number" type="tel" required className="font-body" />
        <Input placeholder="Email" type="email" required className="font-body" />
      </div>
      <div>
        <p className={`text-sm font-body mb-2 ${isDark ? "text-primary-foreground/80" : "text-muted-foreground"}`}>How soon are you looking to sell?</p>
        <div className="flex gap-2 flex-wrap">
          {["ASAP", "1-3 mo", "3-6 mo", "6-12 mo"].map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => setTimeline(opt)}
              className={`px-3 py-1.5 rounded-full text-xs font-body font-medium transition-all ${
                timeline === opt
                  ? "bg-accent text-accent-foreground"
                  : isDark ? "bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/20" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <p className={`text-xs font-body ${isDark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
        By submitting this form, you agree to be contacted regarding an offer for your home.
      </p>
      <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-orange-dark font-body font-semibold text-base py-6">
        Get My Fair Cash Offer
      </Button>
    </form>
  );
}
