"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { useCoachingModal } from "./CoachingModalProvider";
import Reveal from "./Reveal";

const reviews = [
  {
    name: "Simon Auer",
    text: "Als Kraftsportler war ich skeptisch, ob pflanzliches Protein reicht. Nach einem halben Jahr Coaching: mehr Kraft als je zuvor.",
    avatar: "/Vegan%20Fitness%20Coach/avatar-1.avif",
  },
  {
    name: "Matthias Ott",
    text: "Seit der Umstellung auf pflanzenbasiert und dem Coaching-Plan habe ich mehr Energie im Alltag als mit jeder Diät vorher.",
    avatar: "/Vegan%20Fitness%20Coach/avatar-2.avif",
  },
  {
    name: "Kevin Straub",
    text: "Meine Blutwerte beim Arzt haben sich verbessert, seit ich nach Plan pflanzlich esse und trainiere.",
    avatar: "/Vegan%20Fitness%20Coach/avatar-3.avif",
  },
  {
    name: "Katharina Sommer",
    text: "Der Ernährungsplan war das erste vegane Konzept, mit dem ich wirklich satt und trotzdem leichter geworden bin.",
    avatar: "/Vegan%20Fitness%20Coach/avatar-4.avif",
  },
  {
    name: "Paul Richter",
    text: "Nach drei Monaten im Coaching habe ich gelernt, wie ich meinen Proteinbedarf komplett pflanzlich decke – ohne Shakes.",
    avatar: "/Vegan%20Fitness%20Coach/avatar-5.avif",
  },
  {
    name: "Franziska Berg",
    text: "Individuelle Trainingspläne, ehrliches Feedback und ein Coach, der wirklich versteht, wie vegane Ernährung im Sport funktioniert.",
    avatar: "/Vegan%20Fitness%20Coach/avatar-6.avif",
  },
  {
    name: "Vanessa Lehmann",
    text: "Nach jahrelangen Diäten war das erste Mal, dass mich jemand pflanzlich UND leistungsorientiert beraten hat.",
    avatar: "/Vegan%20Fitness%20Coach/avatar-7.avif",
  },
  {
    name: "Annika Krause",
    text: "Endlich ein Coaching, das Training und vegane Ernährung zusammendenkt, statt nur Kalorien zu zählen.",
    avatar: "/Vegan%20Fitness%20Coach/avatar-8.avif",
  },
  {
    name: "Daniel Frank",
    text: "Ich habe in drei Monaten mehr Muskeln aufgebaut als in einem Jahr auf eigene Faust – komplett pflanzlich.",
    avatar: "/Vegan%20Fitness%20Coach/avatar-9.avif",
  },
  {
    name: "Jan Peters",
    text: "Von Anfang an ehrliches, direktes Feedback statt Standardpläne von der Stange.",
    avatar: "/Vegan%20Fitness%20Coach/avatar-10.avif",
  },
  {
    name: "Melanie Horn",
    text: "Die Rezepte waren schnell nachgekocht und meine Blutwerte beim nächsten Check-up so gut wie nie zuvor.",
    avatar: "/Vegan%20Fitness%20Coach/avatar-11.avif",
  },
  {
    name: "Isabel Krüger",
    text: "Der Ernährungsplan war alltagstauglich, nicht nur ein Rezeptbuch. Genau das hat bei mir den Unterschied gemacht.",
    avatar: "/Vegan%20Fitness%20Coach/avatar-12.avif",
  },
];

function Avatar({ src, name }: { src: string; name: string }) {
  return (
    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-brand-coral">
      <Image
        src={src}
        alt={`Profilbild von ${name}`}
        fill
        sizes="56px"
        className="object-cover object-[50%_30%]"
      />
    </div>
  );
}

function Stars() {
  return (
    <div className="mt-3 flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-brand-coral text-brand-coral" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { open: openCoachingModal } = useCoachingModal();

  return (
    <section className="bg-brand-green-alt py-16 sm:py-20">
      <div className="mx-auto max-w-360 px-5">
        <Reveal><div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Kundenbewertungen zum veganen Fitness-Coaching
          </h2>
          <p className="mt-4 text-lg text-white sm:text-xl">
            Rückmeldungen von Klient:innen im pflanzenbasierten Coaching.
          </p>
        </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map(({ name, text, avatar }, i) => (
            <Reveal key={name} delay={(i % 3) * 100}>
            <div className="h-full rounded-2xl border-2 border-transparent bg-emerald-50/95 transition-colors duration-300 ease-out hover:border-brand-coral p-6">
              <div className="flex items-center gap-3">
                <Avatar src={avatar} name={name} />
                <p className="text-lg font-bold text-black">{name}</p>
              </div>

              <Stars />

              <p className="mt-3 text-base leading-relaxed text-black/70">
                {text}
              </p>
            </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* TODO: verlinkt auf die vollständige Bewertungsübersicht, sobald diese existiert */}
          <a
            href="#"
            className="rounded-full border-2 border-brand-coral px-6 py-3 text-center text-base font-semibold text-brand-coral transition-colors duration-300 ease-out hover:bg-brand-coral hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
          >
            Alle Kommentare ansehen
          </a>
          <button
            type="button"
            onClick={openCoachingModal}
            className="rounded-full border-2 border-brand-coral px-6 py-3 text-center text-base font-semibold text-brand-coral transition-colors duration-300 ease-out hover:bg-brand-coral hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
          >
            Kostenloses 1:1 Coaching anfragen
          </button>
        </div>
      </div>
    </section>
  );
}
