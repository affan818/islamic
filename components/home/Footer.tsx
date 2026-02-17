"use client";

import Link from "next/link";
import Image from "next/image";

const footerData = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Donate", href: "#" },
  ],
  learnMore: [
    { label: "Our Library", href: "#" },
    { label: "Articles", href: "#" },
    { label: "Podcasts", href: "#" },
    { label: "FAQs", href: "#" },
  ],
  contact: [
    "Mon - Sat",
    "9.00 am - 6.00 pm",
    "islamic@gmail.com",
    "Jamia Mosque",
  ],
  stats: [
    { value: "10,542+", label: "Resources Verified" },
    { value: "25,000+", label: "Key Top Discussions" },
    { value: "150+", label: "Scholars and Researches" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-softGreen px-6 py-20 md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h4 className="font-body text-[24px] text-gray-900 mb-6">
              Company
            </h4>
            <ul className="font-heading space-y-3 text-[16px] text-gray-600">
              {footerData.company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-brand-primary transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h4 className="font-body text-[24px] text-gray-900 mb-6">
              Learn More
            </h4>
            <ul className="font-heading space-y-3 text-[16px] text-gray-600">
              {footerData.learnMore.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-brand-primary transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[24px] text-gray-900 mb-6">
              Contact Us
            </h4>
            <ul className="font-heading space-y-3 text-[16px] text-gray-600">
              {footerData.contact.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-body text-[24px] text-gray-900 mb-6">
              Subscribe
            </h4>

            <div className="flex items-center rounded-full bg-white p-1 shadow-sm">
              <input
                type="email"
                placeholder="Write your Email"
                className="flex-1 rounded-full bg-transparent px-4 py-2 text-sm outline-none"
              />
              <button className="rounded-full bg-brand-primary px-6 py-2 text-sm text-white transition hover:opacity-90">
                Subscribe
              </button>
            </div>

            <p className="mt-4 text-[14px] text-gray-600">
              Subscribe to our newsletter to receive the latest updates and
              articles.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-10 md:grid-cols-3 text-center md:text-left">
          {footerData.stats.map((stat, index) => (
            <div key={index}>
              <h5 className="text-xl font-semibold text-brand-primary">
                {stat.value}
              </h5>
              <p className="text-[16px] text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-300" />

        {/* Bottom Row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-[14px] text-gray-600">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/demo-logo.png"
              alt="Logo"
              width={40}
              height={40}
            />
            <p>Religion & Reasons © Copyright 2025, All Rights Reserved</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#" className="hover:text-brand-primary transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-primary transition">
              Terms and Conditions
            </Link>

            <div className="flex items-center gap-2 cursor-pointer">
              <span>English</span>
              <span>
                {" "}
                {/* Chevron Down Icon */}
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
