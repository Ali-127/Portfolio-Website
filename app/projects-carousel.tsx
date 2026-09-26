"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/the-wild-oasis/the-wild-oasis-1.png",
    alt: "The Wild Oasis cabin booking landing page",
    label: "Cabin discovery",
  },
  {
    src: "/the-wild-oasis/the-wild-oasis-2.png",
    alt: "The Wild Oasis cabin listing and search filters",
    label: "Cabin listings",
  },
  {
    src: "/the-wild-oasis/the-wild-oasis-3.png",
    alt: "A cabin detail page from The Wild Oasis booking website",
    label: "Cabin details",
  },
];

export default function ProjectsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  function showSlide(offset: number) {
    setActiveSlide((current) => (current + offset + slides.length) % slides.length);
  }

  return (
    <div
      className="group relative aspect-[16/10] overflow-hidden border border-paper/20 bg-[#151d18]"
      aria-label="The Wild Oasis project screenshots"
      aria-roledescription="carousel"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
            index === activeSlide ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== activeSlide}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover object-top"
          />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/90 via-ink/45 to-transparent px-4 pb-4 pt-16 sm:px-6 sm:pb-6">
        <p className="font-mono text-xs tracking-[0.12em] text-paper uppercase">
          0{activeSlide + 1} / 0{slides.length} <span className="mx-2 text-accent">·</span>
          {slides[activeSlide].label}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => showSlide(-1)}
            className="flex size-9 items-center justify-center border border-paper/35 text-paper transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Previous project screenshot"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => showSlide(1)}
            className="flex size-9 items-center justify-center border border-paper/35 text-paper transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Next project screenshot"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="absolute top-4 right-4 flex gap-2 sm:top-6 sm:right-6" aria-label="Choose screenshot">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={`h-1.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              index === activeSlide ? "w-8 bg-accent" : "w-4 bg-paper/60 hover:bg-paper"
            }`}
            aria-label={`Show screenshot ${index + 1}: ${slide.label}`}
            aria-current={index === activeSlide}
          />
        ))}
      </div>
    </div>
  );
}