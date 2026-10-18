import { Dumbbell, Leaf, Soup, Users } from "lucide-react";
import Reveal from "./Reveal";

const problems = [
  {
    title: "Kann ich mit veganer Ernährung überhaupt Muskeln aufbauen?",
    text: "Du möchtest Muskeln aufbauen und stärker werden, bist dir aber unsicher, ob du mit einer veganen Ernährung genügend Protein und wichtige Nährstoffe bekommst, um deine körperlichen Ziele zu erreichen.",
    icon: Dumbbell,
  },
  {
    title: "Ich habe Angst, nicht alle wichtigen Nährstoffe zu bekommen",
    text: "Protein, Eisen, Vitamin B12 und andere Nährstoffe werfen Fragen auf. Du bist dir unsicher, ob dein Körper mit einer veganen Ernährung wirklich alles bekommt, was er braucht.",
    icon: Leaf,
  },
  {
    title: "Ich weiß nicht, was ich jeden Tag essen soll",
    text: "Dir fehlen einfache Gerichte, die schnell zubereitet sind, gut schmecken und sich problemlos in deinen Alltag integrieren lassen.",
    icon: Soup,
  },
  {
    title: "Ich schaffe es im Alltag nicht, mich vegan zu ernähren",
    text: "Du möchtest auf tierische Produkte verzichten, aber im Alltag wird es schnell schwierig. Beim Essen mit Freunden, in der Familie oder auf der Arbeit weißt du oft nicht, wie du deine vegane Ernährung unkompliziert umsetzen kannst.",
    icon: Users,
  },
];

export default function Problem() {
  return (
    <section className="bg-brand-green py-16 sm:py-20">
      <div className="mx-auto max-w-360 px-5">
        <Reveal><h2 className="mx-auto max-w-2xl text-center text-3xl font-extrabold text-white sm:text-5xl">
          Du weißt nicht, wie du anfangen sollst, dich vegan zu ernähren?
        </h2></Reveal>

        <Reveal delay={100}><p className="mx-auto mt-6 max-w-3xl text-center text-lg text-white sm:text-xl">
          Vielleicht kommt dir das bekannt vor: Du triffst dich mit deinen
          Freunden, hast aber Angst, als einzige Person etwas Veganes zu
          bestellen. Du möchtest nicht ständig erklären oder rechtfertigen
          müssen, warum du dich vegan ernährst. Gleichzeitig willst du aber
          auch nicht jedes Mal deine eigenen Ziele über Bord werfen, nur um
          dazuzugehören.
        </p></Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {problems.map(({ title, text, icon: Icon }, i) => (
            <Reveal key={title} delay={(i % 3) * 100}>
            <div
              className="h-full rounded-2xl border-2 border-transparent bg-emerald-50/95 transition-colors duration-300 ease-out hover:border-brand-coral p-6"
            >
              <div className="flex items-start gap-3">
                <Icon className="h-12 w-12 shrink-0 text-brand-coral" />
                <h3 className="text-xl font-semibold text-black">{title}</h3>
              </div>
              <p className="mt-3 text-base leading-relaxed text-black/70">
                {text}
              </p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
