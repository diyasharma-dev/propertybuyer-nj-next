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
          width={512}
          height={640}
        />
      </div>
      <CashOfferForm />
    </div>
  );
}
