'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Booking from '@/components/Booking';
import Payment from '@/components/Payment';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Booking />
      <Payment />
      <Locations />
      <Footer />
    </main>
  );
}
