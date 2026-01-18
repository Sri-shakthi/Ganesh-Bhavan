import { ImageWithFallback } from "./figma/ImageWithFallback";
import RecipeForm from "./RecipeForm";
import { ChefHat, Gift, Star, Users, CheckCircle } from "lucide-react";
import { config } from "../config";

export default function RecipePage() {
  const benefits = [
    {
      icon: <Star className="text-yellow-600" size={32} />,
      title: "Featured on Menu",
      description: "Your recipe will be featured on our menu with your name as the creator.",
    },
    {
      icon: <Gift className="text-green-600" size={32} />,
      title: "Exciting Gifts",
      description: "Receive special gifts and rewards when your recipe is selected.",
    },
    {
      icon: <Users className="text-red-600" size={32} />,
      title: "Share Your Heritage",
      description: "Help us celebrate the diversity of Indian cuisine from different regions.",
    },
    {
      icon: <ChefHat className="text-orange-600" size={32} />,
      title: "Recognition",
      description: "Get recognition for preserving and sharing traditional family recipes.",
    },
  ];

  const featuredRecipes = [
    {
      name: "Grandma's Special Biryani",
      region: "Hyderabad",
      image: "https://images.unsplash.com/photo-1728745118618-941ec839208f?w=800",
      description: "A traditional recipe passed down through generations, now featured on our menu.",
    },
    {
      name: "Coastal Fish Curry",
      region: "Kerala",
      image: "https://images.unsplash.com/photo-1616632125404-33e2addbff09?w=800",
      description: "Authentic coastal flavors that bring the taste of Kerala to our restaurant.",
    },
    {
      name: "Mountain Style Dal",
      region: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1698653223689-24b0bfd5150b?w=800",
      description: "A unique recipe from the mountains, now loved by our customers.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/80 via-orange-600/80 to-red-600/80 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200"
          alt="Recipe sharing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-4 font-bold">
              🌟 Share Your Recipe 🌟
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Share your unique hometown recipe and get featured on our menu with exciting rewards!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-green-700 text-3xl md:text-4xl mb-4 font-bold">Why Share Your Recipe?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Be part of our mission to celebrate the rich diversity of Indian cuisine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center border border-gray-100"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-gray-900 text-xl mb-3 font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-green-700 text-3xl md:text-4xl mb-4 font-bold">Featured Recipes</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Some of the amazing recipes shared by our community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-green-700 text-xl font-bold">{recipe.name}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {recipe.region}
                    </span>
                  </div>
                  <p className="text-gray-600">{recipe.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-green-700 text-3xl md:text-4xl mb-4 font-bold">How It Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Share Your Recipe",
                description: "Submit your unique hometown recipe with instructions and images",
              },
              {
                step: "2",
                title: "We Review",
                description: "Our chefs review and test your recipe for authenticity and quality",
              },
              {
                step: "3",
                title: "Get Selected",
                description: "If selected, your recipe will be featured on our menu",
              },
              {
                step: "4",
                title: "Receive Rewards",
                description: "Get exciting gifts and recognition for sharing your recipe",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-gray-900 text-xl mb-2 font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-green-700 text-3xl md:text-4xl mb-4 font-bold">Submit Your Recipe</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Click the button below to open our Google Form and share your unique recipe with us.
            </p>
          </div>
          <RecipeForm 
            googleFormId={config.forms.recipe}
          />
        </div>
      </section>
    </div>
  );
}
