import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { FloatingBlob } from './components/FloatingBlob'
import { Navbar } from "./components/Navbar";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import profilePic from './images/profile_pic_8x.jpeg'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Minh Ha",
  description: "My journey, learnings, and projects in tech",
  authors: [{ name: "Minh Ha", url: "https://minhified.codes" }],
  openGraph: {
    title: "Minh Ha",
    description: "My journey, learnings, and projects in tech",
    images: profilePic.src,
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script>
        {

          // <!-- Hotjar Tracking Code for https://minhified.codes -->
          `
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:5258342,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `
        }
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}
      >
        <ToastContainer theme="dark" />
        <Navbar />
        <Analytics />
        <SpeedInsights />

        <div className="relative">
          <FloatingBlob />
          <div className="relative">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
