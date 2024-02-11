import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { DefaultProviders } from "./components/default-providers";
import { DefaultPageLayout } from "./components/default-page-layout";

const saira = Saira({ 
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Computer Force",
  description: "Best computer parts online shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <DefaultProviders>
          <Header/>
          <DefaultPageLayout>
            {children}  
          </DefaultPageLayout>
        </DefaultProviders>
      </body>
    </html>
  );
}
