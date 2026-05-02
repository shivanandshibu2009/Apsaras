'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, QrCode, ExternalLink, ShieldCheck, Wallet, Send } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const Payment = () => {
  const upiId = 'apsarashitechbeautyparlour-1@okhdfcbank';
  const name = 'Apsaras Hi-Tech Beauty Parlour';
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&cu=INR`;

  return (
    <section id="payment" className="py-24 bg-[#0a0909] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c5a059]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/20 text-[#c5a059] mb-4"
          >
            <Wallet className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-widest font-bold">Secure Transactions</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white mb-6"
          >
            Online <span className="italic text-[#c5a059]">Payment</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 max-w-2xl mx-auto font-light"
          >
            Scan the QR code below or click the button to pay securely via UPI. 
            We accept all major UPI apps like Google Pay, PhonePe, and Paytm.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* QR Code Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#121010] p-8 rounded-[2rem] border border-[#c5a059]/20 flex flex-col items-center justify-center space-y-6 shadow-2xl"
          >
            <div className="bg-white p-4 rounded-2xl shadow-inner">
              <QRCodeSVG 
                value={upiUrl} 
                size={200}
                level="H"
                includeMargin={true}
              />
            </div>
            <div className="text-center">
              <p className="text-stone-400 text-sm font-medium mb-1 uppercase tracking-widest text-[10px]">UPI ID</p>
              <p className="text-[#c5a059] font-mono font-bold break-all">{upiId}</p>
            </div>
          </motion.div>

          {/* Payment Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="bg-[#c5a059]/20 p-3 rounded-xl h-fit">
                  <ShieldCheck className="w-6 h-6 text-[#c5a059]" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Instant Confirmation</h4>
                  <p className="text-stone-500 text-sm font-light">Payment is tracked instantly. Please share a screenshot via WhatsApp for confirmation.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="bg-[#c5a059]/20 p-3 rounded-xl h-fit">
                  <QrCode className="w-6 h-6 text-[#c5a059]" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">All UPI Apps Supported</h4>
                  <p className="text-stone-500 text-sm font-light">Compatible with Google Pay, PhonePe, Paytm, BHIM, and more.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={upiUrl}
                className="w-full bg-[#c5a059] text-black font-bold py-5 px-8 rounded-full flex items-center justify-center gap-3 hover:bg-[#d4af37] transition-all transform hover:scale-[1.02] active:scale-95 group shadow-lg shadow-[#c5a059]/10"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="uppercase tracking-widest text-sm">Pay in Parlour UPI</span>
              </a>

              <a
                href="https://wa.me/9447531988?text=Hello%20Apsaras%2C%20I%20have%20completed%20the%20UPI%20payment%20for%20my%20service.%20Please%20find%20the%20screenshot%20attached."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all transform hover:scale-[1.02] active:scale-95 group shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span className="uppercase tracking-widest text-[10px]">Send Image to WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 opacity-50 grayscale contrast-125 pt-4">
              <CreditCard className="w-6 h-6 text-white" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">Secure Gateway</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
