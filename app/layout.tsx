import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import logo from "../public/logo-Picsart-BackgroundRemover.jpg"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaming Agency",
  description: "Fullstack solution for gaming and web3",
  icons: {
    icon: "/logo-Picsart-BackgroundRemover.jpg",
  },
  openGraph: {
    title: "Gaming Agency",
    description: "Fullstack solution for gaming and web3",
    images: [
      {
        url: "/logo-Picsart-BackgroundRemover.jpg",
        width: 1200,
        height: 630,
        alt: "Gaming Agency",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
