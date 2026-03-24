import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const modern = Inter({ subsets: ["latin"], variable: "--font-modern", weight: ["300", "400", "500", "600"] });
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"] });
const script = Great_Vibes({ subsets: ["latin"], variable: "--font-script", weight: "400" });

export const metadata: Metadata = {
  title: "Clement & Esther | Wedding RSVP",
  description: "Together with love, we invite you to celebrate our wedding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${modern.variable} ${display.variable} ${script.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
