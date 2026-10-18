import Image from "next/image";

const navigationLinks = [
  { label: "Startseite", href: "#" },
  { label: "Coaching", href: "#coaching" },
  { label: "Über mich", href: "#about" },
  { label: "Rezepte & Workouts", href: "#recipes" },
];

const legalLinks = [
  { label: "Impressum", href: "#" },
  { label: "Datenschutz", href: "#" },
  { label: "AGB", href: "#" },
];

const socialLinks = [
  { label: "Youtube", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Instagram", href: "#" },
];

const linkClasses =
  "relative w-fit py-0.5 text-base text-white transition-colors duration-300 ease-out after:absolute after:right-0 after:-bottom-0.5 after:left-0 after:h-px after:origin-center after:scale-x-0 after:bg-brand-coral after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:text-brand-coral hover:after:scale-x-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral";

function LinkList({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <ul className="mt-4 flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className={linkClasses}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-360 px-5 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white">
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
            </div>
            <p className="mt-4 max-w-xs text-base text-white">
              Vegane Rezepte für einen Alltag, die schnell zubereitet und
              wirklich einfach umzusetzen sind.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Navigation</h3>
            <LinkList links={navigationLinks} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Rechtlich</h3>
            <LinkList links={legalLinks} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Social Media</h3>
            <LinkList links={socialLinks} />
          </div>
        </div>
      </div>
    </footer>
  );
}
