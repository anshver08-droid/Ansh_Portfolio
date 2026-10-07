import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PERSONAL_INFO } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030508",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ansh-verma.dev"),
  title: {
    default: "Ansh Verma | Software Engineer | AI/ML & Generative AI",
    template: "%s | Ansh Verma",
  },
  description:
    "Ansh Verma is a CSE (AI/ML) student at ABES Engineering College building intelligent software systems across AI, Generative AI, backend architectures, and full-stack development.",
  keywords: [
    "Ansh Verma",
    "CSE AI/ML Student",
    "Software Engineer",
    "AI Engineer",
    "Generative AI",
    "Backend Developer",
    "Full Stack Developer",
    "TypeScript",
    "Fastify",
    "PostgreSQL",
    "Next.js",
    "React",
    "Google Gemini API",
    "DevPartner AI",
    "HealthBuddy AI",
    "TableKeeper",
    "ABES Engineering College",
  ],
  authors: [{ name: "Ansh Verma", url: "https://github.com/anshver08-droid" }],
  creator: "Ansh Verma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ansh-verma.dev",
    title: "Ansh Verma | Software Engineer | AI/ML & Generative AI",
    description:
      "Building intelligent software systems across AI, Generative AI, backend architectures, and full-stack development.",
    siteName: "Ansh Verma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansh Verma | Software Engineer | Full-Stack & AI",
    description:
      "Building reliable software systems, AI-powered developer tools, and backend APIs with transactional correctness.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ansh-verma.dev/#person",
        name: "Ansh Verma",
        jobTitle: "Software Engineer",
        description:
          "Undergraduate software engineer specializing in backend systems, transactional correctness, and verified AI pipelines.",
        url: "https://ansh-verma.dev",
        sameAs: [
          "https://github.com/anshver08-droid",
          "https://www.linkedin.com/in/ansh-verma-380264398",
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "ABES Engineering College",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ghaziabad",
          addressCountry: "India",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://ansh-verma.dev/#website",
        url: "https://ansh-verma.dev",
        name: "Ansh Verma Portfolio",
        publisher: {
          "@id": "https://ansh-verma.dev/#person",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-white">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-950 focus:font-semibold focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>

        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
