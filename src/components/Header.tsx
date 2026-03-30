"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/logo.png";

const services = [
  { name: "Nutley", href: "/services/nutley" },
  { name: "Belleville", href: "/services/belleville" },
  { name: "Bloomfield", href: "/services/bloomfield" },
  { name: "Cedar Grove", href: "/services/cedar-grove" },
  { name: "Caldwell", href: "/services/caldwell" },
  { name: "Verona", href: "/services/verona" },
  { name: "Newark", href: "/services/newark" },
  { name: "Millville", href: "/services/millville" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Community Investors", href: "/community-investors" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full z-50 relative">
      {/* Top bar */}
      <div className="gradient-navy">
        <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2 text-sm">
          <div className="flex items-center gap-4 md:gap-6 text-primary-foreground/90">
            <a href="tel:917-856-1612" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5" /> 917-856-1612
            </a>
            <a href="mailto:jpaulino1201@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5" /> jpaulino1201@gmail.com
            </a>
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> 157 Highfield Ln Nutley, NJ 07110
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-primary-foreground/90">
              <a href="https://www.facebook.com/propertybuyernj" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="https://www.instagram.com/propertybuyernj/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="https://www.linkedin.com/company/property-buyer-nj/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="https://www.youtube.com/@propertybuyernj" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Youtube className="w-4 h-4" /></a>
            </div>
            <Link href="/contact">
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-orange-dark text-xs font-semibold font-body">
                Generate Cash Offer
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card shadow-sm">
        <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Property Buyer NJ Logo" className="h-12 w-auto" height={48} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium font-body transition-colors ${
                  pathname === link.href ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <Link href="/areas-served" className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium font-body text-foreground hover:text-accent transition-colors">
                Areas Served <ChevronDown className="w-4 h-4" />
              </Link>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-card rounded-lg shadow-xl border py-2 z-50">
                  {services.map(s => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm font-body text-foreground hover:bg-muted hover:text-accent transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-card px-4 pb-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-sm font-body font-medium text-foreground hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t pt-2 mt-2">
              <Link href="/areas-served" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-body font-semibold text-foreground hover:text-accent">
                Areas Served
              </Link>
              {services.map(s => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block py-1.5 pl-3 text-sm font-body text-foreground hover:text-accent">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
