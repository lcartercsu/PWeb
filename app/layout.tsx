import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} · Abogados en Concepción`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} · Abogados en Concepción`,
    description: site.description,
    url: `https://${site.domain}`,
    siteName: site.name,
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    description: site.description,
    url: `https://${site.domain}`,
    telephone: site.contact.phone,
    email: site.contact.email,
    areaServed: "Concepción, Región del Biobío, Chile",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address,
      addressLocality: "Concepción",
      addressRegion: "Biobío",
      addressCountry: "CL",
    },
    openingHours: ["Mo-Fr 09:00-14:00", "Mo-Fr 15:00-18:00"],
    knowsAbout: [
      "Derecho laboral",
      "Derecho civil",
      "Derecho de familia",
      "Derecho corporativo",
      "Derecho administrativo",
    ],
  };

  return (
    <html lang="es-CL" className={sans.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
