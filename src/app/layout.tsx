import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutAntd from "./layoutAntd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ingeniería Civil",
  description: "Ingeniería Civil, desde la planificación y el diseño hasta la ejecución y la entrega final",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutAntd>{children}</LayoutAntd>
      </body>
    </html>
  );
}
