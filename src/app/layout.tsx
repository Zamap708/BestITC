import type { Metadata } from "next";
import { Inter, Roboto_Mono, Rubik_Mono_One } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "100" });
// const roboto = Roboto({ subsets: ["latin"], weight: "100" });
const robotoMono = Roboto_Mono({ subsets: ["latin"] })
export const rubikMono = Rubik_Mono_One({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Best In The City",
  description: "Best In The City",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
