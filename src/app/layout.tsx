import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ishita Tiwari | Full Stack Developer",
  description:
    "Ishita Tiwari – 1st year Full Stack Developer at Polaris School of Technology. Building high-converting websites and modern web experiences.",
  keywords: ["frontend developer", "full stack", "web design", "portfolio", "Ishita Tiwari"],
  authors: [{ name: "Ishita Tiwari" }],
  openGraph: {
    title: "Ishita Tiwari | Full Stack Developer",
    description: "Building high-converting websites and modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
