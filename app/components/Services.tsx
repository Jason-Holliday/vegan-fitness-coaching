"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useCoachingModal } from "./CoachingModalProvider";
import Reveal from "./Reveal";

const nutritionPoints = [
  {
    title: "Grundlagen verstehen",
    text: "Du lernst die wichtigsten Grundlagen der veganen Ernährung und weißt, welche Nährstoffe wirklich wichtig sind, wie du Mängel vermeidest und wie du Lebensmittel sinnvoll kombinierst. So weißt du genau, worauf es ankommt und kannst selbstbewusst Entscheidungen treffen.",
  },
  {
    title: "Umsetzung im Alltag",
    text: "Du erhältst individuelle, einfache und leckere Rezeptideen, Einkaufstipps und Meal-Prep-Strategien, die zu deinem Alltag, deinem Budget und deinen Vorlieben passen. Du lernst, wie du gesund, schnell und abwechslungsreich kochst – auch wenn du wenig Zeit hast.",
  },
  {
    title: "Langfristig erfolgreich sein",
    text: "Wir entwickeln gemeinsam Routinen und Strategien, mit denen du motiviert bleibst, Rückschläge meisterst und deine Ergebnisse langfristig hältst. Du lernst, wie du deine Ernährung flexibel an verschiedene Lebenssituationen anpasst – für mehr Energie, Wohlbefinden und eine gesunde Zukunft.",
  },
];

const trainingPoints = [
  {
    title: "Effektiv trainieren",
    text: "Du lernst, welche Übungen und Trainingsmethoden wirklich zu deinem Ziel passen. Statt einfach irgendeinen Plan abzuarbeiten, verstehst du, warum du etwas machst und wie du dein Training sinnvoll aufbaust.",
  },
  {
    title: "Auf dich abgestimmter Trainingsplan",
    text: "Dein Training wird an dein Fitnesslevel, deinen Alltag und deine Möglichkeiten angepasst. Egal ob Gym oder Zuhause – du bekommst einen klaren Plan und weißt bei jeder Einheit, was zu tun ist und wie du dich Schritt für Schritt steigerst.",
  },
  {
    title: "Fortschritte langfristig sichern",
    text: "Wir passen dein Training regelmäßig an deine Entwicklung an und arbeiten gezielt an Kraft, Fitness und Leistungsfähigkeit. Du lernst, Fortschritte richtig einzuschätzen, Plateaus zu überwinden und auch langfristig motiviert zu bleiben.",
  },
];

function Checklist({
  points,
}: {
  points: { title: string; text: string }[];
}) {
  return (
    <div className="mt-8 flex flex-col gap-6">
      {points.map(({ title, text }) => (
        <div key={title} className="flex gap-3">
          <Check className="mt-1 h-5 w-5 shrink-0 text-brand-coral" />
          <div>
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <p className="mt-1 text-base leading-relaxed text-white">
              {text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ServiceImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-center"
      />
    </div>
  );
}

export default function Services() {
  const { open: openCoachingModal } = useCoachingModal();

  return (
    <section id="coaching" className="bg-brand-green-alt py-16 sm:py-20">
      <div className="mx-auto max-w-360 px-5">
        <Reveal><h2 className="mx-auto max-w-2xl text-center text-3xl font-extrabold text-white sm:text-5xl">
          Gemeinsam arbeiten wir an deinem Plan, der zu deinem Leben passt
        </h2></Reveal>

        <Reveal delay={100}><p className="mx-auto mt-6 max-w-3xl text-center text-lg text-white sm:text-xl">
          Wir arbeiten persönlich zusammen: Ernährung, Training und
          Gewohnheiten werden auf deinen Alltag, deinen Geschmack und deine
          Ziele zugeschnitten. Kein Copy-Paste-Plan.
        </p></Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal><ServiceImage src="/Vegan%20Fitness%20Coach/service_image.avif" alt="Mann hält zwei Meal-Prep-Boxen mit veganen Gerichten" /></Reveal>

          <Reveal delay={150}><div>
            <h3 className="text-3xl font-bold text-white">
              Individuelle Ernährung
            </h3>
            <p className="mt-3 text-base text-white sm:text-lg">
              Wir erstellen einen Ernährungsplan der zu deinem Leben passt.
            </p>

            <Checklist points={nutritionPoints} />
          </div></Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal delay={150}><div className="lg:order-1">
            <h3 className="text-3xl font-bold text-white">
              Personalisierter Trainingsplan
            </h3>
            <p className="mt-3 text-base text-white sm:text-lg">
              Egal ob im Gym oder zu Hause. Wir erstellen einen individuellen
              Trainingsplan, der dich Schritt für Schritt stärker, fitter und
              gesünder macht.
            </p>

            <Checklist points={trainingPoints} />
          </div></Reveal>

          <div className="lg:order-2">
            <Reveal><ServiceImage src="/Vegan%20Fitness%20Coach/serivice_2.avif" alt="Sportler beim Krafttraining an den Dip-Barren" /></Reveal>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
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
