import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/assets/font/iconfont.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NavigationEvents } from "./components/navigation-events";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "我是Title",
  description: "网易云音乐商城",
  appLinks: {
    ios: { url: "https://example.com" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AntdRegistry>
        <body className={inter.className}>
          {children}
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </body>
      </AntdRegistry>
    </html>
  );
}
