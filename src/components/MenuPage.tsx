import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function MenuPage() {
  const menuCategories = [
    {
      name: "Monday Special",
      color: "bg-green-100 text-green-700",
      items: [
        { name: "Butter Chicken", description: "Creamy tomato curry with tender chicken", price: "$12.99" },
        { name: "Dal Makhani", description: "Black lentils in rich creamy sauce", price: "$9.99" },
        { name: "Garlic Naan", description: "Freshly baked flatbread", price: "$3.99" },
        { name: "Jeera Rice", description: "Basmati rice with cumin", price: "$4.99" },
      ],
    },
    {
      name: "Tuesday Delight",
      color: "bg-yellow-100 text-yellow-700",
      items: [
        { name: "Chicken Biryani", description: "Aromatic rice with spiced chicken", price: "$13.99" },
        { name: "Raita", description: "Yogurt with cucumber and spices", price: "$3.99" },
        { name: "Tandoori Chicken", description: "Grilled marinated chicken", price: "$11.99" },
        { name: "Mixed Veg Curry", description: "Seasonal vegetables in curry", price: "$9.99" },
      ],
    },
    {
      name: "Wednesday Feast",
      color: "bg-red-100 text-red-700",
      items: [
        { name: "Paneer Tikka Masala", description: "Cottage cheese in tomato cream sauce", price: "$10.99" },
        { name: "Chole Bhature", description: "Chickpea curry with fried bread", price: "$11.99" },
        { name: "Aloo Gobi", description: "Potato and cauliflower curry", price: "$8.99" },
        { name: "Roti", description: "Whole wheat flatbread", price: "$2.99" },
      ],
    },
    {
      name: "Thursday Treat",
      color: "bg-green-100 text-green-700",
      items: [
        { name: "Fish Curry", description: "Fresh fish in coconut curry", price: "$14.99" },
        { name: "Prawn Masala", description: "Spiced prawns in rich gravy", price: "$15.99" },
        { name: "Steamed Rice", description: "Plain basmati rice", price: "$3.99" },
        { name: "Papad", description: "Crispy lentil wafers", price: "$2.99" },
      ],
    },
    {
      name: "Friday Special",
      color: "bg-yellow-100 text-yellow-700",
      items: [
        { name: "Lamb Rogan Josh", description: "Tender lamb in aromatic curry", price: "$16.99" },
        { name: "Palak Paneer", description: "Cottage cheese in spinach curry", price: "$10.99" },
        { name: "Pulao", description: "Fragrant basmati rice", price: "$5.99" },
        { name: "Naan", description: "Traditional flatbread", price: "$3.49" },
      ],
    },
    {
      name: "Weekend Special",
      color: "bg-red-100 text-red-700",
      items: [
        { name: "Thali Combo", description: "Complete meal with variety", price: "$18.99" },
        { name: "Chicken Korma", description: "Mild creamy chicken curry", price: "$12.99" },
        { name: "Malai Kofta", description: "Veggie balls in cream sauce", price: "$11.99" },
        { name: "Masala Dosa", description: "Crispy crepe with potato filling", price: "$9.99" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-green-700 text-5xl mb-4">Our Weekly Menu</h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Explore our daily rotating menu featuring authentic flavors and fresh ingredients. Each day brings a new culinary adventure!
          </p>
        </div>

        {/* Specialities Section */}
        <div className="mb-12 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl mb-6 text-center font-bold">Specialities of Ganesh Bhavan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">🍛</div>
              <h3 className="text-xl mb-2 font-semibold">Authentic South Indian Thali</h3>
              <p className="text-white/90 text-sm">
                Complete meals with rice, sambar, rasam, vegetables, and traditional accompaniments.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">🥘</div>
              <h3 className="text-xl mb-2 font-semibold">Traditional Dosa Varieties</h3>
              <p className="text-white/90 text-sm">
                Crispy, golden dosas served with coconut chutney and sambar.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">🍲</div>
              <h3 className="text-xl mb-2 font-semibold">Sambar & Rasam</h3>
              <p className="text-white/90 text-sm">
                Hearty lentil-based soups with aromatic spices and fresh ingredients.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">🍚</div>
              <h3 className="text-xl mb-2 font-semibold">Biryani & Pulao</h3>
              <p className="text-white/90 text-sm">
                Fragrant rice dishes cooked with vegetables and aromatic spices.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">🥗</div>
              <h3 className="text-xl mb-2 font-semibold">Fresh Vegetable Curries</h3>
              <p className="text-white/90 text-sm">
                Seasonal vegetables in traditional South Indian style with authentic spices.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">🍰</div>
              <h3 className="text-xl mb-2 font-semibold">Traditional Sweets</h3>
              <p className="text-white/90 text-sm">
                Homemade South Indian sweets perfect for celebrations.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1728745118618-941ec839208f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBpbmRpYW4lMjBmb29kfGVufDF8fHx8MTc2MDY5NDkwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Our Menu"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Menu Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {menuCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`${category.color} px-6 py-4`}>
                <h2 className="text-2xl">{category.name}</h2>
              </div>
              <div className="p-6 space-y-4">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex justify-between items-start border-b border-gray-100 pb-4 last:border-0"
                  >
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <span className="text-green-600 ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12">
          <h2 className="text-white text-3xl mb-4">
            Subscribe for Daily Deliveries
          </h2>
          <p className="text-white/90 text-xl mb-6">
            Get these delicious meals delivered to your door every day!
          </p>
          <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full hover:bg-yellow-500 transition-all shadow-lg">
            Start Your Subscription
          </button>
        </div>
      </div>
    </div>
  );
}
