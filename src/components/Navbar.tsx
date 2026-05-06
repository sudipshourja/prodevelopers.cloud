"use client";

import { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Cpu className="w-5 h-5 text-purple-500" />
          <span className="font-mono text-lg font-medium tracking-tight">
            prodevelopers<span className="text-neutral-500">.cloud</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#infrastructure"
            className="text-sm font-mono text-neutral-400 hover:text-neutral-50 transition-colors uppercase tracking-widest"
          >
            Infrastructure
          </a>
          <a
            href="#solutions"
            className="text-sm font-mono text-neutral-400 hover:text-neutral-50 transition-colors uppercase tracking-widest"
          >
            Solutions
          </a>
          <a
            href="#stack"
            className="text-sm font-mono text-neutral-400 hover:text-neutral-50 transition-colors uppercase tracking-widest"
          >
            Stack
          </a>
          <a
            href="mailto:hello@prodevelopers.tech"
            className="px-5 py-2 border border-neutral-800 rounded-sm text-sm font-mono text-neutral-50 hover:bg-neutral-900 transition-colors"
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-neutral-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-950 border-b border-neutral-900 px-4 py-8 space-y-6 flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-300">
          <a
            href="#infrastructure"
            className="text-lg font-mono text-neutral-400 uppercase tracking-widest"
            onClick={() => setMobileMenuOpen(false)}
          >
            Infrastructure
          </a>
          <a
            href="#solutions"
            className="text-lg font-mono text-neutral-400 uppercase tracking-widest"
            onClick={() => setMobileMenuOpen(false)}
          >
            Solutions
          </a>
          <a
            href="#stack"
            className="text-lg font-mono text-neutral-400 uppercase tracking-widest"
            onClick={() => setMobileMenuOpen(false)}
          >
            Stack
          </a>
          <a
            href="mailto:hello@prodevelopers.tech"
            className="w-full text-center py-4 bg-neutral-900 border border-neutral-800 rounded-sm font-mono text-neutral-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}
