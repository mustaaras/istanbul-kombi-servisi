import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "İstanbul Kombi Servisi | En Yakın Kombi Tamircisi",
  description: "İstanbul'un en güvenilir kombi servislerini bulun. Size en yakın, puanlı ve yorumlu kombi tamircileri haritada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
