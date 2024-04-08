import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const code = Source_Code_Pro({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Mostafa Al Mohammad",
  description: "Sofware Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={code.className}>{children}</body>
    </html>
  );
}
