"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-brand-light"
      style={{
        backgroundImage: "url('/images/pattern.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "600px",
        backgroundPosition: "left top",
      }}
    >
      {/* min-h-[600px] */}
      <div className="relative grid min-h-[calc(100vh-200px)] md:grid-cols-2">
        {/* Left Content */}
        <div className="flex items-center px-6 py-16 md:px-20">
          <div className="max-w-xl space-y-6">
            <h1 className="font-heading text-4xl leading-tight text-gray-900 md:text-5xl">
              Understanding Islam
            </h1>

            <h2 className="font-heading text-3xl text-brand-secondary md:text-4xl">
              Where Faith Meets Reason
            </h2>

            <p className="text-gray-600">
              Discover the Beauty of Islam, Knowledge and Truth
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex w-full max-w-sm items-center rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm">
                <input
                  type="text"
                  placeholder="Search what you need..."
                  className="w-full bg-transparent text-sm outline-none"
                />
                <span className="ml-2 text-gray-500">🔍</span>
              </div>

              <button className="rounded-full bg-brand-secondary px-8 py-3 text-sm font-medium text-white transition hover:opacity-90">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] md:h-auto">
          <Image
            src="/images/hero-mosque.png"
            alt="Islamic Mosque"
            fill
            priority
            className="object-cover"
          />

          {/* Smooth blending gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-light via-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
