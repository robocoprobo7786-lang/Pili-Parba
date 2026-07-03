import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "../styles/globals.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

const fontDisplay = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const fontBody = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pili Parba",
    default: "Pili Parba | Tiger Dance of Tulunadu",
  },
  description: "The official digital home of the Tiger Dance festival of Tulunadu. Experience the heat, color, and pride of Pili Vesha.",
  openGraph: {
    title: "Pili Parba | Tiger Dance of Tulunadu",
    description: "The official digital home of the Tiger Dance festival of Tulunadu. Experience the heat, color, and pride of Pili Vesha.",
    type: "website",
    locale: "en_IN",
    siteName: "Pili Parba",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-bone text-ink">
        <Header />
        
        <main className="flex-1 pt-24">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
