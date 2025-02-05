"use client"

import { useState } from "react"
import Image from "next/image"

const techStack = [
  {
    category: "AI & Machine Learning",
    description: "Python, TensorFlow, and PyTorch are used for CNN/RNN-based deepfake detection.",
    tools: ["Python", "TensorFlow", "PyTorch"],
    icon: "/placeholder.svg",
  },
  {
    category: "Backend & APIs",
    description: "Flask/Django and FastAPI handle AI inference, API integration, and real-time requests.",
    tools: ["Flask", "Django", "FastAPI"],
    icon: "/placeholder.svg",
  },
  {
    category: "Frontend",
    description: "JavaScript frameworks like React.js, Angular, and Vue.js are used for UI/UX.",
    tools: ["React.js", "Angular", "Vue.js"],
    icon: "/placeholder.svg",
  },
  {
    category: "Database Management",
    description: "PostgreSQL and MongoDB are used for storing deepfake detection logs.",
    tools: ["PostgreSQL", "MongoDB"],
    icon: "/placeholder.svg",
  },
  {
    category: "Cloud & Deployment",
    description: "Docker, Kubernetes, AWS Lambda, and TensorFlow Lite enable scalable AI inference.",
    tools: ["Docker", "Kubernetes", "AWS Lambda", "TensorFlow Lite"],
    icon: "/placeholder.svg",
  },
  {
    category: "Performance Optimization",
    description: "CUDA, TensorRT, and WebRTC are used for real-time analysis.",
    tools: ["CUDA", "TensorRT", "WebRTC"],
    icon: "/placeholder.svg",
  },
]

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(techStack[0].category)

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4">
        {techStack.map((tech) => (
          <button
            key={tech.category}
            onClick={() => setActiveCategory(tech.category)}
            className={`px-4 py-2 rounded-full transition duration-300 ${
              activeCategory === tech.category
                ? "bg-pink-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {tech.category}
          </button>
        ))}
      </div>

      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 shadow-lg">
        {techStack.map(
          (tech) =>
            tech.category === activeCategory && (
              <div key={tech.category} className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-full md:w-1/3">
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.category}
                    width={200}
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 gradient-text">{tech.category}</h2>
                  <p className="mb-4">{tech.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool) => (
                      <span key={tool} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  )
}

