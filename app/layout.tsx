import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import MainBox from "./components/MainBox";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToggleDarkMode from "./components/ToggleDarkModeBtn";

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
        <MainBox>
          <Header />
          {children}
          <Footer />
        </MainBox>
        <ToggleDarkMode/>
      </body>
    </html>
  );
}
