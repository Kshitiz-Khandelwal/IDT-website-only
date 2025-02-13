"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      className="flex items-center justify-center min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-4 text-blue-200 font-sans text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full px-3 py-2 text-gray-700 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. johndoe@example.com"
              className="w-full px-3 py-2 text-gray-700 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full px-3 py-2 text-gray-700 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center w-full justify-center"
          >
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
