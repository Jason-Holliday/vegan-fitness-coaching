"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useCoachingModal } from "./CoachingModalProvider";
import Reveal from "./Reveal";

const steps = [
  {
    title: "Wir schauen, wo du gerade stehst",
    text: "Zu Beginn sprechen wir über deine Ziele, deinen aktuellen Alltag, deine Ernährung und dein Training. Dabei geht es nicht darum, alles von heute auf morgen zu verändern – sondern herauszufinden, was für dich wirklich sinnvoll ist.",
  },
  {
    title: "Du bekommst deinen persönlichen Plan",
    text: "Auf Basis deiner Situation entwickeln wir einen individuellen Plan für Ernährung und Training. Du bekommst klare Strukturen, einfache Strategien und konkrete nächste Schritte, die du auch im normalen Alltag umsetzen kannst.",
  },
  {
    title: "Wir setzen es gemeinsam um",
    text: "Du bist dabei nicht auf dich allein gestellt. Wir schauen regelmäßig auf deine Fortschritte, passen deinen Plan an und lösen gemeinsam die Herausforderungen, die unterwegs entstehen. So entwickelst du Routinen, die nicht nur ein paar Wochen funktionieren.",
  },
];

function ProcessImage() {
  return (
    <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl">
      <Image
        src="/Vegan%20Fitness%20Coach/howItWorks_Section.jpg"
        alt="Coaching-Call in der Küche beim Kochen"
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-[40%_center]"
      />
    </div>
  );
}

export default function Process() {
  const { open: openCoachingModal } = useCoachingModal();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    const circles = circleRefs.current.filter(
      (el): el is HTMLSpanElement => el !== null,
    );
    if (!wrapper || !track || !progress || circles.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let lineTop = 0;
    let lineHeight = 0;
    let circleCenters: number[] = [];

    const setCircleActive = (circle: HTMLSpanElement, isActive: boolean) => {
      circle.classList.toggle("bg-brand-coral", isActive);
      circle.classList.toggle("scale-105", isActive);
      circle.classList.toggle("bg-brand-coral/35", !isActive);
    };

    const setContentActive = (content: HTMLDivElement, isActive: boolean) => {
      content.classList.toggle("opacity-100", isActive);
      content.classList.toggle("translate-y-0", isActive);
      content.classList.toggle("opacity-0", !isActive);
      content.classList.toggle("translate-y-4", !isActive);
    };

    const measure = () => {
      const wrapperRect = wrapper.getBoundingClientRect();
      const firstRect = circles[0].getBoundingClientRect();
      const lastRect = circles[circles.length - 1].getBoundingClientRect();

      const firstCenter =
        (firstRect.top + firstRect.bottom) / 2 - wrapperRect.top;
      const lastCenter =
        (lastRect.top + lastRect.bottom) / 2 - wrapperRect.top;
      const horizontalCenter =
        (firstRect.left + firstRect.right) / 2 - wrapperRect.left;

      lineTop = firstCenter;
      lineHeight = lastCenter - firstCenter;

      track.style.top = `${lineTop}px`;
      track.style.height = `${lineHeight}px`;
      track.style.left = `${horizontalCenter}px`;
      progress.style.top = `${lineTop}px`;
      progress.style.left = `${horizontalCenter}px`;

      circleCenters = circles.map((circle) => {
        const rect = circle.getBoundingClientRect();
        return (rect.top + rect.bottom) / 2 - wrapperRect.top - lineTop;
      });
    };

    const update = () => {
      if (lineHeight <= 0) return;

      const wrapperRect = wrapper.getBoundingClientRect();
      const viewportAnchor = window.innerHeight * 0.65;
      const raw =
        (viewportAnchor - (wrapperRect.top + lineTop)) / lineHeight;
      const clamped = Math.max(0, Math.min(1, raw));
      const filledPx = clamped * lineHeight;

      progress.style.height = `${filledPx}px`;

      circles.forEach((circle, i) => {
        const isActive = filledPx >= circleCenters[i] - 2;
        setCircleActive(circle, isActive);

        const content = contentRefs.current[i];
        if (content) setContentActive(content, isActive);
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    const onResize = () => {
      measure();
      update();
    };

    measure();

    if (prefersReducedMotion) {
      progress.style.transition = "none";
      progress.style.height = `${lineHeight}px`;
      circles.forEach((circle, i) => {
        setCircleActive(circle, true);
        const content = contentRefs.current[i];
        if (content) setContentActive(content, true);
      });
    } else {
      update();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(wrapper);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="bg-brand-green py-16 sm:py-20">
      <div className="mx-auto max-w-360 px-5">
        <Reveal><h2 className="mx-auto max-w-2xl text-center text-3xl font-extrabold text-white sm:text-5xl">
          So läuft dein Coaching ab
        </h2></Reveal>

        <Reveal delay={100}><p className="mx-auto mt-6 max-w-3xl text-center text-lg text-white sm:text-xl">
          Kein fertiger Plan, den du einfach in die Hand gedrückt bekommst.
          Wir schauen gemeinsam, wo du gerade stehst, was du erreichen
          möchtest und entwickeln daraus einen Weg, der wirklich zu deinem
          Alltag passt.
        </p></Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal><ProcessImage /></Reveal>

          <div ref={wrapperRef} className="relative flex flex-col gap-14">
            <div
              ref={trackRef}
              className="absolute w-0.5 -translate-x-1/2 rounded-full bg-white/15"
            />
            <div
              ref={progressRef}
              className="absolute w-0.5 -translate-x-1/2 rounded-full bg-brand-coral shadow-[0_0_12px_rgba(242,115,92,0.5)]"
              style={{ height: 0, transition: "height 0.12s linear" }}
            />

            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-6">
                <span
                  ref={(el) => {
                    circleRefs.current[i] = el;
                  }}
                  className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-coral/35 text-base font-bold text-white transition-[background-color,transform] duration-400 ease-out"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  ref={(el) => {
                    contentRefs.current[i] = el;
                  }}
                  className="translate-y-4 pt-2 opacity-0 transition-all duration-700 ease-out"
                >
                  <p className="text-sm font-semibold tracking-wide text-white uppercase">
                    Schritt {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-white">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
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
