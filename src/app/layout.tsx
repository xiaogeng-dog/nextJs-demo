import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/assets/font/iconfont.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NavigationEvents } from "./components/navigation-events";
import { Suspense } from "react";
import styles from "./index.module.css";

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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    tag: string;
    item: string;
  };
}>) {
  console.log(111, params);
  return (
    <html lang="en">
      <AntdRegistry>
        <body className={inter.className}>
          <div className={styles["header"]}>header</div>
          {children}
          <div className={styles["footer"]}>footer</div>
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </body>
      </AntdRegistry>
    </html>
  );
}
