import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white">🍽️</span>
              </div>
              <span className="text-yellow-400">Ganesh Bhavan</span>
            </div>
            <p className="text-gray-400">
              Serving authentic flavors with love and passion. Experience the taste of tradition in every meal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Menu</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Subscription Plans</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-yellow-400 mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-green-500 mt-1" />
                <span>123 Main Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-green-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-green-500" />
                <span>info@spicegarden.com</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook size={20} />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram size={20} />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Twitter size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ganesh Bhavan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
