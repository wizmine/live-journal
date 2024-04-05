import { CSSProperties } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "antd";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { Content } from "antd/es/layout/layout";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Live Journal",
  description: "Live Journal Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Layout>
            <AppHeader />
            <Content style={contentStyle}>{children}</Content>
            <AppFooter />
          </Layout>
        </Providers>
      </body>
    </html>
  );
}

const contentStyle: CSSProperties = {
  padding: "1rem",
  textAlign: "center",
  minHeight: "calc(100vh - 110px)",
  color: "#fff",
  backgroundColor: "aliceblue",
};
