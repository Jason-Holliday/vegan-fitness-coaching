"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, useRef, useState } from "react";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = Children.count(children);

  const updateActiveIndex = () => {
    const el = trackRef.current;
    if (!el) return;

    const cardWidth = el.scrollWidth / count;
    setActiveIndex(Math.round(el.scrollLeft / cardWidth));
  };

  const scrollToIndex = (index: number) => {
    const el = trackRef.current;
    if (!el) return;

    const cardWidth = el.scrollWidth / count;
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  const scrollByDirection = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;

    const cardWidth = el.scrollWidth / count;
    el.scrollBy({ left: cardWidth * direction, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={updateActiveIndex}
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {children}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Zu Element ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              aria-current={i === activeIndex}
              className={`h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral ${
                i === activeIndex ? "w-6 bg-brand-coral" : "w-2 bg-white/30 hover:bg-brand-coral"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByDirection(-1)}
            aria-label="Zurück"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 ease-out hover:bg-brand-coral hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByDirection(1)}
            aria-label="Weiter"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 ease-out hover:bg-brand-coral hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
