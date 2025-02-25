import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ENP",
  description: "An application for property listing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`w-full ${geistSans.variable} ${geistMono.variable} antialiased flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
