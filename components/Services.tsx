'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Scissors, Sparkles, Smile, Droplets, User, Flame } from 'lucide-react';

const Services = () => {
  const [activeCategory, setActiveCategory] = React.useState('Threading');

  const categories = [
    { id: 'Threading', icon: <Scissors className="w-5 h-5" /> },
    { id: 'Clean Up', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'Facials', icon: <Smile className="w-5 h-5" /> },
    { id: 'Shahnaz', icon: <User className="w-5 h-5" /> },
    { id: 'Hair Cut', icon: <Scissors className="w-5 h-5" /> },
    { id: 'Hair Care', icon: <Droplets className="w-5 h-5" /> },
    { id: 'Waxing', icon: <Flame className="w-5 h-5" /> },
  ];

  const serviceData: Record<string, { name: string; price: string }[]> = {
    'Threading': [
      { name: 'Threading', price: '₹50' },
    ],
    'Clean Up': [
      { name: 'Clean Up Normal', price: '₹450' },
      { name: 'Veg Peel Clean Up', price: '₹550' },
      { name: 'Veg Peel Shahnaz', price: '₹700' },
      { name: 'De-Tan with Clean Up', price: '₹750' },
      { name: 'Bleach with Clean Up', price: '₹750' },
      { name: 'Bleach', price: '₹400' },
    ],
    'Facials': [
      { name: 'Normal Facial', price: '₹550' },
      { name: 'Orange / Papaya Facial', price: '₹900' },
      { name: 'Charcoal / Glow Facial', price: '₹1100' },
      { name: 'Whitening Facial', price: '₹1300' },
      { name: 'Silver Facial', price: '₹1500' },
      { name: 'Glutathione / Milk Whitening', price: '₹1800' },
      { name: 'Pearl / Collagen Facial', price: '₹2000' },
      { name: 'Vitamin / Kumkumadi', price: '₹2200 - ₹2500' },
      { name: 'Gold / Bridal / Ozone', price: '₹2500' },
      { name: 'Derma / Diamond / Moroccan', price: '₹3500' },
      { name: 'Korean Facial', price: '₹4500' },
      { name: 'Hydra Facial', price: '₹2500 – ₹5000' },
    ],
    'Shahnaz': [
      { name: 'Normal Shahnaz', price: '₹1300' },
      { name: 'Shahnaz Flower', price: '₹1500' },
      { name: 'Shahnaz Pearl', price: '₹2800' },
      { name: 'Shahnaz Gold', price: '₹3000' },
      { name: 'Shahnaz Platinum', price: '₹3500' },
      { name: 'Shahnaz Diamond', price: '₹4000' },
    ],
    'Hair Cut': [
      { name: 'Normal / Straight', price: '₹100' },
      { name: 'U Cut / V Cut', price: '₹300' },
      { name: 'Step Cut with Wash', price: '₹700' },
      { name: 'Layer / Reverse / Butterfly', price: '₹700' },
      { name: 'Wolf / Feather Cut', price: '₹700' },
      { name: 'Baby Normal / Mushroom', price: '₹100' },
      { name: 'Dora Cut', price: '₹150' },
      { name: 'Apple / Boy Cut', price: '₹250' },
    ],
    'Hair Care': [
      { name: 'Blow Dry', price: '₹400' },
      { name: 'Henna', price: '₹500' },
      { name: 'Hot Oil Massage', price: '₹600' },
      { name: 'Hot Oil with Henna', price: '₹750' },
      { name: 'Dandruff (Ayurveda)', price: '₹750' },
      { name: 'Hair Spa', price: '₹800 – ₹2500' },
      { name: 'Keratin / Smoothening', price: '₹5000' },
      { name: 'Botox / Nanoplastia', price: '₹7000' },
    ],
    'Waxing': [
      { name: 'Under Arm', price: '₹250' },
      { name: 'Face Wax', price: '₹400' },
      { name: 'Full Arm', price: '₹600' },
      { name: 'Full Leg', price: '₹1000' },
      { name: 'Full Body', price: '₹2500' },
    ],
  };

  return (
    <section id="services" className="py-24 bg-[#0a0909]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a059] mb-4">Our Menu</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
            Curated <span className="italic text-[#c5a059]">Services</span>
          </h3>
          <p className="text-stone-500 font-light">
            Each service is delivered with precision using advanced techniques and premium products. 
            Prices may vary based on hair length and complexity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border ${
                activeCategory === cat.id
                  ? 'bg-[#c5a059] text-black border-[#c5a059] shadow-lg scale-105'
                  : 'bg-white/5 text-stone-400 border-white/10 hover:border-[#c5a059]/40'
              }`}
            >
              {cat.icon}
              {cat.id}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[#121010] rounded-[2rem] p-8 md:p-12 shadow-2xl border border-white/5"
          >
            <h4 className="text-3xl font-serif font-light text-white mb-10 border-b border-white/5 pb-6 flex items-center justify-between">
              {activeCategory}
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#c5a059] font-bold">Premium Care</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {serviceData[activeCategory]?.map((service, index) => (
                <div key={index} className="flex justify-between items-end group">
                  <div className="flex-1">
                    <p className="text-stone-300 font-light group-hover:text-[#c5a059] transition-colors">
                      {service.name}
                    </p>
                    <div className="border-b border-dotted border-white/10 w-full mb-1"></div>
                  </div>
                  <span className="text-[#c5a059] font-serif font-bold ml-4 whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-[#c5a059]/5 p-6 rounded-2xl border border-[#c5a059]/10 flex items-center justify-between">
              <p className="text-sm text-stone-500 italic">
                * Advance booking recommended for bridal makeup and special treatments.
              </p>
              <ChevronRight className="w-5 h-5 text-[#c5a059]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
