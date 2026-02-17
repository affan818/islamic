"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-brand-light"
      style={{
        backgroundImage: "url('/images/pattern.png')",
        backgroundRepeat: "no-repeat",
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
                  className="w-full bg-transparent text-sm outline-none text-gray-900"
                />
                <svg
                  width="14"
                  height="17"
                  viewBox="0 0 14 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.33325 3.5C9.33325 2.11929 8.21396 1 6.83325 1C5.45254 1 4.33325 2.11929 4.33325 3.5V7.66667C4.33325 9.04738 5.45254 10.1667 6.83325 10.1667C8.21396 10.1667 9.33325 9.04738 9.33325 7.66667V3.5Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.6667 7.66699C12.6667 8.43304 12.5158 9.19158 12.2226 9.89931C11.9295 10.607 11.4998 11.2501 10.9581 11.7918C10.4164 12.3335 9.77339 12.7631 9.06565 13.0563C8.35792 13.3494 7.59938 13.5003 6.83333 13.5003M6.83333 13.5003C6.06729 13.5003 5.30875 13.3494 4.60101 13.0563C3.89328 12.7631 3.25022 12.3335 2.70854 11.7918C2.16687 11.2501 1.73719 10.607 1.44404 9.89931C1.15088 9.19158 1 8.43304 1 7.66699M6.83333 13.5003V16.0003"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="ml-2 h-8 w-8 flex items-center justify-center text-gray-500 bg-brand-butter rounded-full">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5001 17.5003L13.9167 13.917"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
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
          <div className="absolute inset-0 bg-gradient-to-r from-brand-light via-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
