import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AUTOCRYPT - 전기차 보안 솔루션",
  description: "AUTOCRYPT은 전기차 충전 인프라와 차량 보안을 위한 종합 솔루션을 제공합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 