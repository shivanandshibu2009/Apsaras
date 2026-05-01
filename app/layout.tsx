import type {Metadata} from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Apsaras Hi-Tech Beauty Parlour & Spa | Enhancing Your Beauty',
  description: 'Professional beauty and hair services with over 10 years of expertise. Visit us in Kannur for premium care.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-stone-900 bg-[#f5f2ed]">
        {children}
      </body>
    </html>
  );
}
