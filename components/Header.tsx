"use client"

import Link from "next/link"
import { Fingerprint } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-opacity-20 bg-black backdrop-blur-md shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Fingerprint className="h-8 w-8 text-pink-500" />
          <span className="text-xl font-bold text-white" style={{ fontFamily: "Lobster, cursive" }}>
            VeriFake
          </span>
        </Link>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Menu
        </button>
        <ul className={`${isMenuOpen ? "block" : "hidden"} md:flex md:space-x-6 mt-4 md:mt-0`}>
          <li>
            <Link href="/" className="text-gray-300 hover:text-pink-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/demo" className="text-gray-300 hover:text-pink-500 transition duration-300">
              Demo
            </Link>
          </li>
          <li>
            <Link href="/upload" className="text-gray-300 hover:text-pink-500 transition duration-300">
              Upload
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-pink-500 transition duration-300">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/deepfakes" className="text-gray-300 hover:text-pink-500 transition duration-300">
              Deepfakes
            </Link>
          </li>
          <li>
            <Link href="/technology" className="text-gray-300 hover:text-pink-500 transition duration-300">
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

