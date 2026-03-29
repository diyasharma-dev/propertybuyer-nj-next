import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const areas = ["Nutley", "Belleville", "Bloomfield", "Cedar Grove", "Caldwell", "Verona", "Newark", "Millville"];

export default function Footer() {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container-max section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image src={logo} alt="Property Buyer NJ Logo" className="h-14 w-auto mb-4 brightness-0 invert" height={56} />
            <p className="text-primary-foreground/70 text-sm font-body leading-relaxed">
              Your trusted cash home buyer in New Jersey. We buy houses as-is — no repairs, no fees, no stress.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "How It Works", href: "/how-it-works" },
                { name: "Community Investors", href: "/community-investors" },
                { name: "Contact", href: "/contact" },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-primary-foreground/70 hover:text-accent transition-colors">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Areas Served</h4>
            <ul className="space-y-2 font-body text-sm">
              {areas.map(a => (
                <li key={a}>
                  <Link href={`/services/${a.toLowerCase().replace(" ", "-")}`} className="text-primary-foreground/70 hover:text-accent transition-colors">{a}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:917-856-1612" className="hover:text-accent transition-colors">917-856-1612</a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@propertybuyernj.com" className="hover:text-accent transition-colors">info@propertybuyernj.com</a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                157 Highfield Ln, Nutley, NJ 07110
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50 font-body">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>© {new Date().getFullYear()} Property Buyer NJ. All rights reserved.</span>
            <div className="flex items-center gap-3">
              <Link href="/terms-and-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link>
              <span>·</span>
              <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-accent transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
