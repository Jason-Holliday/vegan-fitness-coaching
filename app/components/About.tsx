"use client";

import Image from "next/image";
import { useCoachingModal } from "./CoachingModalProvider";
import Reveal from "./Reveal";

const paragraphs = [
  "Seit mehreren Jahren dreht sich bei mir vieles um Kraftsport, Fitness und eine pflanzliche Ernährung, denn ich wollte einen Weg finden, mit dem sich ein leistungsfähiger und athletischer Körper aufbauen lässt, ohne dabei auf tierische Produkte angewiesen zu sein. Aus dieser persönlichen Leidenschaft ist mit der Zeit der Wunsch entstanden, mein Wissen, meine Erfahrungen und vor allem unkomplizierte vegane Rezepte mit anderen Menschen zu teilen.",
  "Mir ist wichtig zu zeigen, dass vegane Ernährung weder kompliziert noch langweilig sein muss und dass auch Klassiker wie Burger, Pasta, Bowls oder süße Gerichte ihren Platz haben können. Deshalb entwickle ich einfache, proteinreiche vegane Rezepte, die sich problemlos in einen normalen Alltag integrieren lassen, richtig gut schmecken und gleichzeitig dabei helfen können, den Körper mit den benötigten Nährstoffen und Proteinen zu versorgen.",
  "Mit meinen Rezepten, Workouts und meinem persönlichen Coaching möchte ich Menschen dabei unterstützen, ihre Ernährung langfristig zu verbessern, stärker zu werden und ihre individuellen körperlichen Ziele zu erreichen, ohne dass sich das ganze Leben nur noch um Kalorien, Verbote und komplizierte Ernährungspläne dreht.",
  "Mittlerweile ist rund um meine Inhalte eine große Community entstanden, mit der ich meine Begeisterung für vegane Ernährung, Muskelaufbau und einen gesunden Lebensstil jeden Tag teilen darf.",
];

function AboutImage() {
  return (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl lg:aspect-auto lg:h-full lg:min-h-[480px]">
      <Image
        src="/Vegan%20Fitness%20Coach/about.jpg"
        alt="Richard beim Kochen eines veganen Gerichts"
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-center"
      />
    </div>
  );
}

export default function About() {
  const { open: openCoachingModal } = useCoachingModal();

  return (
    <section id="about" className="bg-brand-green-alt py-16 sm:py-20">
      <div className="mx-auto max-w-360 px-5">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <Reveal><div>
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
              Ich bin Richard.
            </h2>

            <div className="mt-6 flex flex-col gap-4">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-white sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <button
              type="button"
              onClick={openCoachingModal}
              className="mt-8 inline-block rounded-full border-2 border-brand-coral px-6 py-3 text-center text-base font-semibold text-brand-coral transition-colors duration-300 ease-out hover:bg-brand-coral hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
            >
              Kostenloses 1:1 Coaching anfragen
            </button>
          </div></Reveal>

          <Reveal delay={150}><AboutImage /></Reveal>
        </div>
      </div>
    </section>
  );
}
