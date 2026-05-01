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
    { name: 'Locations', href: '#locations' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#f5f2ed]/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="bg-amber-500/10 p-2 rounded-full">
              <Sparkles className="w-6 h-6 text-amber-600" />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight text-stone-900">APSARAS</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium text-stone-600 hover:text-amber-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/9447531988"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-900 text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-stone-800 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-900 hover:text-amber-600 focus:outline-none"
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
            className="md:hidden bg-white border-b border-stone-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors border-b border-stone-50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="https://wa.me/9447531988"
                  className="w-full bg-amber-600 text-white px-6 py-3 rounded-full text-center font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Consult
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
