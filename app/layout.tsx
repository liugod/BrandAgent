import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BrandAgent",
  description: "Brand content operations system MVP"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
