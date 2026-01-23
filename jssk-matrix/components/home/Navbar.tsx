"use client"; // REQUIRED: This tells Next.js this component uses interactivity (state)

import { useState } from 'react';
import { Menu, ArrowRight, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  // 1. State to track if mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel backdrop-blur-xl border-b-0 border-white/5">
      <div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-1.5 rounded-lg flex items-center justify-center">
            <Link href="/">
              <Image
                src="/logo.jpeg"
                alt="JSSK Matrix"
                width={70}
                height={30}
                className="object-contain"
              />
            </Link>
          </div>
          <Link href="/" className="font-semibold tracking-tight text-lg text-white transition-colors">
            JSSK MATRIX
          </Link>
        </div>
        
        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="/about" className="transition-colors hover:text-white">About</Link>
          <Link href="/products" className="transition-colors hover:text-white">Products</Link>
          <Link href="/solutions" className="transition-colors hover:text-white">Solutions</Link>
          <Link href="/quote" className="transition-colors hover:text-white">Quote</Link>
        </div>

        {/* Contact Button (Desktop) */}
        <Link href="/contact" className="hidden md:flex items-center gap-2 border px-4 py-2 rounded-full text-xs font-semibold transition-colors bg-white/10 border-white/5 text-white hover:bg-white/20">
          Contact Us
          <ArrowRight className="w-3 h-3" />
        </Link>
        
        {/* 2. Mobile Menu Button with Click Handler */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Toggles between Menu (3 lines) and X (Close) */}
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 3. Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-200">
          <Link 
            href="/about" 
            className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)} // Closes menu when clickedkkk
          >
            About
          </Link>
          <Link 
            href="/products" 
            className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link 
            href="/solutions" 
            className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </Link>
          <Link 
            href="/quote" 
            className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Quote
          </Link>
          
          <div className="h-px bg-white/10 my-2"></div>
          
          <Link 
            href="/contact" 
            className="flex items-center justify-between text-lg font-medium text-white"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </nav>
  );
}