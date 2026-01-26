import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font imports – available as CSS variables for Tailwind
const geistSans = Geist({
  variable: "--font-geist-sans", // Maps to --font-sans in @theme
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // Maps to --font-mono in @theme
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Site",
  description: "Get started on this template",
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
