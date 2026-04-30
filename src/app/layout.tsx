// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer"; // <-- IMPORTA EL FOOTER

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevStudio TI | Ingeniería de Software",
  description: "Soluciones Full Stack y Arquitectura Cloud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Aquí irá el Navbar más adelante */}
        
        {children} {/* Este es el contenido de tu page.tsx */}
        
        <Footer /> {/* <-- AGREGA EL FOOTER AQUÍ */}
      </body>
    </html>
  );
}