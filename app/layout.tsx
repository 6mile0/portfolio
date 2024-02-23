import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import MainBox from "./components/common/MainBox";
import "./globals.css";
import 'react-tooltip/dist/react-tooltip.css'

const notoSans = Noto_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://6mile.dev'),
  title: "6mile.dev",
  description: "6mile's site",
  icons: [{ rel: 'icon', url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    title: "6mile.dev",
    description: "6mile's site",
    locale: "ja_JP",
    url: "https://6mile.dev",
    images: [
      {
        url: "/me.webp",
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
        <MainBox>
          {children}
        </MainBox>
      </body>
    </html>
  );
}
