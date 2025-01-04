"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/home" },
    { name: "Project", href: "/project" },
    { name: "Skill", href: "/skill" },
    { name: "Achievement", href: "/achievement" },
    { name: "Experience", href: "/experience" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 pt-4 pb-8 md:pt-0 md:pb-0">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/home" className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dhf1recqk/image/upload/v1721361313/usmasmat8xyajcmi5uiy.png"
            alt="Logo Taufik Nurrohman"
            width={35}
            height={35}
          />
        </Link>

        <button
          className="lg:hidden flex items-center text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <ul className="hidden lg:flex">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative group min-w-[100px] text-center"
            >
              <Link
                href={item.href}
                className="block py-6 px-6 box-border transition-all font-bold"
              >
                {item.name}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-yellow-500 group-hover:w-full transition-all"></span>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="lg:hidden flex flex-col space-y-4 mt-4">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="text-center py-2 border-b border-gray-700"
            >
              <Link
                href={item.href}
                className="block transition-all font-bold"
                onClick={() => setIsOpen(false)} // Close menu after click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
