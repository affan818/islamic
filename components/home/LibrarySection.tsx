"use client";

import Image from "next/image";
import Link from "next/link";

const libraryItems = [
  {
    title: "Muslim Challenges",
    description:
      "Muslims today face various challenges, from social pressures to media misconceptions.",
  },
  {
    title: "Islam is the truth",
    description:
      "Islam often misunderstood, but at its core, it promotes peace and spiritual growth.",
  },
  {
    title: "Islam is the truth",
    description:
      "Islam often misunderstood, but at its core, it promotes peace and spiritual growth.",
  },
  {
    title: "Islam is the truth",
    description:
      "Islam often misunderstood, but at its core, it promotes peace and spiritual growth.",
  },
  {
    title: "Pillars of Faith",
    description:
      "The foundation of a Muslim’s belief is built upon six key pillars.",
  },
  {
    title: "Convert Stories",
    description:
      "Everyone’s spiritual journey is unique. Read personal accounts.",
  },
];

export default function LibrarySection() {
  return (
    <section className="relative bg-white py-28">
      {/* Background Mosque Shapes*/}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 bg-[url('/images/mosque-pattern.png')] bg-contain bg-no-repeat" />
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 bg-[url('/images/mosque-pattern.png')] bg-contain bg-no-repeat" />
        <div className="absolute right-0 top-0 h-80 w-80 bg-[url('/images/mosque-pattern.png')] bg-contain bg-no-repeat" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Heading Section */}
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-heading text-[48px] md:text-[80px] leading-tight text-gray-900">
              Our Library
            </h2>

            <p className="mt-6 text-[18px] md:text-[32px] leading-snug text-gray-600">
              Discover verified sources, historical texts, and expert analyses.
              Our library provides researched materials for clarity and
              credibility.
            </p>
          </div>

          <button className="rounded-full bg-brand-primary px-10 py-3 text-sm text-white transition hover:opacity-90">
            View All
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid gap-20 lg:grid-cols-2 ">
          {/* Left Column */}
          <div className="grid grid-cols-1 gap-y-10 gap-x-12 md:grid-cols-2">
            {libraryItems.map((item, index) => (
              <div key={index} className="flex items-start gap-5">
                {/* Icon Square */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md border border-brand-secondary bg-brand-light text-brand-secondary">
                  img
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
                    className="mt-3 inline-block text-[14px] text-brand-primary hover:underline"
                  >
                    Find Answer
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="relative h-[600px] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/library-image.png"
              alt="Library Mosque Interior"
              fill
              priority
              quality={100}
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
