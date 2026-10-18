"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import Carousel from "./Carousel";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Markus Brandt",
    subtitle: "-7 kg in 5 Monaten, pflanzenbasiert",
    image: "/Vegan%20Fitness%20Coach/social_profil_1.jpg",
  },
  {
    name: "Jonas Weber",
    subtitle: "Muskelaufbau vegan, seit 2023",
    image: "/Vegan%20Fitness%20Coach/social_profil_2.jpg",
  },
  {
    name: "Lukas Fischer",
    subtitle: "Klient seit 2022",
    image: "/Vegan%20Fitness%20Coach/social_profil_3.jpg",
  },
  {
    name: "Nico Baumann",
    subtitle: "+8 kg Muskelmasse in 6 Monaten",
    image: "/Vegan%20Fitness%20Coach/istockphoto-1831819638-2048x2048.jpg",
  },
  {
    name: "Samir Aydin",
    subtitle: "Vegan seit dem Coaching-Start",
    image: "/Vegan%20Fitness%20Coach/istockphoto-1831822281-2048x2048.jpg",
  },
  {
    name: "Tim Krüger",
    subtitle: "Mehr Energie im Alltag, komplett pflanzlich",
    image: "/Vegan%20Fitness%20Coach/istockphoto-1831822280-2048x2048.jpg",
  },
];

function TestimonialImage({ src, name }: { src: string; name: string }) {
  return (
    <div className="relative aspect-4/5 w-full overflow-hidden bg-stone-800">
      <Image
        src={src}
        alt={`Portrait von ${name}`}
        fill
        sizes="(min-width: 640px) 320px, 288px"
        className="object-cover object-[45%_center]"
      />
    </div>
  );
}

function PlayOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-coral bg-black/30 text-brand-coral shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-coral group-hover:text-black">
        <Play className="h-6 w-6 fill-current" />
      </span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-brand-green py-16 sm:py-20">
      <div className="mx-auto max-w-360 px-5">
        <Reveal><div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Erfahrungsberichte aus dem veganen Fitness-Coaching
          </h2>
          <p className="mt-4 text-lg text-white sm:text-xl">
            Kurze Video-Statements aus dem veganen Fitness-Coaching – kein
            Skript, keine Studio-Inszenierung.
          </p>
        </div></Reveal>

        <Reveal delay={150}><div className="mt-12">
          <Carousel>
            {testimonials.map(({ name, subtitle, image }) => (
              <div
                key={name}
                className="w-72 shrink-0 snap-start overflow-hidden rounded-2xl border-2 border-transparent bg-white transition-colors duration-300 ease-out hover:border-brand-coral sm:w-80"
              >
                <button
                  type="button"
                  aria-label={`Video-Statement von ${name} abspielen`}
                  className="group relative block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
                >
                  <TestimonialImage src={image} name={name} />
                  <PlayOverlay />
                </button>

                <div className="p-4">
                  <p className="text-lg font-bold text-black">{name}</p>
                  <p className="mt-1 text-base text-black/60">{subtitle}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div></Reveal>

        {/* TODO: verlinkt auf die vollständige Video-Übersicht, sobald diese existiert */}
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="rounded-full border-2 border-brand-coral px-6 py-3 text-center text-base font-semibold text-brand-coral transition-colors duration-300 ease-out hover:bg-brand-coral hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
          >
            Alle Videos ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
