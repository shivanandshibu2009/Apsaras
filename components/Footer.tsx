'use client';

import React from 'react';
import { Sparkles, Instagram, Facebook, Twitter, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0909] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-[0.2em] text-[#c5a059]">APSARAS</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 font-light">Hi-Tech Beauty Parlour</span>
            </div>
            <p className="text-stone-500 text-sm font-light leading-relaxed">
              Enhancing your natural beauty with over a decade of expertise and professional care in a luxurious environment.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/apsaras_by_reshmashibu" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-[#c5a059] hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/9447531988" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-green-600 transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-[#c5a059] mb-8 font-sans">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Booking', 'Payment', 'Locations'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-stone-500 hover:text-[#c5a059] transition-colors text-sm font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-[#c5a059] mb-8 font-sans">Find Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#c5a059]/40 shrink-0" />
                <div className="text-stone-500 text-xs font-light space-y-1">
                  <p className="font-bold text-white uppercase tracking-widest text-[10px]">Chakkarakal Branch</p>
                  <p>Bus Stand, Opposite Petrol Pump, Kannur</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#c5a059]/40 shrink-0" />
                <div className="text-stone-500 text-xs font-light space-y-1">
                  <p className="font-bold text-white uppercase tracking-widest text-[10px]">Eachur Branch</p>
                  <p>BPR Arcade, Above Canara Bank, Eachur, Kannur</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-[#c5a059] mb-8 font-sans">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-3 group">
                <div className="bg-[#c5a059] p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-black" />
                </div>
                <a href="tel:9447531988" className="text-white font-bold hover:text-[#c5a059] transition-colors">
                  9447531988
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-green-600/20 p-2 rounded-lg border border-green-600/30">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                </div>
                <p className="text-stone-500 text-sm font-light">Available on WhatsApp</p>
              </li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-[10px] uppercase font-bold tracking-[0.2em]">
            © 2024 Apsaras Hi-Tech Beauty Parlour & Spa. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-stone-500 text-[10px] uppercase font-bold hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone-500 text-[10px] uppercase font-bold hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
