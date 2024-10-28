import type { Metadata } from "next";
import localFont from "next/font/local";
import StateContextProvider from "@/context/StateContext";
import "./globals.css";
import GotoTop from "@/components/Ui/GotoTop";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export interface LayoutProps {
  children: React.ReactNode;
  types: React.ReactNode;
} 
export const metadata: Metadata = {
  title: "E-Scooter",
  description: "Let's Ride the Future",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function RootLayout({ children, types }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StateContextProvider>
          {children}
          <GotoTop />
        </StateContextProvider>
      </body>
    </html>
  );
}
