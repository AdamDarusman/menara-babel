import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/SplashCursor";
import { AudioPlayer } from "@/components/AudioPlayer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Misteri Menara Babel",
  description: "Presentasi Interaktif Modern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased bg-black text-white selection:bg-amber-500 selection:text-white`}
      >
        <SplashCursor />
        <AudioPlayer />
        {children}
      </body>
    </html>
  );
}
