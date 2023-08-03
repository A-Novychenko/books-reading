import {Montserrat, Abril_Fatface} from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-montserrat",
});

export const abril_fatface = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abril-fatface",
});
