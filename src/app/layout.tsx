import { Header } from "@/components/Header/Header";
import { Layout } from "@/components/Layout/Layout";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desafio FRONTEND",
  description: "Desafio Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <Header />
          {children}
        </Layout>
      </body>
    </html>
  );
}
