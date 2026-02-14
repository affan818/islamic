"use client";

import { useState } from "react";

export default function CountryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("🇮🇳");

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300"
      >
        {selectedCountry}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white shadow-md">
          {["🇮🇳", "🇸🇦", "🇺🇸"].map((flag) => (
            <button
              key={flag}
              onClick={() => {
                setSelectedCountry(flag);
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              {flag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
