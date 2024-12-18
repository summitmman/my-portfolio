import type { Metadata } from "next";
import { Parkinsans, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import ThemeSelector from '@/components/ThemeSelector';
import "./globals.css";

const headerFont = Parkinsans({
  variable: "--font-header",
  subsets: ["latin"],
});

const defaultFont = JetBrains_Mono({
  variable: "--font-default",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sumit Man | Software Developer",
  description: "I am a software developer passionate about coding and creating experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headerFont.variable} ${defaultFont.variable} antialiased`}
      >
        <Header />
        <ThemeSelector />
        {children}  
        <footer className="my-container text-center text-sm p-10 default-color">
          Built with Next.js and TailwindCSS
        </footer>
      </body>
    </html>
  );
}
