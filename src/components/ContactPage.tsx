import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-green-600" size={32} />,
      title: "Visit Us",
      details: ["123 Main Street", "City, State 12345", "United States"],
    },
    {
      icon: <Phone className="text-yellow-600" size={32} />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "WhatsApp Available"],
    },
    {
      icon: <Mail className="text-red-600" size={32} />,
      title: "Email Us",
      details: ["info@spicegarden.com", "orders@spicegarden.com", "support@spicegarden.com"],
    },
    {
      icon: <Clock className="text-green-600" size={32} />,
      title: "Opening Hours",
      details: ["Mon - Fri: 11:00 AM - 10:00 PM", "Sat - Sun: 10:00 AM - 11:00 PM", "Delivery: 11:00 AM - 9:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-green-700 text-5xl mb-4">Get In Touch</h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Have a question or want to learn more about our subscription service? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">{info.icon}</div>
              <h3 className="text-gray-900 mb-3">{info.title}</h3>
              {info.details.map((detail, detailIdx) => (
                <p key={detailIdx} className="text-gray-600 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-green-700 text-3xl mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Map/Location Info */}
          <div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl mb-6">Visit Our Restaurant</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl mb-2">Location</h3>
                    <p className="text-white/90">
                      We're conveniently located in the heart of the city, easily accessible by public transport and with ample parking available.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl mb-2">Dine-In Experience</h3>
                    <p className="text-white/90">
                      Enjoy our beautiful dining space with a warm, welcoming atmosphere. Perfect for family gatherings, romantic dinners, or business meetings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl mb-2">Subscription Service</h3>
                    <p className="text-white/90">
                      Can't visit us regularly? Subscribe to our daily meal delivery service and enjoy restaurant-quality food at home!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/90 mb-4">Follow us on social media for daily specials and updates!</p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    📘
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    📷
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    🐦
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-green-700 text-3xl mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-gray-900 mb-2">Do you offer vegetarian options?</h3>
              <p className="text-gray-600">
                Yes! We have an extensive vegetarian menu with daily rotating options.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 mb-2">How does the subscription work?</h3>
              <p className="text-gray-600">
                Choose your plan duration, select your delivery dates, and we'll deliver fresh meals daily!
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 mb-2">Can I customize my meals?</h3>
              <p className="text-gray-600">
                Absolutely! Contact us through WhatsApp after subscribing to discuss your preferences.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 mb-2">What's your delivery area?</h3>
              <p className="text-gray-600">
                We currently deliver within a 10-mile radius of our restaurant. Contact us to confirm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
