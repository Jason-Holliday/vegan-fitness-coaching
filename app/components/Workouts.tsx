"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import Modal from "./Modal";
import Reveal from "./Reveal";

const workouts = [
  {
    category: "Technik",
    title: "Kreuzheben – Grundtechnik für Einsteiger",
    text: "Saubere Ausführung vor dem Gewicht: Rückenhaltung, Griff und Anlauf Schritt für Schritt.",
    kcal: 60,
    time: 8,
    level: "Anfänger",
    exercises: 4,
  },
  {
    category: "HIIT",
    title: "HIIT-Zirkel für zuhause",
    text: "15 Minuten, kein Equipment nötig – kurze Belastung, kurze Pause, maximaler Effekt.",
    kcal: 180,
    time: 15,
    level: "Mittel",
    exercises: 6,
  },
  {
    category: "Mobility",
    title: "Mobility- und Dehnroutine für Regenerationstage",
    text: "Sanfte Mobilisation für Hüfte, Schultern und Rücken – ideal an trainingsfreien Tagen.",
    kcal: 45,
    time: 12,
    level: "Anfänger",
    exercises: 7,
  },
  {
    category: "Technik",
    title: "Kniebeugen – Technik für mehr Kraft",
    text: "Tiefe, stabile Kniebeugen mit korrekter Atmung und Fußstellung.",
    kcal: 70,
    time: 10,
    level: "Mittel",
    exercises: 3,
  },
  {
    category: "Kraft",
    title: "Oberkörper-Workout mit Kurzhanteln",
    text: "Effektives Push-Pull-Training für Brust, Rücken und Schultern.",
    kcal: 190,
    time: 20,
    level: "Fortgeschritten",
    exercises: 8,
  },
  {
    category: "Core",
    title: "Bauch- und Core-Workout",
    text: "Kräftige deine Körpermitte mit gezielten Core-Übungen.",
    kcal: 100,
    time: 12,
    level: "Mittel",
    exercises: 6,
  },
  {
    category: "Kraft",
    title: "Unterkörper-Workout ohne Geräte",
    text: "Beine und Po effektiv trainieren – komplett ohne Equipment.",
    kcal: 160,
    time: 18,
    level: "Anfänger",
    exercises: 7,
  },
  {
    category: "Ganzkörper",
    title: "Schnelles Ganzkörper-Workout",
    text: "Kompaktes Training für alle Muskelgruppen in kurzer Zeit.",
    kcal: 200,
    time: 20,
    level: "Mittel",
    exercises: 9,
  },
  {
    category: "Kraft",
    title: "Klimmzug-Progression für Einsteiger",
    text: "Schritt für Schritt zum ersten sauberen Klimmzug.",
    kcal: 80,
    time: 10,
    level: "Anfänger",
    exercises: 4,
  },
  {
    category: "Cardio",
    title: "Cardio-Finisher für mehr Ausdauer",
    text: "Kurze, intensive Cardio-Einheit zum Trainingsabschluss.",
    kcal: 110,
    time: 8,
    level: "Fortgeschritten",
    exercises: 5,
  },
];

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-0.5 py-2">
      <span className="text-base font-bold text-white">{value}</span>
      <span className="text-xs text-white">{label}</span>
    </div>
  );
}

function WorkoutStats({
  kcal,
  time,
  level,
  exercises,
}: {
  kcal: number;
  time: number;
  level: string;
  exercises: number;
}) {
  return (
    <div className="mt-4 grid grid-cols-4 divide-x divide-white/10 border-t border-white/10">
      <Stat value={`${kcal}`} label="kcal" />
      <Stat value={`${time}`} label="Min" />
      <Stat value={level} label="Level" />
      <Stat value={`${exercises}`} label="Übungen" />
    </div>
  );
}

const workoutImages = [
  "/Vegan%20Fitness%20Coach/workout_1.avif",
  "/Vegan%20Fitness%20Coach/workout_2.jpg",
];

function WorkoutImage({
  index,
  title,
  className = "",
}: {
  index: number;
  title: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden bg-stone-800 ${className}`}>
      <Image
        src={workoutImages[index % workoutImages.length]}
        alt={title}
        fill
        sizes="(min-width: 640px) 384px, 320px"
        className="object-cover object-center"
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

export default function Workouts() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (openIndex === null) return;
    itemRefs.current[openIndex]?.scrollIntoView({
      block: "start",
      behavior: "auto",
    });
  }, [openIndex]);


  return (
    <section className="bg-brand-green-alt py-16 sm:py-20">
      <div className="mx-auto max-w-360 px-5">
        <Reveal><div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Trainingsvideos für dein veganes Fitness-Coaching
          </h2>
          <p className="mt-4 text-lg text-white sm:text-xl">
            Übungen zum Nachmachen – von Grundtechnik bis Konditionstraining.
          </p>
        </div></Reveal>

        <Reveal delay={150}><div className="mt-12">
          <Carousel>
            {workouts.map((workout, i) => (
              <div
                key={workout.title}
                role="button"
                tabIndex={0}
                onClick={() => setOpenIndex(i)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setOpenIndex(i);
                  }
                }}
                className="group w-80 shrink-0 cursor-pointer snap-start overflow-hidden rounded-2xl border-2 border-transparent bg-white/5 transition-colors duration-300 ease-out hover:border-brand-coral hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral sm:w-96"
              >
                <div className="relative">
                  <WorkoutImage index={i} title={workout.title} className="aspect-4/3" />
                  <PlayOverlay />
                </div>

                <div className="p-5">
                  <p className="text-sm font-semibold tracking-wide text-white uppercase">
                    {workout.category}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {workout.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-base text-white">
                    {workout.text}
                  </p>

                  <WorkoutStats
                    kcal={workout.kcal}
                    time={workout.time}
                    level={workout.level}
                    exercises={workout.exercises}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div></Reveal>

        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setOpenIndex(0)}
            className="rounded-full border-2 border-brand-coral px-6 py-3 text-center text-base font-semibold text-brand-coral transition-colors duration-300 ease-out hover:bg-brand-coral hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
          >
            Alle Workouts scrollen
          </button>
        </div>
      </div>

      <Modal
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        title="Alle Workouts"
        bodyClassName="scrollbar-hide snap-y snap-mandatory overflow-y-auto"
      >
        {workouts.map((workout, i) => (
          <div
            key={workout.title}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="flex min-h-[70vh] snap-start flex-col justify-center gap-4 px-6 py-10"
          >
            <p className="text-sm font-semibold tracking-wide text-brand-coral uppercase">
              {workout.category}
            </p>
            <h4 className="-mt-2 text-3xl font-bold text-white">
              {workout.title}
            </h4>

            <div className="relative">
              <WorkoutImage index={i} title={workout.title} className="aspect-square rounded-2xl" />
              <PlayOverlay />
            </div>

            <p className="text-base text-white">{workout.text}</p>

            {/* TODO: verlinkt auf das echte Video, sobald dieses existiert */}
            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-brand-coral bg-brand-coral px-5 py-2.5 text-base font-semibold text-black transition-colors duration-300 ease-out hover:bg-transparent hover:text-brand-coral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
            >
              Zum Workout →
            </a>

            <WorkoutStats
              kcal={workout.kcal}
              time={workout.time}
              level={workout.level}
              exercises={workout.exercises}
            />
          </div>
        ))}
      </Modal>
    </section>
  );
}
