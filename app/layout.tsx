import { Inter, Poppins, Lobster } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-poppins" })
const lobster = Lobster({ weight: "400", subsets: ["latin"], variable: "--font-lobster" })

export const metadata = {
  title: "VeriFake - Detect Deepfakes with AI",
  description: "VeriFake is a cutting-edge deepfake detection platform powered by AI.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${lobster.variable} font-sans min-h-screen gradient-bg text-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

