"use client"; // Ensures Next.js treats this as a client component

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="mb-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-200">Our Mission</h2>
        <p className="text-lg text-gray-300 mb-6">
          At VeriFake, our mission is to empower individuals and organizations with cutting-edge AI technology to detect
          and combat the spread of deepfakes. We believe in preserving the integrity of digital media and fostering trust
          in online content.
        </p>
        <h2 className="text-3xl font-bold mb-4 text-blue-200">Our Technology</h2>
        <p className="text-lg text-gray-300 mb-6">
          VeriFake utilizes state-of-the-art deep learning algorithms to analyze visual and audio content. Our technology
          examines subtle inconsistencies in facial movements, voice patterns, and other telltale signs of manipulation
          that are often imperceptible to the human eye and ear.
        </p>
        <h2 className="text-3xl font-bold mb-4 text-blue-200">Applications</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 mb-6">
          <li><span className="text-yellow-100">Media Verification:</span> Helping news organizations authenticate user-generated content</li>
          <li><span className="text-yellow-100">Social Media Monitoring:</span> Assisting platforms in identifying and flagging potentially manipulated content</li>
          <li><span className="text-yellow-100">Personal Security:</span> Enabling individuals to verify the authenticity of received media</li>
          <li><span className="text-yellow-100">Legal and Forensic Analysis:</span> Providing tools for digital evidence examination</li>
        </ul>
      </motion.section>
    </div>
  );
}
