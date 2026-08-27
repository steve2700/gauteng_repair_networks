import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gautengrepairnetwork.co.za"),
  title: {
    default: "Gauteng Repair Network | Appliance, Aircon & Refrigeration Repairs in Gauteng",
    template: "%s | Gauteng Repair Network Gauteng",
  },
  description:
    "Gauteng Repair Network delivers fast, reliable appliance repairs, air conditioning installation and servicing, cold room installation and commercial refrigeration across Gauteng, Pretoria and Johannesburg. Same day callouts available.",
  keywords:
    "fridge repair Johannesburg, appliance repairs Gauteng, air conditioning repair Pretoria, cold room installation Gauteng, commercial refrigeration Johannesburg, aircon service Sandton, washing machine repair Gauteng, emergency fridge repair, Gauteng Repair Network",
  authors: [{ name: "Gauteng Repair Network", url: "https://www.gautengrepairnetwork.co.za" }],
  creator: "Gauteng Repair Network",
  publisher: "Gauteng Repair Network",
  applicationName: "Gauteng Repair Network",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0D5C5C" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.gautengrepairnetwork.co.za",
    siteName: "Gauteng Repair Network",
    title: "Gauteng Repair Network | Appliance, Aircon & Refrigeration Repairs in Gauteng",
    description:
      "Fast, reliable appliance repairs, air conditioning and refrigeration services across Gauteng. Serving Pretoria, Johannesburg and surrounding areas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gauteng Repair Network, Appliance and Refrigeration Repairs in Gauteng",
      },
      {
        url: "/logo-square.png",
        width: 512,
        height: 512,
        alt: "Gauteng Repair Network Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@coldfixservices",
    creator: "@coldfixservices",
    title: "Gauteng Repair Network | Appliance & Refrigeration Repairs Gauteng",
    description:
      "Appliance repairs, aircon and refrigeration services across Gauteng. Serving Pretoria, Johannesburg and surrounding areas.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.gautengrepairnetwork.co.za",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Appliance and Refrigeration Repair",
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Gauteng, South Africa",
    "geo.position": "-26.1076;28.0567",
    "ICBM": "-26.1076, 28.0567",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA">
      <head>
        <meta name="theme-color" content="#0D5C5C" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />

        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18395132504"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18395132504');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Gauteng Repair Network",
              url: "https://www.gautengrepairnetwork.co.za",
              logo: "https://www.gautengrepairnetwork.co.za/logo-square.png",
              image: "https://www.gautengrepairnetwork.co.za/og-image.png",
              description: "Appliance repair, cold room installation, air conditioning and refrigeration services in Gauteng",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.1076,
                longitude: 28.0567,
              },
              areaServed: ["Gauteng", "Pretoria", "Johannesburg", "Sandton", "Midrand", "Centurion"],
              sameAs: [
                "https://www.facebook.com/coldfixservices",
                "https://www.instagram.com/coldfixservices",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27-70-309-6749",
                contactType: "Customer Service",
                areaServed: "ZA",
                availableLanguage: ["en"],
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.gautengrepairnetwork.co.za",
              name: "Gauteng Repair Network",
              image: "https://www.gautengrepairnetwork.co.za/logo-square.png",
              url: "https://www.gautengrepairnetwork.co.za",
              telephone: "+27-70-309-6749",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.1076,
                longitude: 28.0567,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
              sameAs: [
                "https://www.facebook.com/coldfixservices",
                "https://www.instagram.com/coldfixservices",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
