import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Lading page Elevii tecnologia",
  description:
    "Este é um single page contendo informações gerais da Elevii. Aui, é possível encontrar um pouco sobre a empresa e serviços prestrados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={
          inter.className +
          "flex is-full min-bs-full flex-auto flex-col" +
          lato.className
        }
      >
        {children}
      </body>
    </html>
  );
}
