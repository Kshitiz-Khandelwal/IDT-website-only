"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const sampleVideos = [
  { id: 1, src: "/images/real.jpg", type: "Real", confidence: 98 },
  { id: 2, src: "/images/fake.jpg", type: "Fake", confidence: 95 },
];

export default function DemoSection() {
  const [selectedVideo, setSelectedVideo] = useState(sampleVideos[0]);

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Sample Videos List */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4 text-white">Sample Videos</h2>
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
                  <span className="text-lg font-medium text-white">Video {video.id}</span>
                  <span
                    className={`px-2 py-1 rounded ${
                      video.type === "Real" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    }`}
                  >
                    {video.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Analysis Section */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4 text-white">Analysis</h2>
          <div className="bg-gray-700 p-4 rounded-lg">
            {/* Display Image */}
            <div className="relative w-full h-60">
              <Image
                src={selectedVideo.src}
                alt={`Video ${selectedVideo.id}`}
                fill
                className="object-contain rounded-lg"
              />
            </div>

            {/* Type */}
            <p className="text-lg text-blue-400 mt-4">
              <strong>Type:</strong>{" "}
              <span className={selectedVideo.type === "Real" ? "text-green-500" : "text-red-500"}>
                {selectedVideo.type}
              </span>
            </p>

            {/* Confidence */}
            <p className="text-lg text-blue-400">
              <strong>Confidence:</strong>{" "}
              <span className={selectedVideo.type === "Real" ? "text-green-500" : "text-red-500"}>
                {selectedVideo.confidence}%
              </span>
            </p>

            {/* Explanation */}
            <p className="text-md text-blue-400">
              <strong>Explanation:</strong>{" "}
              <span className="text-white">
                {selectedVideo.type === "Real"
                  ? "This video exhibits no detectable signs of digital manipulation. Facial expressions, eye movements, and audio synchronization appear natural and consistent with authentic footage, indicating a high likelihood of genuineness."
                  : "This video demonstrates subtle inconsistencies in facial expressions, unnatural eye movements, and slight mismatches between audio and lip synchronization. These artifacts strongly suggest potential deepfake manipulation, indicating the content may have been artificially generated or altered."}
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
