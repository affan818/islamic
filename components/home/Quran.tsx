"use client";

import Image from "next/image";
import Link from "next/link";

const quranArticles = [
  {
    id: 1,
    image: "/images/new-quran-1.png",
    title:
      "The Preservation of the Quran: Insights from Classical and Modern Scholars",
    description:
      "This study explores how the Quran has been preserved since its revelation over 1400 years ago. The work of renowned Islamic scholar Ibn Kathir provides detailed commentary on divine protection.",
    date: "June 12, 2021",
    author: "Ibn Kathir",
    institution: "Al-Azhar University",
    rating: "4.8",
    discussions: "134 Discussions",
    readTime: "8 min read",
  },
  {
    id: 2,
    image: "/images/new-quran-2.png",
    title:
      "The Preservation of the Quran: Insights from Classical and Modern Scholars",
    description:
      "This study explores how the Quran has been preserved since its revelation over 1400 years ago.",
    date: "June 12, 2021",
    author: "Ibn Kathir",
    institution: "Al-Azhar University",
    rating: "4.8",
    discussions: "134 Discussions",
    readTime: "8 min read",
  },
  {
    id: 3,
    image: "/images/new-quran-3.png",
    title:
      "The Preservation of the Quran: Insights from Classical and Modern Scholars",
    description:
      "This study explores how the Quran has been preserved since its revelation over 1400 years ago.",
    date: "June 12, 2021",
    author: "Ibn Kathir",
    institution: "Al-Azhar University",
    rating: "4.8",
    discussions: "134 Discussions",
    readTime: "8 min read",
  },
  {
    id: 4,
    image: "/images/new-quran-4.png",
    title:
      "The Preservation of the Quran: Insights from Classical and Modern Scholars",
    description:
      "This study explores how the Quran has been preserved since its revelation over 1400 years ago.",
    date: "June 12, 2021",
    author: "Ibn Kathir",
    institution: "Al-Azhar University",
    rating: "4.8",
    discussions: "134 Discussions",
    readTime: "8 min read",
  },
];

export default function Quran() {
  return (
    <section className="relative px-6 py-24 md:px-16">
      {/* Header */}
      <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-heading text-[48px] text-gray-800">
            New on The Quran
          </h2>

          <h3 className="mt-3 font-heading text-[48px] md:text-[48px] text-brand-primary">
            A Timeless Divine Revelation
          </h3>
        </div>

        <button className="rounded-full bg-brand-primary px-8 py-3 text-sm text-white transition hover:opacity-90">
          See All
        </button>
      </div>

      {/* Articles */}
      <div className="space-y-14">
        {quranArticles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col gap-8 md:flex-row md:items-start"
          >
            {/* Fixed Image Size */}
            <div className="relative h-[226px] w-full md:w-[320px] shrink-0 overflow-hidden rounded-xl">
              <Image
                src={article.image}
                alt={article.title}
                fill
                quality={100}
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Top Meta */}
              <p className="text-sm text-gray-500">
                {article.date} | {article.author} | {article.institution}
              </p>

              {/* Title */}
              <h4 className="mt-2 font-heading text-[22px] text-gray-900">
                {article.title}
              </h4>

              {/* Description */}
              <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                {article.description}
              </p>

              {/* Bottom Meta */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                {/* Subtle Monotone Icons */}
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61L12 17.77l-4.998 2.769a.562.562 0 01-.84-.61l1.285-5.385a.563.563 0 00-.182-.557L3.061 10.385a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    {article.rating}
                  </span>

                  <span>{article.discussions}</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Verified */}
                <Link
                  href="#"
                  className="text-sm text-brand-primary hover:underline"
                >
                  Verified Source
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-brand-butter via-brand-butter/70 to-transparent" />
    </section>
  );
}
