"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sidebarRef.current) return;

    if (isOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.fromTo(
        linksRef.current?.children,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
          delay: 0.2,
          ease: "power3.out",
        },
      );
    } else {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.35,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />
      )}

      <aside
        ref={sidebarRef}
        className="fixed left-0 top-0 z-50 h-full w-72 -translate-x-full bg-white p-6 shadow-xl"
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-lg font-heading text-brand-primary">Menu</h2>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300"
          >
            ×
          </button>
        </div>

        <nav ref={linksRef} className="flex flex-col gap-5 text-gray-800">
          <Link href="/ask-scholar" onClick={onClose}>
            Ask a Scholar
          </Link>
          <Link href="/answering-criticism" onClick={onClose}>
            Answering Criticism
          </Link>
          <Link href="/tafsir" onClick={onClose}>
            Tafsir
          </Link>
          <Link href="/beauty-of-islam" onClick={onClose}>
            The Beauty of Islam
          </Link>
          <Link href="/prophet-seerah" onClick={onClose}>
            Prophet Seerah
          </Link>
          <Link href="/islamic-history" onClick={onClose}>
            Islamic History
          </Link>
        </nav>
      </aside>
    </>
  );
}
