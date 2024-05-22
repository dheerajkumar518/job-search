import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "./ClientProviders";
import { IconHome } from "@tabler/icons-react";
import Header from "@/components/Common/Header";
import LatOut from "@/components/LayOut";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeekDay",
  description: "Job Search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          <LatOut>{children}</LatOut>
        </ClientProviders>
      </body>
    </html>
  );
}
