'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-white">ClearMail</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <a href="#features" className="hover:text-indigo-300">Features</a>
          <a href="#pricing" className="hover:text-indigo-300">Pricing</a>
          <a href="#testimonials" className="hover:text-indigo-300">Testimonials</a>
          <a href="#contact" className="hover:text-indigo-300">Contact</a>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded-full shadow hover:bg-indigo-700 transition">
          Get Started
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 pb-4 space-y-4 flex flex-col">
          <a href="#features" className="hover:text-indigo-300" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#pricing" className="hover:text-indigo-300" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#testimonials" className="hover:text-indigo-300" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#contact" className="hover:text-indigo-300" onClick={() => setIsOpen(false)}>Contact</a>
          <button
            className="w-full bg-indigo-600 text-white px-5 py-2 rounded-full shadow hover:bg-indigo-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
