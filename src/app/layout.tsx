import type { Metadata } from "next";
import { Inter, Lato, Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Elevii tecnologia",
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
        className={`${inter.variable} ${poppins.variable} flex is-full min-bs-full flex-auto flex-col ${lato.variable}`}
      >
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {children}
      </body>
    </html>
  );
}
