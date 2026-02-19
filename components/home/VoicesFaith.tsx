"use client";

import Image from "next/image";
import { useState } from "react";

const videos = [
  {
    id: 1,
    image: "/images/voice-1.png",
    title: "Journey to Spiritual Revert Story",
  },
  {
    id: 2,
    image: "/images/voice-2.png",
    title: "Jewish Woman Islam: I Threw the Quran Away",
  },
  {
    id: 3,
    image: "/images/voice-1.png",
    title: "Famous Youtuber’s Revert Story to Islam!",
  },
  {
    id: 4,
    image: "/images/voice-2.png",
    title: "Missionary Converted to Islam",
  },
  {
    id: 5,
    image: "/images/voice-1.png",
    title: "The Story of Journalist Who Converted to Islam",
  },
  {
    id: 6,
    image: "/images/voice-1.png",
    title: "The Story of Journalist Who Converted to Islam",
  },
];

export default function VoicesFaith() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="relative overflow-hidden px-6 py-28 md:px-16">
      {/* Background Image Fade */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Top Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bg.png"
            alt=""
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>

        {/* Fade Overlay (Image → Butter) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F4EDE1]/200 to-[#F9F5F1]" />
      </div>

      {/* Heading */}
      <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-body text-[48px] text-gray-800">
            Voices of Faith
          </h2>

          <h3 className="mt-3 font-heading text-[48px] md:text-[48px] text-brand-primary">
            Finding Guidance Through Islam
          </h3>
        </div>

        <button className="rounded-full bg-brand-primary px-8 py-3 text-sm text-white transition hover:opacity-90">
          Visit Podcast
        </button>
      </div>

      {/* Cards */}
      <div className="flex items-end gap-8 overflow-x-auto scrollbar-hide">
        {videos.map((video, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={video.id}
              onClick={() => setActiveIndex(index)}
              className={`relative snap-center shrink-0 cursor-pointer transition-all duration-500 ${
                isActive
                  ? "w-[clamp(280px,85vw,434px)] aspect-[434/480]"
                  : "w-[clamp(240px,70vw,320px)] aspect-[320/376] mt-8"
              }`}
            >
              {/* Image */}
              <Image
                src={video.image}
                alt={video.title}
                fill
                quality={100}
                className="rounded-lg object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 rounded-lg bg-black/30" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center">
                  ▶
                </div>
              </div>

              {/* Title bottom */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-medium">{video.title}</p>
                <span className="mt-2 block text-xs text-white/80">
                  Watch video
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Podcast Buttons */}
      <div className="mt-20 flex flex-wrap items-center justify-center gap-10">
        {/* Google Podcast */}
        <div className="rounded-full bg-white px-6 py-3 shadow">
          <a href="#" className="relative block w-[160px] h-[48px]">
            <Image
              src="/images/google-podcast.png"
              alt="Google Podcasts"
              fill
              className="object-contain"
            />
          </a>
        </div>

        {/* Apple Podcast */}
        <div className="rounded-full bg-white px-6 py-3 shadow">
          <a href="#" className="relative block w-[160px] h-[48px]">
            <Image
              src="/images/apple-podcast.png"
              alt="Apple Podcasts"
              fill
              className="object-contain"
            />
          </a>
        </div>

        {/* Spotify */}
        <div className="rounded-full bg-white px-6 py-3 shadow">
          {" "}
          <a href="#" className="relative block w-[160px] h-[48px]">
            <Image
              src="/images/spotify.png"
              alt="Spotify"
              fill
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
