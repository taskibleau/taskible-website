import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://taskible.com.au'),
  title: "Taskible - Save 60% on Bookkeeping Costs with Overseas Professionals",
  description: "Connect with skilled overseas bookkeeping professionals and cut your costs by 60%. Trusted by 847+ Australian businesses. Get your free consultation today.",
  keywords: ["bookkeeping", "overseas professionals", "cost savings", "Australian business", "accounting", "financial services"],
  authors: [{ name: "Taskible" }],
  openGraph: {
    title: "Taskible - Save 60% on Bookkeeping Costs",
    description: "Connect with skilled overseas bookkeeping professionals and cut your costs by 60%. Trusted by 847+ Australian businesses.",
    url: "https://taskible.com.au",
    siteName: "Taskible",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Taskible - Overseas Bookkeeping Professionals",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taskible - Save 60% on Bookkeeping Costs",
    description: "Connect with skilled overseas bookkeeping professionals and cut your costs by 60%.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-9RLLFDFCEB`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9RLLFDFCEB', {
              page_title: 'Taskible - Australian Bookkeeping',
              send_page_view: true
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
