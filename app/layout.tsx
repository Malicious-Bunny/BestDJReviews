import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Newsletter from "@/components/newsletter";
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BestDJGuides",
  description: "DJ blog with the latest news, reviews, and guides for DJs and music producers. By DJ Niorich.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className+"antialiased"}>
      <Header />
        {children}
        <Newsletter />
        <Footer />
        <Toaster />
        </body>
    </html>
  );
}
