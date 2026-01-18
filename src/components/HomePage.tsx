import React, { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Utensils, Clock, Award, Heart, Sparkles, ArrowRight, CheckCircle, Calendar, Truck, ChefHat } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import DomeGallery from "./DomeGallery";
import "./HomePage.css";
import { buildGoogleFormUrl, config } from "../config";

interface HomePageProps {
  onNavigateToOffers: () => void;
}

export default function HomePage({ 
  onNavigateToOffers,
}: HomePageProps) {
  const [api, setApi] = useState(null);
  const googleFormUrls = {
    subscription: buildGoogleFormUrl(config.forms.subscription),
    catering: buildGoogleFormUrl(config.forms.catering),
    vendor: buildGoogleFormUrl(config.forms.vendor),
    recipe: buildGoogleFormUrl(config.forms.recipe),
  };
  
  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000); // Auto-scroll every 2 seconds (faster rotation)

    return () => clearInterval(interval);
  }, [api]);

  const features = [
    {
      icon: <Utensils className="text-green-600" size={32} />,
      title: "Fresh Ingredients",
      description: "We use only the freshest, locally-sourced ingredients in every dish.",
    },
    {
      icon: <Clock className="text-yellow-600" size={32} />,
      title: "Daily Delivery",
      description: "Enjoy hot, delicious meals delivered right to your doorstep every day.",
    },
    {
      icon: <Award className="text-red-600" size={32} />,
      title: "Award Winning",
      description: "Recognized for our authentic flavors and exceptional service.",
    },
    {
      icon: <Heart className="text-green-600" size={32} />,
      title: "Made with Love",
      description: "Every meal is prepared with passion and care by our expert chefs.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Notice - Festival Offers Section */}
      <section className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 py-2 md:py-3 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onNavigateToOffers}
            className="w-full flex items-center justify-center gap-2 text-center hover:opacity-90 transition-opacity cursor-pointer"
          >
            <Sparkles className="text-white animate-pulse hidden sm:block" size={18} />
            <div className="flex-1">
              <h3 className="text-white text-sm sm:text-base md:text-lg font-bold">
                🎉 Notice - Festival Offers 🎉
              </h3>
              <p className="text-white/95 text-xs sm:text-sm mt-0.5">
                Special festive discounts available! Click to see more details.
              </p>
            </div>
            <Sparkles className="text-white animate-pulse hidden sm:block" size={18} />
          </button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1588644525273-f37b60d78512?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8"
          alt="Delicious food"
          className="hero-background-image"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 background-img-a" >
            <h1 className="text-white text-5xl md:text-6xl mb-6 max-w-2xl">
              Authentic Flavors
              <span className="block text-yellow-400">Delivered Daily</span>
            </h1>
            <p className="text-white/90 text-xl mb-8 max-w-xl">
              Subscribe to our daily meal service and enjoy restaurant-quality food at home. Choose from our diverse weekly menus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={googleFormUrls.subscription}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg text-center"
              >
                Subscribe Now
              </a>
              <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full hover:bg-white/20 transition-all">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialities Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-green-700 text-4xl mb-4">Specialities of Ganesh Bhavan - A Preview</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover our signature dishes and authentic South Indian vegetarian cuisine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-green-100">
              <div className="text-4xl mb-4">🍛</div>
              <h3 className="text-green-700 text-xl mb-2 font-bold">Authentic South Indian Thali</h3>
              <p className="text-gray-600">
                Complete meals featuring rice, sambar, rasam, vegetables, and traditional accompaniments. 
                A perfect blend of flavors and nutrition.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-yellow-100">
              <div className="text-4xl mb-4">🥘</div>
              <h3 className="text-yellow-700 text-xl mb-2 font-bold">Traditional Dosa Varieties</h3>
              <p className="text-gray-600">
                Crispy, golden dosas served with coconut chutney and sambar. From plain to masala, 
                each dosa is a culinary masterpiece.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-red-100">
              <div className="text-4xl mb-4">🍲</div>
              <h3 className="text-red-700 text-xl mb-2 font-bold">Sambar & Rasam</h3>
              <p className="text-gray-600">
                Hearty lentil-based soups with aromatic spices. Our sambar and rasam are made 
                with fresh ingredients and traditional recipes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-orange-100">
              <div className="text-4xl mb-4">🍚</div>
              <h3 className="text-orange-700 text-xl mb-2 font-bold">Biryani & Pulao</h3>
              <p className="text-gray-600">
                Fragrant rice dishes cooked with vegetables and aromatic spices. Perfect for 
                special occasions and everyday meals.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-green-100">
              <div className="text-4xl mb-4">🥗</div>
              <h3 className="text-green-700 text-xl mb-2 font-bold">Fresh Vegetable Curries</h3>
              <p className="text-gray-600">
                Seasonal vegetables cooked in traditional South Indian style with coconut, 
                curry leaves, and authentic spices.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-yellow-100">
              <div className="text-4xl mb-4">🍰</div>
              <h3 className="text-yellow-700 text-xl mb-2 font-bold">Traditional Sweets</h3>
              <p className="text-gray-600">
                Homemade South Indian sweets like payasam, kesari, and more. Perfect ending 
                to any meal or for special celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-green-700 text-4xl mb-4">Why Choose Ganesh Bhavan?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to bringing you the best dining experience, whether you dine in or enjoy our meals at home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white text-4xl md:text-5xl mb-6 font-bold">
                Daily Meal Subscription Service
          </h2>
              <p className="text-white/90 text-lg md:text-xl mb-6">
                Experience the convenience of having authentic South Indian vegetarian meals delivered fresh to your doorstep every day. Our subscription service brings the flavors of Ganesh Bhavan directly to your home.
              </p>
              <p className="text-white/90 text-lg md:text-xl mb-8">
                Subscribe to our flexible meal plans and enjoy restaurant-quality food without the hassle of cooking. Choose your preferred dates, customize your meals, and let us take care of the rest.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-yellow-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Fresh Daily Delivery</h3>
                    <p className="text-white/80">Hot, delicious meals prepared fresh each morning and delivered to your door</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-yellow-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Flexible Plans</h3>
                    <p className="text-white/80">Choose from various subscription durations that fit your schedule and needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-yellow-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Customizable Menu</h3>
                    <p className="text-white/80">Select your preferred meals from our diverse weekly rotating menu</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-yellow-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Authentic Flavors</h3>
                    <p className="text-white/80">Same quality and taste you love from our restaurant, delivered fresh</p>
                  </div>
                </div>
              </div>

          <a
            href={googleFormUrls.subscription}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full hover:bg-yellow-500 transition-all shadow-lg font-semibold text-lg text-center"
          >
            Start Your Subscription
          </a>
            </div>
            <div>
              <img
                src="https://ik.imagekit.io/qbnsahjpu/assets/Ganesh%20Bhavan/lunch.png"
                alt="Meal subscription"
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-green-700 text-4xl text-center mb-12">Our Delicious Creations</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              duration: 35,
              dragFree: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[
                {
                  src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=80",
                  alt: "Masala Dosa",
                },
                {
                  src: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&auto=format&fit=crop&q=80",
                  alt: "Sambar and Rice",
                },
                {
                  src: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Vegetable Biryani",
                },
                // {
                //   src: "https://images.unsplash.com/photo-1742281258189-3b933879867a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
                //   alt: "Idli with Sambar",
                // },
                {
                  src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Vegetable Curry",
                },
                {
                  src: "https://images.unsplash.com/photo-1633383718081-22ac93e3db65?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Rasam",
                },
                {
                  src: "https://images.unsplash.com/photo-1559561724-732dbca7be1e?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Payasam",
                },
                {
                  src: "https://images.unsplash.com/photo-1714611446765-3e85644ea4ae?q=80&w=654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Uttapam",
                },
              ].map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative w-full h-80 rounded-xl overflow-hidden group" style={{ minHeight: '320px', backgroundSize: 'cover', minWidth: '420px', maxHeight: '320px', maxWidth: '320px' }}>
                    <ImageWithFallback
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      style={{ width: '100%', height: '320px', objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-xl font-semibold">{item.alt}</h3>
                      </div> */}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Meet our Happy Customers - Dome Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-green-700 text-4xl md:text-5xl font-bold mb-4">Meet our Happy Customers</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See what our valued customers have to say about their experience with Ganesh Bhavan
            </p>
          </div>
          <div style={{ width: '100%', height: '600px' }}>
            <DomeGallery 
              images={[
                { src: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=80', alt: 'Masala Dosa' },
                { src: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&auto=format&fit=crop&q=80', alt: 'Sambar and Rice' },
                { src: 'https://images.unsplash.com/photo-1694849789325-914b71ab4075?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Vegetable Biryani' },
                { src: 'https://images.unsplash.com/photo-1742281258189-3b933879867a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8', alt: 'Idli with Sambar' },
                { src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Vegetable Curry' },
                { src: 'https://images.unsplash.com/photo-1633383718081-22ac93e3db65?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Rasam' },
                { src: 'https://images.unsplash.com/photo-1559561724-732dbca7be1e?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Payasam' },
                { src: 'https://images.unsplash.com/photo-1714611446765-3e85644ea4ae?q=80&w=654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Uttapam' },
                { src: 'https://images.unsplash.com/photo-1551218372-a8789b81b253?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Recipe sharing' },
                { src: 'https://plus.unsplash.com/premium_photo-1682092039530-584ae1d9da7f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SU5ESUFOJTIwcGVvcGxlfGVufDB8fDB8fHww', alt: 'Vendor partnership' },
                { src: 'https://images.unsplash.com/photo-1534235187448-833893dfe3e0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fElORElBTiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D', alt: 'Vendor partnership' },
                { src: 'https://images.unsplash.com/photo-1524081081171-7960da1de373?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fElORElBTiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D', alt: 'Vendor partnership' },
                { src: 'https://plus.unsplash.com/premium_photo-1722682239201-21c8173e776b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fElORElBTiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D', alt: 'Vendor partnership' },
                { src: 'https://images.unsplash.com/photo-1641877953739-8cab85119201?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fElORElBTiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D', alt: 'Vendor partnership' },
                { src: 'https://images.unsplash.com/photo-1641279676778-3c94588147fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fElORElBTiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D', alt: 'Vendor partnership' },
                { src: 'https://plus.unsplash.com/premium_photo-1682096111256-e020381ec730?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fElORElBTiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D', alt: 'Vendor partnership' },
                { src: 'https://images.unsplash.com/photo-1622182473147-579eab905ef9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fElORElBTiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D', alt: 'Vendor partnership' },
                { src: 'https://plus.unsplash.com/premium_photo-1661730060591-5d554b20584e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxJTkRJQU4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D', alt: 'Vendor partnership' },
                { src: 'https://plus.unsplash.com/premium_photo-1682089894837-e01e5cb8e471?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ5fHxJTkRJQU4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D', alt: 'Vendor partnership' },
                { src: 'https://images.unsplash.com/photo-1697305593250-b210b2bbb3d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxJTkRJQU4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D', alt: 'Vendor partnership' },
                { src: 'https://plus.unsplash.com/premium_photo-1682090811844-e0a89fb2c780?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxJTkRJQU4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D', alt: 'Vendor partnership' },
                { src: 'https://images.unsplash.com/photo-1582797536372-862bb193b69a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHxJTkRJQU4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D', alt: 'Vendor partnership' },
                { src: 'https://images.unsplash.com/photo-1743757452137-e75485da5b21?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM3fHxJTkRJQU4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D', alt: 'Vendor partnership' },

              ]}
              grayscale={false}
              overlayBlurColor="#ffffff"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-green-700 text-3xl md:text-4xl mb-4 font-bold">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our additional services and opportunities
            </p>
          </div>

          <div className="space-y-16">
            {/* Catering Service Panel */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl" style={{ marginBottom: '80px' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
              <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758810741375-0fea503c9cbd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Catering service"
                    className="w-full h-full object-cover img-services"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Utensils className="text-green-600" size={32} />
                    <h3 className="text-green-700 text-3xl md:text-4xl font-bold">Catering Services</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">
                    Make your special events unforgettable with our pure South Indian vegetarian catering services. 
                    We bring the authentic flavors of Ganesh Bhavan to weddings, birthday parties, corporate events, 
                    anniversaries, and all your celebrations.
                  </p>
                  <p className="text-gray-600 text-lg mb-6">
                    Our experienced team handles everything from menu planning to on-site service, ensuring your 
                    guests enjoy restaurant-quality food prepared with the same care and authenticity that has 
                    made us a beloved establishment.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-gray-700">Weddings & Birthdays</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-gray-700">Corporate Events</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-gray-700">Breakfast, Lunch & Dinner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-gray-700">Customizable Menus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-gray-700">Professional Service Staff</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-gray-700">Any Event Size</span>
                    </div>
                  </div>
                  <a
                    href={googleFormUrls.catering}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-2 font-semibold text-lg w-full sm:w-auto"
                  >
                    Learn More & Request Quote
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Recipe Submission Panel */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl overflow-hidden shadow-xl border-2 border-yellow-200"  style={{ marginBottom: '80px' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <ChefHat className="text-yellow-600" size={32} />
                    <h3 className="text-yellow-700 text-3xl md:text-4xl font-bold">🌟 Share Your Recipe 🌟</h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-6">
                    Do you have a unique hometown recipe passed down through generations? Share it with us and 
                    help preserve the rich culinary heritage of India! If your recipe is selected, it will be 
                    featured on our menu with your name as the creator.
                  </p>
                  <p className="text-gray-700 text-lg mb-6">
                    We're looking for authentic, traditional recipes from different regions of India. When your 
                    recipe is featured, you'll receive exciting gifts and recognition for helping us celebrate 
                    the diversity of Indian cuisine.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-yellow-600" size={20} />
                      <span className="text-gray-700">Get Featured on Menu</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-yellow-600" size={20} />
                      <span className="text-gray-700">Receive Exciting Gifts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-yellow-600" size={20} />
                      <span className="text-gray-700">Preserve Your Heritage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-yellow-600" size={20} />
                      <span className="text-gray-700">Recognition & Rewards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-yellow-600" size={20} />
                      <span className="text-gray-700">Share Family Traditions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-yellow-600" size={20} />
                      <span className="text-gray-700">Help Others Discover</span>
                    </div>
                  </div>
                  <a
                    href={googleFormUrls.recipe}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-2 font-semibold text-lg w-full sm:w-auto"
                    style={{ display: 'block' }}
                  >
                    Submit Your Recipe
                  </a>
                </div>
                <div className="relative h-80 lg:h-auto order-1 lg:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603554593710-89285666b691?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    // src="https://images.unsplash.com/photo-1619193100179-af4cc742ed3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                    alt="Recipe sharing"
                    className="w-full h-full object-cover img-services"
                  />
                </div>
              </div>
            </div>

            {/* Vendor Partnership Panel */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl"  style={{ marginBottom: '80px' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
              <ImageWithFallback
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800"
                    alt="Vendor partnership"
                    className="w-full h-full object-cover img-services"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Truck className="text-green-600" size={32} />
                    <h3 className="text-green-700 text-3xl md:text-4xl font-bold">Vendor Partnership</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">
                    Are you a vegetable vendor, grocery supplier, or spice merchant? Partner with Ganesh Bhavan 
                    and grow your business with a trusted, established restaurant. We value long-term relationships 
                    and believe in fair trade practices.
                  </p>
                  <p className="text-gray-600 text-lg mb-6">
                    We're always looking for quality suppliers who share our commitment to freshness, authenticity, 
                    and excellence. As our partner, you'll benefit from regular orders, competitive pricing, and 
                    the opportunity to grow alongside a successful restaurant.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-gray-700">Long-term Partnership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-gray-700">Regular Orders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-gray-700">Fair Pricing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-gray-700">Growth Opportunity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-gray-700">Vegetable & Grocery Suppliers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-gray-700">Spice Merchants Welcome</span>
                    </div>
                  </div>
                  <a
                    href={googleFormUrls.vendor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-2 font-semibold text-lg w-full sm:w-auto"
                  >
                    Partner With Us
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
