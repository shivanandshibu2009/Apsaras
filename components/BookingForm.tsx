'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, Phone, Sparkles, Send, CheckCircle } from 'lucide-react';

const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const services = [
    "Threading", "Clean Up", "Facial (Gold/Diamond/Pearl)", "Hydra Facial",
    "Hair Cut", "Hair Spa", "Hair Smoothening/Keratin", "Manicure/Pedicure",
    "Waxing", "Bridal Makeup", "Pimple/Pigmentation Treatment"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello Apsaras, I would like to book an appointment:
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Date:* ${formData.date}
*Time:* ${formData.time}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/9447531988?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
  };

  return (
    <div id="online-booking" className="max-w-4xl mx-auto mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#121010] border border-[#c5a059]/20 rounded-[3rem] overflow-hidden shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Details Sidebar */}
          <div className="lg:col-span-2 bg-[#c5a059] p-8 md:p-12 text-black flex flex-col justify-between">
            <div>
              <h4 className="text-3xl font-serif font-bold mb-6">Booking Details</h4>
              <p className="text-sm font-light mb-8 opacity-80">
                Please provide your details below. We are open from 9 AM to 6 PM. Appointments requested outside these hours will be handled the next business morning.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-black/10 p-2 rounded-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Working Hours</p>
                    <p className="font-bold">9:00 AM – 6:00 PM</p>
                    <p className="text-[10px] text-red-800 font-bold uppercase mt-1">Closed on Sundays</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-black/10 p-2 rounded-lg">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Advance Booking</p>
                    <p className="font-bold">Recommended for Bridals</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-black/10">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6" />
                <span className="font-serif italic text-lg leading-none">Expertise & Care</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 p-8 md:p-12 bg-[#0a0909]">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => e.preventDefault()} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-[#c5a059]/60 flex items-center gap-2">
                        <User className="w-3 h-3" /> Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#c5a059] outline-none transition-all placeholder:text-stone-700"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-[#c5a059]/60 flex items-center gap-2">
                        <Phone className="w-3 h-3" /> Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="WhatsApp Number"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#c5a059] outline-none transition-all placeholder:text-stone-700"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#c5a059]/60 flex items-center gap-2">
                      <Sparkles className="w-3 h-3" /> Preferred Service
                    </label>
                    <select
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#c5a059] outline-none transition-all appearance-none"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="" className="bg-[#121010]">Select Service</option>
                      {services.map(s => (
                        <option key={s} value={s} className="bg-[#121010]">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-[#c5a059]/60 flex items-center gap-2">
                        <Calendar className="w-3 h-3" /> Preferred Date
                      </label>
                      <input
                        required
                        type="date"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#c5a059] outline-none transition-all [color-scheme:dark]"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-[#c5a059]/60 flex items-center gap-2">
                        <Clock className="w-3 h-3" /> Preferred Time (09:00 - 18:00)
                      </label>
                      <input
                        required
                        type="time"
                        min="09:00"
                        max="18:00"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#c5a059] outline-none transition-all [color-scheme:dark]"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="bg-[#c5a059] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#d4af37] transition-all transform hover:scale-[1.02] active:scale-95 group text-xs uppercase tracking-widest w-full"
                    >
                      Book via WhatsApp
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  <p className="text-[9px] text-center text-stone-600 uppercase tracking-widest">
                    Choose your preferred method to notify us about your session.
                  </p>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-serif text-white mb-2">Request Sent!</h4>
                  <p className="text-stone-400 font-light mb-8 max-w-xs">
                    Please finish sending the message in your WhatsApp app. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#c5a059] text-xs font-bold uppercase tracking-widest border-b border-[#c5a059]/30 pb-1"
                  >
                    Make Another Booking
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingForm;
