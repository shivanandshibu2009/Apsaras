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
      mapUrl: "https://www.google.com/maps/search/Apsaras+Chakkarakal+Kannur"
    },
    {
      id: "2nd Branch",
      title: "Apsaras - Eachur",
      address: "BPR Arcade, Above Canara Bank, Eachur, Kannur",
      landmark: "Above Canara Bank",
      mapUrl: "https://www.google.com/maps/search/Apsaras+Eachur+Kannur"
    }
  ];

  return (
    <section id="locations" className="py-24 bg-[#f5f2ed]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-amber-600 mb-4">Our Presence</h2>
            <h3 className="text-4xl font-serif font-light text-stone-900 mb-8">
              Visit Our <span className="italic text-amber-600">Branches</span>
            </h3>
            <p className="text-stone-500 font-light mb-10">
              Conveniently located in Kannur to serve you better. Choose the branch closest to you and walk in for a consultation.
            </p>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
              <div className="flex items-center gap-4 text-stone-900">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Direct Inquiries</p>
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
                className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-stone-900 text-white px-4 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">
                    {branch.id}
                  </div>
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {branch.title}
                </h4>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3 text-stone-600">
                    <Building2 className="w-5 h-5 shrink-0 text-stone-400" />
                    <p className="text-sm font-light leading-relaxed">{branch.address}</p>
                  </div>
                  <div className="flex gap-3 text-stone-600">
                    <MapIcon className="w-5 h-5 shrink-0 text-stone-400" />
                    <p className="text-sm font-light">Landmark: {branch.landmark}</p>
                  </div>
                </div>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-stone-900 font-bold text-xs uppercase tracking-widest hover:text-amber-600 transition-all underline underline-offset-8"
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
