import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"])

import {  Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const PlayFairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});


export const metadata = {
  title: "PawsNest",
  description: "This is a pet adoption platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased ${PlayFairDisplay.variable} ${inter.variable}`}
    >
      <body className={`min-h-full flex flex-col bg-[#FFFFFF]`}>

        {children}
        <ToastContainer />

      </body>
    </html>
  );
}
