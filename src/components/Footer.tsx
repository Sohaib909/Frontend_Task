import type React from "react"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Real Estate Dashboard</h3>
            <p className="text-gray-300 mb-4">
              Find your perfect property with our comprehensive real estate listings. Browse through thousands of
              properties and discover your dream home.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p> info@realestate.com</p>
              <p> (555) 123-4567</p>
              <p> 123 Main St, City, State</p>
            </div>
          </div>
        </div>

        <div className="border-top border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 Real Estate Dashboard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
