"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const faqs = [
  "What is the purpose of life in Islam?",
  "How does Islam promote peace?",
  "What is the Quran, and why is it important?",
  "Why do Muslims pray five times a day?",
  "What is the significance of fasting during Ramadan?",
  "How is zakat calculated?",
  "Is alcohol completely forbidden in Islam?",
  "Is hijab obligatory in Islam?",
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRefs.current.forEach((el, index) => {
      if (!el) return;

      if (activeIndex === index) {
        gsap.to(el, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    });
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden bg-brand-softGreen px-6 py-28 md:px-16">
      {/* Subtle Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/images/pattern.png')",
          backgroundSize: "600px",
        }}
      />

      {/* Bottom Butter Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-brand-butter/60 to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-body text-[48px] text-gray-700">FAQS</h2>

            <h3 className="mt-2 font-heading text-[48px] md:text-[40px] text-brand-primary">
              Find your Question
            </h3>

            <p className="mt-3 font-body tect-[24px] text-gray-600">
              Quick answers to the most common questions.
            </p>
          </div>

          <button className="rounded-full bg-brand-primary px-6 py-2 text-sm text-white transition hover:opacity-90">
            Visit FAQs
          </button>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="rounded-xl bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-4 text-left text-gray-800"
              >
                <span className="text-sm md:text-base">{question}</span>

                {/* Chevron Down Icon */}
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Animated Content */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="px-6 overflow-hidden h-0 opacity-0"
              >
                <div className="pb-4 text-sm text-gray-600">
                  Islam emphasizes peace, devotion to God, moral responsibility,
                  and guidance for all aspects of life.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
