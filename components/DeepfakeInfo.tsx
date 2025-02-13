"use client";

import { useState } from "react";
import Image from "next/image";

export default function DeepfakeInfo() {
  const [activeTab, setActiveTab] = useState("creation");

  const tabs = [
    { id: "creation", label: "How Deepfakes Are Created" },
    { id: "effects", label: "Harmful Effects" },
    { id: "tools", label: "Common Tools & Languages" },
  ];

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
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

      {/* Tab Content */}
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 shadow-lg">
        {/* How Deepfakes Are Created */}
        {activeTab === "creation" && (
          <div>
            <h2 className="text-2xl font-bold mb-4 gradient-text">How Deepfakes Are Created</h2>
            <p className="mb-4 text-white">
              Deepfakes are generated using **AI** and **Machine Learning (ML)** models that manipulate images, videos, and audio with high realism. 
              Key techniques include:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-white">
              <li>
                <strong className="text-pink-400">Generative Adversarial Networks (GANs)</strong> – Uses two competing networks (Generator & Discriminator) to produce realistic fake media.
              </li>
              <li>
                <strong className="text-pink-400">Autoencoders</strong> – Compress and reconstruct images to swap faces seamlessly.
              </li>
              <li>
                <strong className="text-pink-400">Transformer-Based Models</strong> – Enable AI-driven lip-syncing, facial manipulation, and speech synthesis.
              </li>
              <li>
                <strong className="text-pink-400">Motion Transfer & Facial Reenactment</strong> – Maps facial expressions from one person onto another in real time.
              </li>
              <li>
                <strong className="text-pink-400">Audio Deepfakes</strong> – AI-generated voices using speech synthesis and voice cloning.
              </li>
            </ul>
            <Image
              src="/images/deepfakem.png"
              alt="Deepfake Creation Process"
              width={600}
              height={400}
              className="rounded-lg mx-auto"
            />
          </div>
        )}

        {/* Harmful Effects of Deepfakes */}
        {activeTab === "effects" && (
          <div>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Harmful Effects of Deepfakes</h2>
            <p className="mb-4 text-white">
              Deepfakes pose serious risks, including misinformation, fraud, and cybersecurity threats. Their impact includes:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-white">
              <li>
                <strong className="text-pink-400">Misinformation</strong> – Spreading false narratives and distorting facts.
              </li>
              <li>
                <strong className="text-pink-400">Fraud</strong> – Facilitating scams, impersonation, and financial crimes.
              </li>
              <li>
                <strong className="text-pink-400">Identity Theft</strong> – Misusing personal media for deception or blackmail.
              </li>
              <li>
                <strong className="text-pink-400">Political Risks</strong> – Manipulating elections and damaging reputations.
              </li>
              <li>
                <strong className="text-pink-400">Cybersecurity Threats</strong> – Enhancing phishing attacks and bypassing biometric security.
              </li>
            </ul>
            <p className="text-blue-400">
              Robust **detection and mitigation strategies** are essential to combat deepfake misuse.
            </p>
          </div>
        )}

        {/* Common Tools & Languages */}
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
  );
}
