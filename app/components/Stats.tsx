import { CookingPot, Dumbbell, Eye, GraduationCap, Users } from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  { icon: GraduationCap, value: "10 Jahre", label: "Erfahrung" },
  { icon: Dumbbell, value: "300", label: "Workouts" },
  { icon: CookingPot, value: "500", label: "Rezepte" },
  { icon: Eye, value: "45 Mio.+", label: "Views" },
  { icon: Users, value: "500.000+", label: "Follower" },
];

export default function Stats() {
  return (
    <section className="bg-brand-green-alt py-16 sm:py-20">
      <div className="mx-auto max-w-360 px-5">
        <Reveal><h2 className="text-center text-3xl font-extrabold text-white sm:text-5xl">
          Meine Zahlen auf einen Blick
        </h2></Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <Reveal key={label} delay={i * 200}>
            <div
              className="flex items-center gap-5 h-full rounded-2xl border-2 border-transparent bg-emerald-50/95 transition-colors duration-300 ease-out hover:border-brand-coral px-7 py-10"
            >
              <Icon className="h-12 w-12 shrink-0 text-brand-coral" />
              <span className="h-14 w-px shrink-0 bg-black/15" />
              <div>
                <p className="text-3xl font-extrabold text-black">{value}</p>
                <p className="text-lg text-black">{label}</p>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
