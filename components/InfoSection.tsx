import { motion } from "framer-motion"
import { Shield, AlertTriangle, Zap } from "lucide-react"

export default function InfoSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-4">Deepfakes: The AI Illusion</h2>
          <p className="text-xl text-blue-400 max-w-3xl mx-auto">
            Deepfakes use artificial intelligence to manipulate images and videos, replacing real people with synthetic versions that look incredibly real.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div className="bg-white p-6 rounded-lg shadow-lg" {...fadeInUp}>
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-600">What are Deepfakes?</h3>
            <p className="text-gray-600">
              Deepfakes are AI-generated media that can manipulate or generate visual and audio content with a high
              potential to deceive.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-lg" {...fadeInUp}>
            <AlertTriangle className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-yellow-500">Why Detection Matters</h3>
            <p className="text-gray-600">
              As deepfake technology advances, it becomes crucial to have reliable detection methods to maintain trust
              in digital media and prevent misinformation.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-lg" {...fadeInUp}>
            <Zap className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-500">How VeriFake Works</h3>
            <p className="text-gray-600">
              VeriFake uses advanced machine learning algorithms to analyze visual inconsistencies, audio anomalies, and
              other telltale signs of deepfake manipulation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

