import CoachingForm from "./CoachingForm";
import Reveal from "./Reveal";

export default function CoachingFormSection() {
  return (
    <section id="coaching-anfrage" className="bg-brand-green py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <div className="rounded-3xl bg-black p-6 ring-1 ring-white/10 sm:p-9">
            <CoachingForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
