import type { Metadata } from "next";
import {
  Archivo,
  Big_Shoulders_Stencil,
  Instrument_Serif,
  VT323,
} from "next/font/google";
import "./globals.css";
import { HeaderBar } from "@/components/chrome";

const stencil = Big_Shoulders_Stencil({
  variable: "--font-stencil",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const vt = VT323({
  variable: "--font-vt",
  subsets: ["latin"],
  weight: "400",
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Thomas J McGovern — Portfolio Report 2026",
  description:
    "The work defining Thomas J McGovern. Software projects, photography, and process — presented as an annual trend report.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${stencil.variable} ${archivo.variable} ${vt.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="grain min-h-full bg-ink">
        <HeaderBar />
        {children}
      </body>
    </html>
  );
}
