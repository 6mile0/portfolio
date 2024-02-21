import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import MainBox from "./components/MainBox";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { MdModeNight } from "react-icons/md";

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
      <body className={notoSans.className}>
        <MainBox>
          <Header />
          {children}
          <Footer />
        </MainBox>
        <div className="fixed z-100 bottom-10 w-14 h-14 right-10 shadow-sm border rounded-full bg-white rounded-full cursor-pointer flex justify-center items-center">
          <div className="text-xl">
            <MdModeNight />
          </div>
        </div>

      </body>
    </html>
  );
}
