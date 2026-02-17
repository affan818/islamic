"use client";

import Image from "next/image";

const pillars = [
  {
    title: "Shahadah",
    description:
      "To believe that there is no god but Allah and that Muhammad is His Prophet.",
    image: "/images/shahada.png",
    icon: "/icons/pillar-icon.png",
  },
  {
    title: "Salah",
    description: "To perform the five daily prayers as a duty towards Allah.",
    image: "/images/salah.png",
    icon: "/icons/pillar-icon.png",
  },
  {
    title: "Fasting",
    description: "To fast during the month of Ramadan from dawn to sunset.",
    image: "/images/fasting.png",
    icon: "/icons/pillar-icon.png",
  },
  {
    title: "Zakat",
    description: "To give a portion of wealth to those in need as charity.",
    image: "/images/zakat.png",
    icon: "/icons/pillar-icon.png",
  },
  {
    title: "Hajj",
    description:
      "To perform the pilgrimage to Mecca at least once in a lifetime.",
    image: "/images/hajj.png",
    icon: "/icons/pillar-icon.png",
  },
];

export default function FivePillarsSection() {
  return (
    <section className="bg-brand-butter px-6 py-28 md:px-16">
      {/* Heading */}
      <div className="mb-20 max-w-3xl">
        <h2 className="font-heading text-[80px] md:text-[64px] text-gray-900">
          The Five Pillars of Islam
        </h2>

        <p className="mt-6 font-body text-[24px] text-gray-600">
          The fundamental acts of worship that form the foundation of Islamic
          belief, practice, and daily life.
        </p>
      </div>

      {/* Cards */}
      <div className="flex gap-10 overflow-x-auto scrollbar-hide md:grid md:grid-cols-5">
        {pillars.map((pillar, index) => (
          <div key={index} className="relative min-w-[220px] md:min-w-0">
            {/* PNG Arch Image */}
            <div className="relative shrink-0 w-[245px] aspect-[245/638]">
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                quality={100}
                className="object-contain"
              />

              {/* Circle Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[90px] h-[90px] rounded-full overflow-hidden">
                  <Image
                    src={pillar.icon}
                    alt="icon"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Text Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-body text-[24px] text-gray-300">
                {pillar.title}
              </p>

              <p className="font-body mt-2 text-[14px] leading-relaxed text-white/90">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
