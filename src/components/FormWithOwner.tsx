import CashOfferForm from "@/components/CashOfferForm";
import Image from "next/image";
import ownerImg from "@/assets/owner.png";

export default function FormWithOwner() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div className="text-center lg:text-left">
        <Image
          src={ownerImg}
          alt="Property Buyer NJ Owner"
          className="w-48 h-48 rounded-full object-cover object-top mx-auto lg:mx-0 mb-6 border-4 border-accent/20 shadow-xl"
          loading="lazy"
          width={512}
          height={640}
        />
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Ready to Sell Your Home Fast?</h3>
        <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
          Just fill out the form and we will connect you with a hand-picked investor. Our team is ready to give you a fair cash offer — no obligations, no pressure.
        </p>
      </div>
      <CashOfferForm />
    </div>
  );
}
