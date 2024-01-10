import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

import type { Metadata } from "next";
import { Lora, Alice, Bitter, Inter, Roboto, Playfair_Display } from 'next/font/google';
import Script from "next/script";

const bitter = Bitter({ subsets: ["latin"], variable:'--font-bitter' });
const inter = Inter({ subsets: ["latin"], variable:'--font-inter'});
const alice = Alice({ subsets:["latin"], variable:'--font-alice', weight:'400'});
const roboto = Roboto({ subsets:["latin"], variable:'--font-roboto', weight:'400'});
const playfair = Playfair_Display({ subsets:["latin"], variable:'--font-playfair', weight:'400'});
const lora = Lora({ subsets:["latin"], variable:'--font-lora', weight:'400'});


export const metadata: Metadata = {
  title: "Ornella Bonachera | FrontEnd Developer",
  description: "Ornella Bonachera Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="en">

      <body className={`${bitter.variable} ${lora.variable} ${playfair.variable} ${inter.variable} ${alice.variable} ${roboto.variable}`}>{children}</body>
   
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossOrigin="anonymous" />

      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous" />

      <Script src='https://kit.fontawesome.com/69d1a241db.js'
              crossOrigin='anonymous'/>
    </html>
  );
}