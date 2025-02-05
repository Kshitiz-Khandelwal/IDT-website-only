"use client"

import { useState } from "react"
import Image from "next/image"

export default function DeepfakeInfo() {
  const [activeTab, setActiveTab] = useState("creation")

  const tabs = [
    { id: "creation", label: "How Deepfakes Are Created" },
    { id: "effects", label: "Harmful Effects" },
    { id: "tools", label: "Common Tools & Languages" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-center space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full transition duration-300 ${
              activeTab === tab.id ? "bg-pink-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 shadow-lg">
        {activeTab === "creation" && (
          <div>
            <h2 className="text-2xl font-bold mb-4 gradient-text">How Deepfakes Are Created</h2>
            <p className="mb-4">Deepfakes are created using advanced AI techniques, primarily:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>
                <strong className="text-pink-400">GANs (Generative Adversarial Networks)</strong>
              </li>
              <li>
                <strong className="text-pink-400">Autoencoders</strong>
              </li>
              <li>
                <strong className="text-pink-400">Transformer-based models</strong>
              </li>
            </ul>
            <Image
              src="/placeholder.svg"
              alt="Deepfake Creation Process"
              width={600}
              height={400}
              className="rounded-lg mx-auto"
            />
          </div>
        )}

        {activeTab === "effects" && (
          <div>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Harmful Effects of Deepfakes</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>
                <strong className="text-pink-400">Misinformation</strong>
              </li>
              <li>
                <strong className="text-pink-400">Fraud</strong>
              </li>
              <li>
                <strong className="text-pink-400">Identity Theft</strong>
              </li>
              <li>
                <strong className="text-pink-400">Political Risks</strong>
              </li>
              <li>
                <strong className="text-pink-400">Cybersecurity Threats</strong>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "tools" && (
          <div>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Common Deepfake Tools & Languages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-pink-400">Popular Frameworks</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>DeepFaceLab</li>
                  <li>First Order Motion Model</li>
                  <li>FaceSwap</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-pink-400">Languages & Libraries</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Python</li>
                  <li>OpenCV</li>
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

