"use client";

import { Dumbbell, Leaf, Soup } from "lucide-react";
import Image from "next/image";
import { useCoachingModal } from "./CoachingModalProvider";
import Reveal from "./Reveal";

const features = [
  {
    title: "Mehr Energie im Alltag",
    icon: Leaf,
  },
  {
    title: "Schnelle Rezepte für deinen Alltag",
    icon: Soup,
  },
  {
    title: "Deine körperlichen Ziele erreichen",
    icon: Dumbbell,
  },
];

const featureText =
  "Mit einer ausgewogenen pflanzlichen Ernährung versorgst du deinen Körper gezielt mit wichtigen Nährstoffen und entwickelst Essgewohnheiten, die dich im Alltag satt, fit und leistungsfähig halten.";

export default function Hero() {
  const { open: openCoachingModal } = useCoachingModal();

  return (
    <section className="relative isolate flex min-h-[calc(100svh-5.5rem)] flex-col justify-center overflow-hidden bg-stone-900">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Vegan%20Fitness%20Coach/hero.jpg"
          alt="Mann bereitet in der Küche ein veganes Gericht zu"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
      </div>

      <div className="mx-auto max-w-360 px-5 pt-12 pb-16 sm:pt-16 sm:pb-20">
        <Reveal><h1 className="max-w-3xl text-4xl leading-tight font-extrabold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
          Dein Weg zum Traumkörper ganz ohne tierische Produkte
        </h1></Reveal>

        <Reveal delay={150}><p className="mt-6 max-w-md text-lg text-stone-200 sm:text-xl">
          Vegane Rezepte für einen Alltag, die schnell zubereitet und
          wirklich einfach umzusetzen sind.
        </p></Reveal>

        <Reveal delay={300}><div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#recipes"
            className="rounded-full border-2 border-brand-coral bg-brand-coral px-6 py-3 text-center text-base font-semibold text-black transition-colors duration-300 ease-out hover:bg-transparent hover:text-brand-coral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
          >
            Rezepte entdecken
          </a>
          <button
            type="button"
            onClick={openCoachingModal}
            className="rounded-full border-2 border-brand-coral px-6 py-3 text-center text-base font-semibold text-brand-coral transition-colors duration-300 ease-out hover:bg-brand-coral hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
          >
            Kostenloses 1:1 Coaching anfragen
          </button>
        </div></Reveal>

        <Reveal delay={450}><div className="mt-10 flex items-center gap-4">
          <div className="flex -space-x-3">
            {[4, 1, 6].map((n) => (
              <span
                key={n}
                className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-brand-coral"
              >
                <Image
                  src={`/Vegan%20Fitness%20Coach/avatar-${n}.avif`}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover object-[50%_30%]"
                />
              </span>
            ))}
          </div>
          <p className="max-w-xs text-base text-stone-200">
            Bereits 200+ Menschen auf ihrem Weg zu einem gesünderen Leben ohne
            tierische Produkte begleitet.
          </p>
        </div></Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {features.map(({ title, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 150}>
            <div
              className="h-full rounded-2xl border-2 border-transparent bg-emerald-50/95 transition-colors duration-300 ease-out hover:border-brand-coral p-6 shadow-xl backdrop-blur-sm"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-coral text-black">
                <Icon className="h-9 w-9" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-black">
                {title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-black">
                {featureText}
              </p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
