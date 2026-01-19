import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Dolphin Wave",
  description: "Dolphin Wave is a simple social media platform to connect, share, and explore trending content in real time.",
  applicationName: "Dolphin Wave",
  icons: {
    icon: '/favicon.ico'
  },
  keywords: ["Dolphin Wave", "social media", "posts", "messaging", "community"],
  authors: [{ name: "Dolphin Wave Team" }],
  creator: "Dolphin Wave",
  openGraph: {
    title: "Dolphin Wave",
    description: "Connect and share your moments with Dolphin Wave.",
    siteName: "Dolphin Wave",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
