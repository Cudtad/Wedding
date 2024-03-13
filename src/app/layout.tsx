import "@/styles/globals.scss";
import type { Metadata } from "next";
import clsx from "clsx";
import Layout from "@/components/common/layout";
import { Playfair_Display, Poppins, Allura } from "next/font/google";

export const playfair_display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: "400",
});

export const allura = Allura({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-allura",
  weight: "400",
});

export const metadata: Metadata = {
  title: "e-commerce",
  description: "Shopping online",
};

type Props = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

export default function RootLayout({ children, params: { lang } }: Props) {
  return (
    <html
      lang={lang}
      className={`${playfair_display.variable} ${poppins.variable} ${allura.variable}`}
    >
      <body
        className={clsx(
          "text-yellow-950",
          allura.variable,
          playfair_display.variable,
          poppins.variable
        )}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
