"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, Loader } from "lucide-react"

export default function UploadSection() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [analysis, setAnalysis] = useState<any>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setFile(event.dataTransfer.files[0])
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!file) return

    setIsUploading(true)
    // Simulating file upload and analysis
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsUploading(false)
    setAnalysis({
      verdict: Math.random() > 0.5 ? "Likely Fake" : "Authentic",
      confidence: Math.floor(Math.random() * 30) + 70,
    })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit}>
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">Drag and drop your file here, or click to Upload a file</p>
            <input type="file" className="hidden" onChange={handleFileChange} accept="image/*,video/*" />
          </div>
          {file && <p className="mt-2 text-sm text-gray-600">Selected file: {file.name}</p>}
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            disabled={!file || isUploading}
          >
            {isUploading ? <Loader className="animate-spin h-5 w-5 mx-auto" /> : "Analyze"}
          </button>
        </form>
        {analysis && (
          <motion.div
            className="mt-8 p-4 bg-gray-100 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">Analysis Result</h3>
            <p>
              <strong>Verdict:</strong> {analysis.verdict}
            </p>
            <p>
              <strong>Confidence:</strong> {analysis.confidence}%
            </p>
            <div className="mt-4 h-4 bg-gray-200 rounded-full">
              <div
                className={`h-full rounded-full ${analysis.verdict === "Authentic" ? "bg-green-500" : "bg-red-500"}`}
                style={{ width: `${analysis.confidence}%` }}
              ></div>
            </div>
          </motion.div>
        )}
      </motion.div>
      <p className="mt-4 text-sm text-gray-400 text-center">
        Disclaimer: This is a demo application. The AI analysis may not be 100% accurate and should not be used as
        definitive proof of authenticity.
      </p>
    </div>
  )
}

