"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const testimonials = [
  {
    id: 1,
    name: "Dr. Haifaa Younis",
    role: "Obstetrician / Gynecologist",
    image: "/images/testimonial-1.png",
    quote:
      "Clear, authentic, and easy to understand. A reliable source of Islamic knowledge.",
  },
  {
    id: 2,
    name: "Imam Abu Hanifa",
    role: "Fiqh – Hanafi School",
    image: "/images/testimonial-2.png",
    quote:
      "A beautifully structured encyclopedia rooted in the Qur’an and Sunnah.",
  },
  {
    id: 3,
    name: "Dr. Zakir Naik",
    role: "Islamic scholar, public orator, televangelist, and founder/president of the Islamic Research Foundation (IRF) and Peace TV",
    image: "/images/testimonial-3.png",
    quote: "Helps clarify misconceptions and deepen faith.",
  },
  {
    id: 4,
    name: "Imam Abu Hanifa",
    role: "Fiqh – Hanafi School",
    image: "/images/testimonial-2.png",
    quote:
      "A beautifully structured encyclopedia rooted in the Qur’an and Sunnah.",
  },
  {
    id: 5,
    name: "Dr. Zakir Naik",
    role: "Islamic scholar, public orator, televangelist, and founder/president of the Islamic Research Foundation (IRF) and Peace TV",
    image: "/images/testimonial-3.png",
    quote: "Helps clarify misconceptions and deepen faith.",
  },
];

export default function Testimonials() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-brand-light px-6 py-28 md:px-16">
      {/* Subtle Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/pattern.png')",
          backgroundSize: "700px",
          backgroundPosition: "center",
        }}
      />

      <div className="relative">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-body text-[48px] text-gray-800">Testimonials</h2>

          <h3 className="mt-2 font-heading text-[48px] md:text-[44px] text-brand-primary">
            From Our Community
          </h3>

          <p className="mt-3 font-body text-[24px] text-gray-600">
            Shared experiences and sincere words
          </p>
        </div>

        {/* Horizontal Scroll Cards */}
        <div className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="snap-start shrink-0 w-[clamp(260px,80vw,360px)]"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={435}
                  height={324}
                  quality={100}
                  className="w-full h-[240px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center">
                    ▶
                  </div>
                </div>

                {/* Name + Role */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-body text-[24px]">{item.name}</h4>
                  <p className="font-body text-[14px] opacity-80">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-4 flex gap-1 text-brand-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className=" font-body mt-3 text-gray-700 text-[24px] leading-relaxed">
                “{item.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
