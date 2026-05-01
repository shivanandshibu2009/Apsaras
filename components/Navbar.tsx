'use client';

import React from 'react';
import { Sparkles, Phone, Instagram, Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Booking', href: '#booking' },
    { name: 'Payment', href: '#payment' },
    { name: 'Locations', href: '#locations' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#121010]/80 backdrop-blur-md border-b border-[#c5a059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <span className="text-lg md:text-xl font-serif font-bold tracking-[0.2em] text-[#c5a059] uppercase leading-none">
              Apsaras <span className="text-[10px] md:text-xs block md:inline font-sans font-light tracking-[0.3em] opacity-80">Hi-Tech Beauty Parlour</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.2em] font-medium text-stone-400 hover:text-[#c5a059] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#online-booking"
              className="bg-[#c5a059] text-black px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-[#d4af37] transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#c5a059] focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#121010] border-b border-[#c5a059]/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-sm font-medium text-stone-400 hover:text-[#c5a059] transition-colors border-b border-white/5 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#online-booking"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[#c5a059] text-black px-6 py-3 rounded-full text-center font-bold flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Online
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
