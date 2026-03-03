import type { Metadata } from "next";
import "./globals.css";
import InteractiveCursur from "@/components/common/interactiveCursur";

export const metadata: Metadata = {
  title: "코딘 리쿠르팅",
  description: "인천대학교 정보기술대학 공식 SNS",
  icons:{
    icon: "/icons/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="w-full h-full overflow-visible">
      <head>
        {/* LCP 이미지 조기 발견: 로고 preload */}
        <link rel="preload" as="image" href="/logo/logo.webp" />
        {/* iframe(codin.inu.ac.kr) 연결 가속 */}
        <link rel="preconnect" href="https://codin.inu.ac.kr" />
      </head>
      <body className={`antialiased w-full h-full overflow-visible`} >
        {children}
        <InteractiveCursur/>
      </body>
    </html>
  );
}
