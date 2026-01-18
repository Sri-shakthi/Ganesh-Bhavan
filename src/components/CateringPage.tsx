import { useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import CateringForm from "./CateringForm";
import { Utensils, Users, Calendar, Award, CheckCircle } from "lucide-react";
import { config } from "../config";

export default function CateringPage() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top first, then to form when page loads
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    const timer = setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  const features = [
    {
      icon: <Utensils className="text-green-600" size={32} />,
      title: "Pure South Indian Veg",
      description: "Authentic vegetarian cuisine prepared with traditional recipes and fresh ingredients.",
    },
    {
      icon: <Users className="text-yellow-600" size={32} />,
      title: "Any Event Size",
      description: "From intimate gatherings to large celebrations, we cater to events of all sizes.",
    },
    {
      icon: <Calendar className="text-red-600" size={32} />,
      title: "Flexible Scheduling",
      description: "Breakfast, lunch, dinner, or all-day catering services available.",
    },
    {
      icon: <Award className="text-green-600" size={32} />,
      title: "Award-Winning Quality",
      description: "Same quality and flavors that have made us a beloved restaurant.",
    },
  ];

  const eventTypes = [
    {
      name: "Weddings",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
      description: "Make your special day memorable with our authentic South Indian wedding feast.",
    },
    {
      name: "Birthday Parties",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      description: "Celebrate birthdays with delicious food that everyone will love.",
    },
    {
      name: "Corporate Events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      description: "Impress your clients and colleagues with our professional catering services.",
    },
    {
      name: "Anniversaries",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
      description: "Celebrate milestones with traditional South Indian delicacies.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/80 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200"
          alt="Catering service"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-4 font-bold">
              Catering Services
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Pure South Indian vegetarian catering for weddings, birthdays, and all special events
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-green-700 text-3xl md:text-4xl mb-4 font-bold">Why Choose Our Catering?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We bring the authentic flavors of Ganesh Bhavan to your special events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-gray-900 text-xl mb-3 font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-green-700 text-3xl md:text-4xl mb-4 font-bold">Events We Cater</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide catering services for all types of celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-green-700 text-2xl mb-3 font-bold">{event.name}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-green-700 text-3xl md:text-4xl mb-4 font-bold">What's Included</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Complete South Indian Thali",
              "Freshly prepared on-site or delivered hot",
              "Traditional accompaniments (pickles, papad, etc.)",
              "Professional serving staff (optional)",
              "Customizable menu based on your preferences",
              "Hygienic food preparation and packaging",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} id="catering-form" className="py-16 bg-gradient-to-br from-green-50 to-gray-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-green-700 text-3xl md:text-4xl mb-4 font-bold">Request a Quote</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Click the button below to open our Google Form and request a customized quote for your event.
            </p>
          </div>
          <CateringForm 
            googleFormId={config.forms.catering}
          />
        </div>
      </section>
    </div>
  );
}
