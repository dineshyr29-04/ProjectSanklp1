import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Sankalp | Empowering Communities Through Tech & Education",
  description: "Project Sankalp is a national social impact organization dedicated to bridging the digital divide, establishing solar-powered community smart labs, and mentoring tech leaders.",
  keywords: ["Project Sankalp", "Sankalp", "Social Tech Fellows", "Digital Literacy", "Tech Mentorship", "Community Labs", "Open Source for Good", "Tech Education"],
  authors: [{ name: "Project Sankalp Team" }],
  openGraph: {
    title: "Project Sankalp | Empowering Communities Through Tech & Education",
    description: "Bridging the digital divide and mentoring tech leaders through community-driven digital smart labs.",
    type: "website",
    locale: "en_US",
    siteName: "Project Sankalp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Sankalp | Empowering Communities",
    description: "Bridging the digital divide and mentoring tech leaders through community-driven digital smart labs.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-md focus:font-semibold focus:shadow-md"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

