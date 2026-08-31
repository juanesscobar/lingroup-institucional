import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lin Group | Empresas, Tecnología y Automatización",
  description:
    "Lin Group desarrolla y opera empresas en diferentes sectores y ofrece soluciones de software, sistemas empresariales y automatización de procesos.",
  openGraph: {
    title: "Lin Group | Empresas, Tecnología y Automatización",
    description:
      "Lin Group desarrolla y opera empresas en diferentes sectores y ofrece soluciones de software, sistemas empresariales y automatización de procesos.",
    type: "website",
    locale: "es_PY",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
