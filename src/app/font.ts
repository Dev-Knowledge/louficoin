import { Roboto } from "next/font/google";
import { Archivo_Black, Quantico, Lilita_One } from "next/font/google";
import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], weight: "400" });

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export const archivo = Archivo_Black({ subsets: ["latin"], weight: "400" });

export const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const lilita = Lilita_One({ subsets: ["latin"], weight: "400" });
