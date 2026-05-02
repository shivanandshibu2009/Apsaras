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
    time: '',
    paymentMethod: 'parlour'
  });

  const upiId = 'apsarashitechbeautyparlour-1@okhdfcbank';
  const parlourName = 'Apsaras Hi-Tech Beauty Parlour';

  const services = [
    { name: "Threading", price: "₹50", amount: 50 },
    { name: "Clean Up Normal", price: "₹450", amount: 450 },
    { name: "Veg Peel Clean Up", price: "₹550", amount: 550 },
    { name: "Normal Facial", price: "₹550", amount: 550 },
    { name: "Orange / Papaya Facial", price: "₹900", amount: 900 },
    { name: "Hydra Facial", price: "₹2500 – ₹5000", amount: 2500 },
    { name: "Gold / Bridal / Ozone", price: "₹2500", amount: 2500 },
    { name: "Derma / Diamond / Moroccan", price: "₹3500", amount: 3500 },
    { name: "Normal / Straight Hair Cut", price: "₹100", amount: 100 },
    { name: "Step Cut with Wash", price: "₹700", amount: 700 },
    { name: "Hair Spa", price: "₹800 – ₹2500", amount: 800 },
    { name: "Bridal Makeup", price: "Contact for Menu", amount: 0 },
    { name: "Keratin / Smoothening", price: "₹5000", amount: 5000 },
    { name: "Under Arm Waxing", price: "₹250", amount: 250 },
    { name: "Full Body Waxing", price: "₹2500", amount: 2500 },
  ];

  const getSelectedService = () => services.find(s => s.name === formData.service);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedService = getSelectedService();
    const priceText = selectedService ? `\n*Price:* ${selectedService.price}` : '';
    const paymentText = `\n*Payment Method:* ${formData.paymentMethod === 'online' ? 'Online Payment' : 'Pay at Parlour'}`;

    const message = `Hello Apsaras, I would like to book an appointment:
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service:* ${formData.service}${priceText}${paymentText}
*Date:* ${formData.date}
*Time:* ${formData.time}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/9447531988?text=${encodedMessage}`;
    
    if (formData.paymentMethod === 'online' && selectedService && selectedService.amount > 0) {
      window.location.href = upiUrl;
      // We can't really "wait" for payment to finish before whatsapp in a simple web app, 
      // so we might want to open whatsapp in a new tab or after a brief delay.
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);
    } else {
      window.open(whatsappUrl, '_blank');
    }
    
    setIsSubmitted(true);
  };

  const selectedService = getSelectedService();
  const upiUrl = selectedService && selectedService.amount > 0 
    ? `upi://pay?pa=${upiId}&pn=${encodeURIComponent(parlourName)}&am=${selectedService.amount}&cu=INR`
    : `upi://pay?pa=${upiId}&pn=${encodeURIComponent(parlourName)}&cu=INR`;

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
              
              {formData.service ? (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-black/10 p-6 rounded-[2rem] border border-black/5 mb-8"
                >
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-2">Current Selection</p>
                  <p className="text-xl font-serif mb-1">{formData.service}</p>
                  <p className="text-[#8b6b2e] font-bold text-2xl">{selectedService?.price}</p>
                  
                  {selectedService && selectedService.amount > 0 && (
                    <div className="mt-6 space-y-3">
                      <a
                        href={upiUrl}
                        className="w-full bg-black text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-stone-900 transition-all text-[10px] uppercase tracking-widest"
                      >
                        <Sparkles className="w-3 h-3" /> Pay in Parlour UPI
                      </a>
                      <p className="text-[9px] text-center opacity-60 uppercase tracking-tighter">
                        Scan or click to pay {selectedService.price}
                      </p>
                    </div>
                  )}
                </motion.div>
              ) : (
                <p className="text-sm font-light mb-8 opacity-80">
                  Please provide your details below. We are open from 9 AM to 6 PM. Appointments requested outside these hours will be handled the next business morning.
                </p>
              )}
              
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
                      <div className="relative">
                        <select
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#c5a059] outline-none transition-all appearance-none"
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                        >
                          <option value="" className="bg-[#121010]">Select Service</option>
                          {services.map(s => (
                            <option key={s.name} value={s.name} className="bg-[#121010]">
                              {s.name}
                            </option>
                          ))}
                        </select>
                        {formData.service && (
                          <div className="absolute right-10 top-1/2 -translate-y-1/2">
                            <span className="bg-[#c5a059]/20 text-[#c5a059] px-3 py-1 rounded-full text-[10px] font-bold">
                              {services.find(s => s.name === formData.service)?.price}
                            </span>
                          </div>
                        )}
                      </div>
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

                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#c5a059]/60 flex items-center gap-2">
                      <Sparkles className="w-3 h-3" /> Payment Method
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, paymentMethod: 'online'})}
                        className={`flex items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
                          formData.paymentMethod === 'online' 
                            ? 'bg-[#c5a059] border-[#c5a059] text-black' 
                            : 'bg-white/5 border-white/10 text-stone-400 hover:border-[#c5a059]/50'
                        }`}
                      >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-[10px] uppercase font-bold tracking-widest">Online Payment</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, paymentMethod: 'parlour'})}
                        className={`flex items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
                          formData.paymentMethod === 'parlour' 
                            ? 'bg-[#c5a059] border-[#c5a059] text-black' 
                            : 'bg-white/5 border-white/10 text-stone-400 hover:border-[#c5a059]/50'
                        }`}
                      >
                        <User className="w-4 h-4" />
                        <span className="text-[10px] uppercase font-bold tracking-widest">Pay at Parlour</span>
                      </button>
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
                  <h4 className="text-2xl font-serif text-white mb-2">Booking Requested!</h4>
                  <p className="text-stone-400 font-light mb-8 max-w-xs">
                    Please complete your payment below to confirm your session.
                  </p>

                  <div className="w-full space-y-4 mb-10">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-stone-500 text-xs uppercase tracking-widest">Service</span>
                        <span className="text-white font-bold">{formData.service}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#c5a059] text-xs uppercase tracking-widest font-bold">Total Amount</span>
                        <span className="text-[#c5a059] text-xl font-bold">{services.find(s => s.name === formData.service)?.price}</span>
                      </div>
                    </div>

                    <a
                      href={upiUrl}
                      className="w-full bg-[#c5a059] text-black font-bold py-5 rounded-full flex items-center justify-center gap-3 hover:bg-[#d4af37] transition-all transform hover:scale-[1.02] active:scale-95 group shadow-lg shadow-[#c5a059]/10"
                    >
                      <Sparkles className="w-5 h-5" />
                      <span className="uppercase tracking-widest text-sm">Pay in Parlour UPI</span>
                    </a>

                    <a
                      href={`https://wa.me/9447531988?text=Hello%20Apsaras%2C%20I%20have%20completed%20the%20UPI%20payment%20for%20my%20${encodeURIComponent(formData.service)}%20service.%20Attached%20is%20the%20screenshot.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] text-white font-bold py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all transform hover:scale-[1.02] active:scale-95 group shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      <span className="uppercase tracking-widest text-[10px]">Send Screenshot to WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-stone-500 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Back to Form
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
