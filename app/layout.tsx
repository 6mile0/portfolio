import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import 'react-tooltip/dist/react-tooltip.css'

const notoSans = Noto_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "6mile.dev",
  description: "6mileのポートフォリオです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSans.className} bg-custom-background-right dark:bg-custom-background-dark`}>
        {children}
      </body>
    </html>
  );
}
