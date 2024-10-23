import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import Menu from "@/components/Menu/Menu";

export const metadata: Metadata = {
  title: "PORTFOLIO",
  description: "Portfolio para checkpoint",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <Cabecalho />
          <Menu />
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Rodape />
      </body>
    </html>
  );
}
