import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import 'react-tooltip/dist/react-tooltip.css'

const notoSans = Noto_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "6mile.dev",
  description: "6mile's site",
  openGraph: {
    type: "website",
    title: "6mile.dev",
    description: "6mile's site",
    locale: "ja_JP",
    url: "https://6mile.dev",
    images: [
      {
        url: "https://images.6mile.dev/icon.jpg",
        width: 128,
        height: 128,
        alt: "6mile.dev",
      },
    ],
  },
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
