"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, Loader, XCircle } from "lucide-react"

export default function UploadSection() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [analysis, setAnalysis] = useState<any>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0]
      setFile(selectedFile)

      // Generate preview if file is an image
      if (selectedFile.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => setPreview(e.target?.result as string)
        reader.readAsDataURL(selectedFile)
      } else {
        setPreview(null)
      }
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const selectedFile = event.dataTransfer.files[0]
      setFile(selectedFile)

      // Generate preview if file is an image
      if (selectedFile.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => setPreview(e.target?.result as string)
        reader.readAsDataURL(selectedFile)
      } else {
        setPreview(null)
      }
    }
  }

  const removeFile = () => {
    setFile(null)
    setPreview(null)
    setAnalysis(null) // Reset analysis when removing the file
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!file) return

    setIsUploading(true)
    // Simulating file upload and analysis with random delay between 2 to 4 seconds
    const delay = Math.floor(Math.random() * 2000) + 2000
    await new Promise((resolve) => setTimeout(resolve, delay))
    setIsUploading(false)
    setAnalysis({
      verdict: Math.random() > 0.4 ? "Authentic" : "Likely Fake",
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
          {!file ? (
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">Drag and drop your file here, or click to select a file</p>
              <input type="file" className="hidden" onChange={handleFileChange} accept="image/*,video/*" />
            </div>
          ) : (
            <div className="relative mt-4">
              {preview ? (
                <img src={preview} alt="Uploaded" className="w-full rounded-lg shadow-md" />
              ) : (
                <p className="text-sm text-gray-700 font-medium">Selected file: {file.name}</p>
              )}
              <button
                onClick={removeFile}
                type="button"
                className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition"
              >
                <XCircle className="h-6 w-6 text-red-500" />
              </button>
            </div>
          )}

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
            className="mt-8 p-4 bg-gray-300 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-500">Analysis Result</h3>

            <p>
              <strong>Verdict:</strong>
              <span className={analysis.verdict === "Authentic" ? "text-green-600" : "text-red-600"}>
                {" "}
                {analysis.verdict}
              </span>
            </p>

            <p>
              <strong>Confidence:</strong>
              <span className={analysis.verdict === "Authentic" ? "text-green-600" : "text-red-600"}>
                {" "}
                {analysis.confidence}%
              </span>
            </p>

            <div className="mt-4 h-4 bg-gray-100 rounded-full">
              <div
                className={`h-full rounded-full ${analysis.verdict === "Authentic" ? "bg-green-500" : "bg-red-500"}`}
                style={{ width: `${analysis.confidence}%` }}
              ></div>
            </div>
          </motion.div>
        )}
      </motion.div>
      <p className="mt-4 text-sm text-gray-300 text-center">
        Disclaimer: This is a demo application. The AI analysis may not be 100% accurate and should not be used as
        definitive proof of authenticity.
      </p>
    </div>
  )
}
