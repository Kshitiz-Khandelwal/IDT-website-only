"use client"; // Ensures it's a client component (Next.js 13+ with App Router)

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            "AI That Detects the Lies, So You Can Trust the Truth."
            
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Unmask the Fake. Trust the Real. VeriFake: AI-Powered Deepfake Detection for a Secure Digital Future.
          </p>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/upload"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300"
              aria-label="Start Detecting Now"
            >
              Start Detecting Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
