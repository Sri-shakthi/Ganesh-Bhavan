import { ImageWithFallback } from "./figma/ImageWithFallback";
import VendorForm from "./VendorForm";
import { Store, Package, Handshake, TrendingUp, CheckCircle } from "lucide-react";
import { config } from "../config";

export default function VendorPage() {
  const benefits = [
    {
      icon: <Handshake className="text-green-600" size={32} />,
      title: "Long-term Partnership",
      description: "Build a sustainable business relationship with a trusted restaurant.",
    },
    {
      icon: <TrendingUp className="text-yellow-600" size={32} />,
      title: "Regular Orders",
      description: "Consistent demand means steady income for your business.",
    },
    {
      icon: <Package className="text-red-600" size={32} />,
      title: "Fair Pricing",
      description: "We believe in fair trade and competitive pricing for quality products.",
    },
    {
      icon: <Store className="text-green-600" size={32} />,
      title: "Growth Opportunity",
      description: "Partner with a growing restaurant and grow your business too.",
    },
  ];

  const vendorTypes = [
    {
      type: "Vegetable Vendors",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
      description: "We source fresh, seasonal vegetables daily. If you supply quality produce, we'd love to work with you.",
      requirements: [
        "Fresh, high-quality vegetables",
        "Regular supply capability",
        "Competitive pricing",
        "Hygienic handling",
      ],
    },
    {
      type: "Grocery Suppliers",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
      description: "We need reliable suppliers for rice, lentils, spices, and other essential ingredients.",
      requirements: [
        "Quality assurance",
        "Bulk supply capacity",
        "Timely delivery",
        "Competitive rates",
      ],
    },
    {
      type: "Spice Suppliers",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800",
      description: "Authentic spices are the heart of our cuisine. We're always looking for quality spice suppliers.",
      requirements: [
        "Authentic, pure spices",
        "Consistent quality",
        "Reasonable pricing",
        "Reliable supply chain",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/80 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200"
          alt="Vendor partnership"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-4 font-bold">
              Vendor Partnership
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Partner with Ganesh Bhavan and grow your business with us
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-green-700 text-3xl md:text-4xl mb-4 font-bold">Why Partner With Us?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We value our suppliers and believe in building long-term, mutually beneficial relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-gray-900 text-xl mb-3 font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-green-700 text-3xl md:text-4xl mb-4 font-bold">We're Looking For</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quality suppliers for various products we use in our restaurant
            </p>
          </div>

          <div className="space-y-8">
            {vendorTypes.map((vendor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-full">
                    <ImageWithFallback
                      src={vendor.image}
                      alt={vendor.type}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-green-700 text-2xl md:text-3xl mb-4 font-bold">{vendor.type}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{vendor.description}</p>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-3">What We Look For:</h4>
                      <div className="space-y-2">
                        {vendor.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                            <p className="text-gray-700">{req}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-green-700 text-3xl md:text-4xl mb-4 font-bold">Get In Touch</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Click the button below to open our Google Form for partnership opportunities.
            </p>
          </div>
          <VendorForm 
            googleFormId={config.forms.vendor}
          />
        </div>
      </section>
    </div>
  );
}
