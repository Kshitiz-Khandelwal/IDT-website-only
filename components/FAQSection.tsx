"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is a deepfake?",
    answer:
      "A deepfake is a type of artificial intelligence-based human image synthesis technique used to combine and superimpose existing images and videos onto source images or videos.",
  },
  {
    question: "How accurate is VeriFake's detection?",
    answer:
      "VeriFake's detection accuracy varies depending on the quality and complexity of the deepfake. Our technology is constantly improving, with current accuracy rates averaging above 90% for most types of deepfakes.",
  },
  {
    question: "Can VeriFake detect audio deepfakes?",
    answer:
      "Yes, VeriFake can detect both visual and audio deepfakes. Our technology analyzes voice patterns, intonation, and other audio characteristics to identify potential manipulations.",
  },
  {
    question: "Is my uploaded content secure?",
    answer:
      "We take data privacy very seriously. All uploaded content is encrypted and automatically deleted after analysis. We do not store or share any user-uploaded media.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

