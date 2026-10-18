import type { Metadata } from "next";
import { Lato, Manrope } from "next/font/google";
import "./globals.css";
import CoachingFormModal from "./components/CoachingFormModal";
import { CoachingModalProvider } from "./components/CoachingModalProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Richard Roe – Veganer Fitness Coach",
  description:
    "Dein Weg zum Traumkörper ganz ohne tierische Produkte – vegane Rezepte und 1:1 Coaching.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${manrope.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CoachingModalProvider>
          {children}
          <CoachingFormModal />
        </CoachingModalProvider>
      </body>
    </html>
  );
}
