"use client";

import { useState } from "react";

const menuItems = [
  "Ask a Scholar",
  "Answering Criticism",
  "Tafsir",
  "The Beauty of Islam",
  "Prophet Seerah",
  "Islamic History",
];

export default function BottomNav() {
  const [activeItem, setActiveItem] = useState("Ask a Scholar");

  return (
    <nav className="h-[80px] bg-brand-light border-b border-gray-200">
      {/* Scroll wrapper */}
      <div className="flex h-full items-center overflow-x-auto scrollbar-hide">
        {/* Inner content*/}
        <div className="flex items-center gap-4 px-4 md:mx-auto md:max-w-7xl">
          {menuItems.map((item) => {
            const isActive = activeItem === item;

            return (
              <button
                key={item}
                onClick={() => setActiveItem(item)}
                className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-brand-primary text-white"
                    : "text-gray-800 hover:text-brand-primary"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
