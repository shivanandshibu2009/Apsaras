'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, Instagram, MapPin, Calendar, Clock } from 'lucide-react';

const Booking = () => {
  const steps = [
    {
      icon: <Phone className="w-8 h-8 text-white" />,
      title: "Call Us",
      desc: "Dial 9447531988 to speak directly and fix your appointment.",
      action: "tel:9447531988",
      btnText: "Call Now",
      color: "bg-blue-600"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "WhatsApp",
      desc: "Send your Name, Service, Date & Time to 9447531988.",
      action: "https://wa.me/9447531988",
      btnText: "Message Us",
      color: "bg-green-600"
    },
    {
      icon: <Instagram className="w-8 h-8 text-white" />,
      title: "Instagram",
      desc: "Send a DM to @apsaras_by_reshmashibu with booking details.",
      action: "https://instagram.com/apsaras_by_reshmashibu",
      btnText: "DM on Instagram",
      color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
    }
  ];

  return (
    <section id="booking" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-amber-600 mb-4">Reservations</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-light text-stone-900 mb-6">
            Book Your <span className="italic text-amber-600">Session</span>
          </h3>
          <p className="text-stone-500 font-light">
            Booking your beauty escape is simple and convenient. Choose your preferred way to reach us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-stone-50 p-8 rounded-[2.5rem] flex flex-col items-center text-center hover:shadow-xl transition-all border border-stone-100 group"
            >
              <div className={`${step.color} p-5 rounded-2xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <h4 className="text-2xl font-serif font-bold text-stone-900 mb-4">{step.title}</h4>
              <p className="text-stone-500 font-light mb-8 h-18">{step.desc}</p>
              <a
                href={step.action}
                target={step.btnText.includes('Call') ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest bg-stone-900 text-white hover:bg-amber-600 transition-colors"
              >
                {step.btnText}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-stone-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-3xl font-serif font-light mb-6">Operational Hours</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Calendar className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Days</p>
                    <p className="font-medium">Monday — Saturday</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Time</p>
                    <p className="font-medium">9:00 AM – 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-red-400">
                  <div className="bg-red-400/10 p-2 rounded-lg">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold">Sunday</p>
                    <p className="font-medium">Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <h5 className="text-xl font-serif mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                Note to Clients
              </h5>
              <p className="text-stone-300 font-light leading-relaxed">
                Walk-ins are welcome for simple services. However, advance booking is 
                <span className="text-white font-medium"> highly recommended</span> for bridal makeup, complex hair treatments, 
                and peak weekend hours.
              </p>
            </div>
          </div>
          {/* Abstract pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

export default Booking;
