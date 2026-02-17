"use client";

import Image from "next/image";
import Link from "next/link";

const libraryItems = [
  {
    title: "Answering Criticism",
    description:
      "Muslims today face various challenges, from social pressures to media misconceptions.",
    image: "/icons/icon-1.png",
  },
  {
    title: "Muslim Challenges",
    description:
      "Muslims today face various challenges, from social pressures to media misconceptions.",
    image: "/icons/icon-1.png",
  },
  {
    title: "Islam is the Truth",
    description:
      "Islam is often misunderstood, but at its core, it promotes peace, justice, and spiritual growth.",
    image: "/icons/icon-2.png",
  },
  {
    title: "Pillars of Faith",
    description:
      "The foundation of a Muslim’s belief is built upon six key pillars, including faith in God and prophets.",
    image: "/icons/icon-2.png",
  },
  {
    title: "Convert Stories",
    description:
      "Everyone’s spiritual journey is unique. Read personal accounts from people of different backgrounds.",
    image: "/icons/icon-3.png",
  },
  {
    title: "Disease & Cure",
    description:
      "Islamic teachings provide guidance on health, wellness, and spiritual healing. Learn about prophetic remedies.",
    image: "/icons/icon-3.png",
  },
];

export default function LibrarySection() {
  return (
    <section className="relative py-28 bg-white">
      {/* Background Mosque Shapes*/}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between px-16">
        <div className="h-80 w-80 bg-[url('/images/library-bg-1.png')] bg-contain bg-no-repeat" />

        <div className="h-96 w-96 bg-[url('/images/library-bg-1.png')] bg-contain bg-no-repeat" />

        <div className="h-80 w-80 bg-[url('/images/library-bg-1.png')] bg-contain bg-no-repeat" />
      </div>

      {/* Bottom Butter Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-brand-butter via-brand-butter/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Heading Section */}
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-heading text-[24px] md:text-[50px] leading-tight text-gray-900">
              Our Library
            </h2>

            <p className="mt-6 text-[16px] md:text-[18px] leading-snug text-gray-600">
              Discover verified sources, historical texts, and expert analyses.
              Our library provides researched materials for clarity and
              credibility.
            </p>
          </div>

          <button className="rounded-full bg-brand-primary px-10 py-3 text-sm text-white transition hover:opacity-90">
            View All
          </button>
        </div>
      </div>
      {/* Main Grid */}
      <div className="grid gap-16 lg:grid-cols-[1.5fr_0.9fr]  p-10 rounded-2xl items-center">
        {/* Left Column */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-12 md:grid-cols-2">
          {libraryItems.map((item, index) => (
            <div key={index} className="flex items-start gap-5">
              {/* Icon Square */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md border border-brand-secondary bg-brand-light text-brand-secondary">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-heading text-[18px] text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
                  {item.description}
                </p>

                <Link
                  href="#"
                  className="mt-3 inline-block text-[14px] text-brand-primary underline"
                >
                  Find Answer
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="relative w-full max-w-[380px] aspect-[3/4] justify-self-center overflow-hidden">
          <Image
            src="/images/library-image.png"
            alt="Library Mosque Interior"
            fill
            priority
            sizes="(max-width:1024px) 100vw,420px"
            quality={100}
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
