'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
          alt="Luxury Beauty Salon"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/30 backdrop-blur-sm mb-6"
          >
            <Star className="w-4 h-4 fill-[#c5a059]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">10+ Years of Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-tight mb-6"
          >
            Enhancing Your <span className="italic font-normal text-[#c5a059]">Beauty</span> with Expertise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-stone-400 mb-10 max-w-xl font-light"
          >
            At Apsaras Hi-Tech Beauty Parlour & Spa, we combine modern techniques 
            with personalized care to reveal your naturally radiant self.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="bg-[#c5a059] text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 border-2 border-[#c5a059] hover:bg-transparent hover:text-[#c5a059] transition-all transform hover:scale-105"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#online-booking"
              className="bg-white/5 text-white backdrop-blur-md px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 border border-white/20 hover:bg-white/20 transition-all"
            >
              Book Online
            </a>
          </motion.div>
        </div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute bottom-10 right-10 hidden lg:flex items-center gap-6 text-white/50">
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-widest font-bold">Location</p>
          <p className="text-xs">Kannur, Kerala</p>
        </div>
        <div className="h-0.5 w-12 bg-white/20"></div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-widest font-bold">Hours</p>
          <p className="text-xs">9:00 AM – 6:00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
