import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import FAQSection from "@/components/FAQSection"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About VeriFake</h1>
      <AboutSection />
      <ContactSection />
      <FAQSection />
    </div>
  )
}

