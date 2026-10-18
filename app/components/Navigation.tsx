"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useCoachingModal } from "./CoachingModalProvider";

const navLinks = [
  { label: "Startseite", href: "#" },
  { label: "Coaching", href: "#coaching" },
  { label: "Über Mich", href: "#about" },
  { label: "Rezepte & Workouts", href: "#recipes" },
  { label: "FAQ", href: "#faq" },
];

const navLinkClasses =
  "relative py-1 text-white transition-colors duration-300 ease-out after:absolute after:right-0 after:-bottom-0.5 after:left-0 after:h-px after:origin-center after:scale-x-0 after:bg-brand-coral after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:text-brand-coral hover:after:scale-x-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral";

const ctaClasses =
  "rounded-full border-2 border-brand-coral bg-brand-coral px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-black transition-colors duration-300 ease-out hover:bg-transparent hover:text-brand-coral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { open: openCoachingModal } = useCoachingModal();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-360 items-center justify-between gap-4 px-5 py-4">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
        >
          <span className="relative h-14 w-14 rounded-xl bg-white">
            <Image
              src="/Vegan%20Fitness%20Coach/Fitness%20Coach%20Logo.png"
              alt=""
              fill
              sizes="56px"
              className="object-contain p-1"
            />
          </span>
          Richard Roe
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={navLinkClasses}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={openCoachingModal}
          className={`hidden md:inline-block ${ctaClasses}`}
        >
          1:1 Coaching buchen
        </button>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ease-out hover:bg-brand-coral hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-full z-40 grid border-t border-white/10 bg-black shadow-lg transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav
          id="mobile-nav"
          aria-hidden={!open}
          className="mx-auto w-full max-w-360 overflow-hidden px-5 text-sm font-medium"
        >
          <div className="flex flex-col gap-1 pt-2 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                tabIndex={open ? undefined : -1}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-white transition-colors duration-300 ease-out hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              tabIndex={open ? undefined : -1}
              onClick={() => {
                setOpen(false);
                openCoachingModal();
              }}
              className={`mt-3 text-center ${ctaClasses}`}
            >
              1:1 Coaching buchen
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
