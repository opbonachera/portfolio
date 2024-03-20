import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

import type { Metadata } from "next";
import { Lato, Bitter, Merriweather} from 'next/font/google';
import Script from "next/script";

const lato = Lato({ subsets: ["latin"], weight:'300', variable:'--font-lato' });
const merriweather = Merriweather({ subsets: ["latin"], weight:'400', variable:'--font-merriweather'})

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

      <body className={`${merriweather.variable} ${lato.variable}`}>{children}</body>
   
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossOrigin="anonymous" />
      <Script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></Script>
      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous" />

      <Script src='https://kit.fontawesome.com/69d1a241db.js'
              crossOrigin='anonymous'/>
    </html>
  );
}