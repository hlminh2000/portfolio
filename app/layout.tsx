import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { FloatingBlob } from './components/FloatingBlob'
import { Navbar } from "./components/Navbar";
import { Metadata } from "next";
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
  description: "My journey, learnings, and projects",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}
      >
        <ToastContainer theme="dark" />
        <Navbar />

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
