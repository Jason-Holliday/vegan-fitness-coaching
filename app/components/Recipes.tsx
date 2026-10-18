"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import Modal from "./Modal";
import Reveal from "./Reveal";

const IMG = "/Vegan%20Fitness%20Coach";

const recipes = [
  {
    category: "Frühstück",
    title: "Cremige Protein-Bowl",
    text: "Ein einfaches, nährstoffreiches Frühstück mit pflanzlichem Protein, frischen Früchten und knusprigem Topping – perfekt für einen energiegeladenen Start in den Tag.",
    protein: 32,
    kcal: 410,
    carbs: 48,
    time: 10,
    image: `${IMG}/food_1.png`,
    photo: false,
  },
  {
    category: "Frühstück",
    title: "Avocado Brot",
    text: "Ein einfaches, proteinreiches Frühstück mit cremigem Avocado, knusprigem Brot und nährstoffreichem Topping – perfekt für einen energiereichen Start in den Tag.",
    protein: 22,
    kcal: 390,
    carbs: 38,
    time: 10,
    image: `${IMG}/food_2.png`,
    photo: false,
  },
  {
    category: "Mittagessen",
    title: "Protein Buddha Bowl",
    text: "Eine bunte, nährstoffreiche Bowl mit mariniertem Tofu, Quinoa, frischem Gemüse und cremigem Tahini-Dressing. Sättigend, proteinreich und perfekt für deinen energiegeladenen Alltag.",
    protein: 38,
    kcal: 520,
    carbs: 64,
    time: 15,
    image: `${IMG}/food_3.png`,
    photo: false,
  },
  {
    category: "Snack",
    title: "Protein Joghurt Becher",
    text: "Cremig, proteinreich und super lecker. Dieser einfache Snack mit Skyr, frischen Beeren, knusprigem Granola und Nussmus ist perfekt für den kleinen Hunger zwischendurch.",
    protein: 28,
    kcal: 320,
    carbs: 36,
    time: 5,
    image: `${IMG}/food_4.png`,
    photo: false,
  },
  {
    category: "Hauptgericht",
    title: "Süßkartoffel-Tofu-Bowl",
    text: "Ofen-Süßkartoffeln, knuspriger Tofu, Rote Bete und Granatapfelkerne mit cremigem Tahini-Dressing – sättigend und proteinreich.",
    protein: 26,
    kcal: 480,
    carbs: 58,
    time: 25,
    image: `${IMG}/vegan%20bowl.png`,
    photo: true,
  },
  {
    category: "Hauptgericht",
    title: "Avocado-Edamame-Bowl",
    text: "Grünkohl, Avocado, Edamame, Rotkohl und Karotten mit Tahini-Dressing und gebratenen Süßkartoffeln – frisch, bunt und proteinreich.",
    protein: 24,
    kcal: 450,
    carbs: 46,
    time: 20,
    image: `${IMG}/vegan%20bowl%202.png`,
    photo: true,
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

function RecipeStats({
  protein,
  kcal,
  carbs,
  time,
}: {
  protein: number;
  kcal: number;
  carbs: number;
  time: number;
}) {
  return (
    <div className="mt-4 grid grid-cols-4 divide-x divide-white/10 border-t border-white/10">
      <Stat value={`${protein}g`} label="Protein" />
      <Stat value={`${kcal}`} label="kcal" />
      <Stat value={`${carbs}g`} label="Carbs" />
      <Stat value={`${time}`} label="Min" />
    </div>
  );
}

function RecipeImage({
  recipe,
  className = "",
}: {
  recipe: (typeof recipes)[number];
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${
        recipe.photo ? "bg-white" : "bg-stone-800"
      } ${className}`}
    >
      <Image
        src={recipe.image}
        alt={recipe.title}
        fill
        sizes="(min-width: 640px) 384px, 320px"
        className={
          recipe.photo
            ? "object-contain p-2"
            : "object-cover object-[50%_58%]"
        }
      />
    </div>
  );
}

export default function Recipes() {
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
    <section id="recipes" className="bg-brand-green py-16 sm:py-20">
      <div className="mx-auto max-w-360 px-5">
        <Reveal><div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Vegane Rezepte für dein Fitness-Coaching
          </h2>
          <p className="mt-4 text-lg text-white sm:text-xl">
            Alltagstaugliche, proteinreiche Gerichte – komplett
            pflanzenbasiert.
          </p>
        </div></Reveal>

        <Reveal delay={150}><div className="mt-12">
          <Carousel>
            {recipes.map((recipe, i) => (
              <div
                key={recipe.title}
                role="button"
                tabIndex={0}
                onClick={() => setOpenIndex(i)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setOpenIndex(i);
                  }
                }}
                className="w-80 shrink-0 cursor-pointer snap-start overflow-hidden rounded-2xl border-2 border-transparent bg-white/5 transition-colors duration-300 ease-out hover:border-brand-coral hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral sm:w-96"
              >
                <div className="relative">
                  <RecipeImage recipe={recipe} className="aspect-4/3" />
                </div>

                <div className="p-5">
                  <p className="text-sm font-semibold tracking-wide text-white uppercase">
                    {recipe.category}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {recipe.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-base text-white">
                    {recipe.text}
                  </p>

                  <RecipeStats
                    protein={recipe.protein}
                    kcal={recipe.kcal}
                    carbs={recipe.carbs}
                    time={recipe.time}
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
            Alle Rezepte scrollen
          </button>
        </div>
      </div>

      <Modal
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        title="Alle Rezepte"
        bodyClassName="scrollbar-hide snap-y snap-mandatory overflow-y-auto"
      >
        {recipes.map((recipe, i) => (
          <div
            key={recipe.title}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="flex min-h-[70vh] snap-start flex-col justify-center gap-4 px-6 py-10"
          >
            <p className="text-sm font-semibold tracking-wide text-brand-coral uppercase">
              {recipe.category}
            </p>
            <h4 className="-mt-2 text-3xl font-bold text-white">
              {recipe.title}
            </h4>

            <RecipeImage recipe={recipe} className="aspect-square rounded-2xl" />

            <p className="text-base text-white">{recipe.text}</p>

            {/* TODO: verlinkt auf die echte Rezeptseite, sobald diese existiert */}
            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-brand-coral bg-brand-coral px-5 py-2.5 text-base font-semibold text-black transition-colors duration-300 ease-out hover:bg-transparent hover:text-brand-coral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
            >
              Zum Rezept →
            </a>

            <RecipeStats
              protein={recipe.protein}
              kcal={recipe.kcal}
              carbs={recipe.carbs}
              time={recipe.time}
            />
          </div>
        ))}
      </Modal>
    </section>
  );
}
