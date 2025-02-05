"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const sampleVideos = [
  { id: 1, src: "/placeholder.svg", type: "Real", confidence: 98 },
  { id: 2, src: "/placeholder.svg", type: "Fake", confidence: 95 },
]

export default function DemoSection() {
  const [selectedVideo, setSelectedVideo] = useState(sampleVideos[0])

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4">Sample Videos</h2>
          <div className="space-y-4">
            {sampleVideos.map((video) => (
              <div
                key={video.id}
                className={`p-4 rounded-lg cursor-pointer transition duration-300 ${
                  selectedVideo.id === video.id ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => setSelectedVideo(video)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">Video {video.id}</span>
                  <span className={`px-2 py-1 rounded ${video.type === "Real" ? "bg-green-500" : "bg-red-500"}`}>
                    {video.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4">Analysis</h2>
          <div className="bg-gray-700 p-4 rounded-lg">
            <Image
              src={selectedVideo.src || "/placeholder.svg"}
              alt={`Video ${selectedVideo.id}`}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="space-y-2">
              <p>
                <strong>Type:</strong> {selectedVideo.type}
              </p>
              <p>
                <strong>Confidence:</strong> {selectedVideo.confidence}%
              </p>
              <p>
                <strong>Explanation:</strong>{" "}
                {selectedVideo.type === "Real"
                  ? "This video shows no signs of manipulation. The facial movements and audio are consistent with genuine footage."
                  : "This video exhibits subtle inconsistencies in facial movements and audio synchronization, indicating potential deepfake manipulation."}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

