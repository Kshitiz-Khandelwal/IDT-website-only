import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg mb-2 text-blue-600 lobster-font">VeriFake</h3>
            <p className="text-gray-600">🔍 AI-Powered Deepfake Detection for Digital Trust</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-blue-600">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-600 hover:text-blue-600">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/upload" className="text-gray-600 hover:text-blue-600">
                  Upload
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-blue-600">Contact Us</h3>
            <p className="text-gray-600">+91-888-022-0080</p>
            <p className="text-gray-600">24UG1BYBS009@bmsit.in</p>
            <p className="text-gray-600">
              BMS Institute of Technology & Management, Doddaballapur Main Road, Avalahalli, Yelahanka, Bengaluru - 560119.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} VeriFake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

