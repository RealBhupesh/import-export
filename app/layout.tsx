import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maharashtra Global Trade Hub | Import Export Company in Maharashtra",
  description: "Leading import-export company based in Maharashtra. Ship globally with 30% faster customs clearance. ISO certified. 10,000+ successful shipments. Connecting businesses worldwide.",
  keywords: "import export company maharashtra, logistics nashik, international shipping india, export services mumbai, sea freight, air freight, customs clearance",
  authors: [{ name: "Maharashtra Global Trade Hub" }],
  openGraph: {
    title: "Maharashtra Global Trade Hub",
    description: "Your Gateway to Global Trade - Connecting Maharashtra to the World",
    type: "website",
    locale: "en_IN",
    siteName: "Maharashtra Global Trade Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maharashtra Global Trade Hub",
    description: "Your Gateway to Global Trade",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;600;700;800;900&family=Poppins:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
