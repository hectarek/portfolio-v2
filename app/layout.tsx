import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getProfile } from "@/src/lib/data";
import { generateMetadata as generateSEOMetadata } from "@/src/shared/utils/seo";
import { Footer } from "./_components/portfolio/contact/footer";
import { Navbar } from "./_components/portfolio/nav/navbar";
import { Providers } from "./_providers/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// SEO-optimized metadata
export const metadata: Metadata = generateSEOMetadata({
  title: "Hector Gonzalez | CTO, Full Stack Engineer, Startup Co-Founder",
  description:
    "Problem-focused technical leader who designs scalable, modern products. CTO, Startup Co-Founder, and Full Stack Engineer specializing in systems design, automation, and educational innovation.",
  keywords: [
    "Hector Gonzalez",
    "CTO",
    "Full Stack Engineer",
    "Startup Co-Founder",
    "Systems Design",
    "Next.js",
    "TypeScript",
    "Bun",
    "Portfolio",
  ],
  type: "website",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profile = getProfile();

  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer profile={profile} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
