import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PlayerProvider from "@/context/player-context";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YourTube",
  description: "YourTube is a clone web application of youtube.com",
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
        <PlayerProvider>
          <div className="bg-gray-100 dark:bg-gray-800 min-h-screen font-sans text-gray-900 dark:text-gray-100">
            <nav className="sticky">
              <Header />
            </nav>
            <main className="container mx-auto"> {children}</main>
          </div>
        </PlayerProvider>
      </body>
    </html>
  );
}
