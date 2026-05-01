'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Sparkles, Clock } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: "Expertise",
      desc: "Over 10 years of professional beauty and hair experience."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      title: "Hi-Tech",
      desc: "Using modern techniques and high-quality premium products."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-amber-600" />,
      title: "Hygiene",
      desc: "Committed to delivering care in a clean and safe environment."
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      title: "Personalized",
      desc: "Care tailored to enhance your unique natural beauty."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop"
                alt="Beauty Care"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -right-10 bg-amber-600 text-white p-10 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center shadow-2xl border-8 border-white z-10">
              <span className="text-3xl font-serif font-bold">10+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Years of Trust</span>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-amber-600 mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-light text-stone-900 mb-8">
                The Path to <span className="italic text-amber-600">Perfection</span>
              </h3>
              <p className="text-lg text-stone-600 font-light leading-relaxed mb-10">
                With over a decade of dedicated service, Apsaras Hi-Tech Beauty Parlour & Spa has become a trusted name in Kannur. 
                We specialize in blending advanced technology with traditional care, ensuring every treatment 
                reveals your most radiant self. Our team is passionate about delivering premium hair and 
                beauty solutions in a relaxing, hygienic sanctuary.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-serif font-bold text-lg text-stone-900">{item.title}</h4>
                  <p className="text-sm text-stone-500 font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
