import type { Metadata, Viewport } from "next";
import { Nunito, Caveat } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Sinem'in Mola Köşesi",
  description: "Ders arası mola köşen 💜",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${nunito.variable} ${caveat.variable}`}>
      <body className="min-h-dvh font-sans antialiased">{children}</body>
    </html>
  );
}
