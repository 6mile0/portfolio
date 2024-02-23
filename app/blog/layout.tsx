import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://6mile.dev/blog'),
  title: "6mile's blog",
  description: "メモ代わりの記事を書き溜めています",
  icons: [{ rel: 'icon', url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    title: "6mile's blog",
    description: "メモ代わりの記事を書き溜めています",
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
  return children;
}
