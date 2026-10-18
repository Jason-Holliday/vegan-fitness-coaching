"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Brauche ich Vorerfahrung im Training?",
    a: "Nein. Die Trainingspläne werden individuell an deinen Stand angepasst – vom ersten Workout an bis zu fortgeschrittenem Krafttraining.",
  },
  {
    q: "Bekomme ich genug Protein rein pflanzlich?",
    a: "Ja. Der Ernährungsplan ist auf deinen Proteinbedarf abgestimmt – mit Hülsenfrüchten, Tofu, Seitan und pflanzlichen Proteinquellen im Alltag.",
  },
  {
    q: "Wie schnell sind erste Ergebnisse zu erwarten?",
    a: "Die meisten spüren nach 2–3 Wochen mehr Energie, sichtbare Veränderungen an Kraft und Körper zeigen sich meist nach 6–8 Wochen konsequentem Training.",
  },
  {
    q: "Brauche ich ein Fitnessstudio oder geht es auch zuhause?",
    a: "Beides ist möglich. Die Pläne lassen sich sowohl fürs Studio als auch für ein Home-Workout mit wenig Equipment gestalten.",
  },
  {
    q: "Wie läuft die Betreuung während des Coachings ab?",
    a: "Wöchentliche Check-ins, direkter Kontakt bei Fragen und laufende Anpassung von Trainings- und Ernährungsplan an deinen Fortschritt.",
  },
  {
    q: "Kann ich das Coaching jederzeit kündigen?",
    a: "Ja, es gibt keine langfristige Bindung. Die genauen Laufzeiten und Kündigungsfristen stehen in deinem Coaching-Vertrag.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-brand-green py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal><div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Häufige Fragen zum veganen Fitness-Coaching
          </h2>
          <p className="mt-4 text-lg text-white sm:text-xl">
            Die Antworten auf das, was uns am häufigsten gefragt wird.
          </p>
        </div></Reveal>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const buttonId = `faq-trigger-${i}`;
            const panelId = `faq-panel-${i}`;
            return (
              <Reveal key={faq.q} delay={i * 80}><div className="overflow-hidden rounded-2xl border-2 border-transparent bg-white transition-colors duration-300 ease-out hover:border-brand-coral">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
                  >
                    <span className="text-lg font-bold text-black">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-brand-coral bg-brand-coral text-black transition-all duration-300 group-hover:bg-transparent group-hover:text-brand-coral ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                </h3>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-6 pb-5 text-base leading-relaxed text-black"
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div></Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
