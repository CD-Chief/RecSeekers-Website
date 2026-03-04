import type { Metadata } from "next";
import { Poppins, Quicksand, Rubik} from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";

// Font imports – available as CSS variables for Tailwind

// Body
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Headings (or just use rubik)
const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Display
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "RecSeekers",
  description: "Find your next opportunity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="snap-y snap-proximity">
      <body
        className={` ${poppins.variable} ${quicksand.variable} ${rubik.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
