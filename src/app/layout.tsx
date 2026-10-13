import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { themeScript } from "../lib/theme-script";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ChatWidget } from "../components/chat/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kolve.com"),
  title: "KOLVE | Digital Service Provider",
  description:
    "Real problems. Practical solutions. Built with purpose. Digital service and problem-solving studio based in Sunsari, Nepal.",
  keywords: [
    "KOLVE",
    "Digital Service Provider",
    "Web Development",
    "UI/UX Design",
    "Graphic Design",
    "Nepal",
    "Sunsari",
  ],
  authors: [{ name: "KOLVE" }],
  openGraph: {
    title: "KOLVE | Digital Service Provider",
    description: "Your problem, our solution. Practical digital solutions built with purpose.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text transition-colors duration-200">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-on-accent focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-focus-ring"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}

