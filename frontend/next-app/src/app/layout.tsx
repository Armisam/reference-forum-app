import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "../layout/Header";
import { FakeDbProvider } from "@/context/FakeDbContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forum App - Next App",
  description: "Forum App by Csaba Székely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-black dark:bg-zinc-900 dark:text-white font-sans">
        <Header />

        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
          <FakeDbProvider>{children}</FakeDbProvider>
        </main>

        <footer className="border-t border-zinc-200 dark:border-zinc-700 mt-10 py-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
          {new Date().getFullYear()} Forum App by Csaba Székely.
        </footer>
      </body>
    </html>
  );
}
