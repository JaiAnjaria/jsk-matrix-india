import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar"; // Import Navbar
import Footer from "@/components/home/Footer"; // Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JSSK Matrix India Pvt. Ltd.",
  description: "Leaders in Thermal & Lamination Film Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-indigo-500/30 selection:text-indigo-200 bg-black`}>
        
        {/* Navbar sits at the top of every page */}
        <Navbar />
        
        {/* {children} represents the unique content of the page you are on (Home, Contact, etc.) */}
        {children}

        {/* Footer sits at the bottom of every page */}
        <Footer />
        
      </body>
    </html>
  );
}