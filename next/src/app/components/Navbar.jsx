"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import react from 'react';
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Service", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className=" bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-500">
          MyWebsite
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`hover:text-blue-400 transition ${
                  pathname === link.path
                    ? "text-blue-500 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block hover:text-blue-400 ${
                  pathname === link.path
                    ? "text-blue-500 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
