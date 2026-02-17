"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Container from "@/components/shared/Container";
import Sidebar from "./Sidebar";
import CountryDropdown from "./CountryDropdown";

export default function TopBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const topLine = useRef<HTMLSpanElement>(null);
  const middleLine = useRef<HTMLSpanElement>(null);
  const bottomLine = useRef<HTMLSpanElement>(null);

  // Animate hamburger to X
  useEffect(() => {
    if (isSidebarOpen) {
      gsap.to(topLine.current, { y: 6, rotate: 45, duration: 0.3 });
      gsap.to(middleLine.current, { opacity: 0, duration: 0.2 });
      gsap.to(bottomLine.current, { y: -6, rotate: -45, duration: 0.3 });
    } else {
      gsap.to(topLine.current, { y: 0, rotate: 0, duration: 0.3 });
      gsap.to(middleLine.current, { opacity: 1, duration: 0.2 });
      gsap.to(bottomLine.current, { y: 0, rotate: 0, duration: 0.3 });
    }
  }, [isSidebarOpen]);

  return (
    <>
      <div className="h-[120px] bg-white border-b border-gray-200">
        <Container className="flex h-full items-center justify-between">
          {/* Toggle */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-600 bg-transparent"
          >
            <div className="relative flex h-5 w-6 flex-col justify-between">
              <span ref={topLine} className="block h-0.5 w-full bg-gray-800" />
              <span
                ref={middleLine}
                className="block h-0.5 w-full bg-gray-800"
              />
              <span
                ref={bottomLine}
                className="block h-0.5 w-full bg-gray-800"
              />
            </div>
          </button>

          {/* Logo */}
          <div className="text-3xl font-heading text-brand-primary">
            Islamic
          </div>

          <div className="flex items-center gap-4">
            <CountryDropdown />
            <button className="rounded-full border border-gray-400 px-6 py-2 text-sm">
              Sign In
            </button>
          </div>
        </Container>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
