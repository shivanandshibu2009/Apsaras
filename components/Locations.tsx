'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Building2, Map as MapIcon } from 'lucide-react';

const Locations = () => {
  const branches = [
    {
      id: "1st Branch",
      title: "Apsaras - Chakkarakal",
      address: "Chakkarakal Bus Stand, Opposite Petrol Pump, Chakkarakal, Kannur",
      landmark: "Opposite Petrol Pump",
      mapUrl: "https://maps.app.goo.gl/sY3Nd3H325xLVoBo7"
    },
    {
      id: "2nd Branch",
      title: "Apsaras - Eachur",
      address: "BPR Arcade, Above Canara Bank, Eachur, Kannur",
      landmark: "Above Canara Bank",
      mapUrl: "https://maps.app.goo.gl/rjKqodom9bDD8DWS9?g_st=ac"
    }
  ];

  return (
    <section id="locations" className="py-24 bg-[#0a0909]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a059] mb-4">Our Presence</h2>
            <h3 className="text-4xl font-serif font-light text-white mb-8">
              Visit Our <span className="italic text-[#c5a059]">Branches</span>
            </h3>
            <p className="text-stone-500 font-light mb-10">
              Conveniently located in Kannur to serve you better. Choose the branch closest to you and walk in for a consultation.
            </p>
            <div className="bg-white/5 p-8 rounded-3xl shadow-sm border border-white/5">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-[#c5a059]/10 p-3 rounded-full border border-[#c5a059]/20">
                  <Phone className="w-5 h-5 text-[#c5a059]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#c5a059]/40">Direct Inquiries</p>
                  <p className="font-serif font-bold text-lg">9447531988</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#121010] rounded-3xl p-8 border border-white/5 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-[#c5a059] text-black px-4 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">
                    {branch.id}
                  </div>
                  <MapPin className="w-6 h-6 text-[#c5a059]" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#c5a059] transition-colors">
                  {branch.title}
                </h4>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3 text-stone-400">
                    <Building2 className="w-5 h-5 shrink-0 text-[#c5a059]/40" />
                    <p className="text-sm font-light leading-relaxed">{branch.address}</p>
                  </div>
                  <div className="flex gap-3 text-stone-400">
                    <MapIcon className="w-5 h-5 shrink-0 text-[#c5a059]/40" />
                    <p className="text-sm font-light">Landmark: {branch.landmark}</p>
                  </div>
                </div>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-widest hover:text-[#c5a059] transition-all underline underline-offset-8 decoration-[#c5a059]/20 hover:decoration-[#c5a059]"
                >
                  View on Google Maps
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
