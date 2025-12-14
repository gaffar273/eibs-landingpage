import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "EIBS 2026 | East-India Blockchain Summit",
  description: "The premier blockchain conference at IIT Kharagpur organized by Kharagpur Blockchain Society. Join 500+ innovators, developers, and thought leaders for the future of Web3.",
  keywords: "blockchain, summit, conference, Web3, crypto, DeFi, NFT, IIT Kharagpur, KBS, hackathon",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/kbs-logo.png", type: "image/png" }
    ],
    apple: "/kbs-logo.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "East-India Blockchain Summit 2026",
    description: "The premier blockchain conference at IIT Kharagpur",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#050a04] text-white`}>
        {children}
      </body>
    </html>
  );
}
