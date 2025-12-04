import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Gift, Percent, Calendar, Star, ArrowRight } from "lucide-react";

interface FestivalOffersPageProps {
  onNavigateToSubscription?: () => void;
}

export default function FestivalOffersPage({ onNavigateToSubscription }: FestivalOffersPageProps) {
  const specialOffers = [
    {
      id: 1,
      title: "Diwali Special",
      discount: "20% OFF",
      description: "Celebrate Diwali with our special thali. Get 20% off on all meal plans for the festival week.",
      validUntil: "Valid until November 15, 2025",
      image: "https://images.unsplash.com/photo-1728745118618-941ec839208f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBpbmRpYW4lMjBmb29kfGVufDF8fHx8MTc2MDY5NDkwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      code: "DIWALI2025",
    },
    {
      id: 2,
      title: "Holi Celebration",
      discount: "15% OFF",
      description: "Color your celebrations with our Holi special menu. Enjoy 15% discount on all subscription plans.",
      validUntil: "Valid until March 25, 2025",
      image: "https://images.unsplash.com/photo-1616632125404-33e2addbff09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBjb29raW5nfGVufDF8fHx8MTc2MDYwMTc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      code: "HOLI2025",
    },
    {
      id: 3,
      title: "New Year Special",
      discount: "25% OFF",
      description: "Start the new year with delicious meals! Get 25% off on 28-day subscription plans.",
      validUntil: "Valid until January 15, 2025",
      image: "https://images.unsplash.com/photo-1698653223689-24b0bfd5150b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzYwNjgxMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      code: "NEWYEAR2025",
    },
    {
      id: 4,
      title: "Eid Special",
      discount: "18% OFF",
      description: "Celebrate Eid with our special biryani and kebabs. Enjoy 18% discount on all meal plans.",
      validUntil: "Valid until April 20, 2025",
      image: "https://images.unsplash.com/photo-1728745118618-941ec839208f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBpbmRpYW4lMjBmb29kfGVufDF8fHx8MTc2MDY5NDkwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      code: "EID2025",
    },
  ];

  const generalOffers = [
    {
      icon: <Gift className="text-yellow-500" size={32} />,
      title: "First Time Customer",
      description: "Get 10% off on your first subscription order",
    },
    {
      icon: <Percent className="text-green-500" size={32} />,
      title: "Referral Bonus",
      description: "Refer a friend and both get 15% off on next order",
    },
    {
      icon: <Calendar className="text-red-500" size={32} />,
      title: "Long Term Plans",
      description: "Subscribe for 28 days and save up to 20%",
    },
    {
      icon: <Star className="text-orange-500" size={32} />,
      title: "Loyalty Rewards",
      description: "Earn points with every order and redeem for discounts",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/80 via-orange-500/80 to-red-500/80 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1728745118618-941ec839208f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBpbmRpYW4lMjBmb29kfGVufDF8fHx8MTc2MDY5NDkwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Festival celebration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-white animate-pulse" size={32} />
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
                Festival Offers
              </h1>
              <Sparkles className="text-white animate-pulse" size={32} />
            </div>
            <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto">
              Celebrate every festival with Ganesh Bhavan! Special discounts and offers await you.
            </p>
          </div>
        </div>
      </section>

      {/* Special Festival Offers */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-green-700 text-3xl md:text-4xl lg:text-5xl mb-4 font-bold">
              Special Festival Offers
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Limited time offers for various festivals throughout the year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {specialOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <ImageWithFallback
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-lg md:text-xl shadow-lg">
                    {offer.discount}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-green-700 text-2xl md:text-3xl font-bold">
                      {offer.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-base md:text-lg">
                    {offer.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Promo Code:</p>
                      <div className="flex items-center gap-2">
                        <code className="bg-gray-100 px-3 py-1 rounded-md font-mono text-sm md:text-base font-bold text-green-700">
                          {offer.code}
                        </code>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(offer.code);
                            alert(`Promo code ${offer.code} copied to clipboard!`);
                          }}
                          className="text-green-600 hover:text-green-700 text-sm"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{offer.validUntil}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Offers */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-green-700 text-3xl md:text-4xl lg:text-5xl mb-4 font-bold">
              Ongoing Offers
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Year-round offers and benefits for our valued customers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {generalOffers.map((offer, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className="flex justify-center mb-4">{offer.icon}</div>
                <h3 className="text-gray-900 text-xl md:text-2xl mb-3 font-semibold">
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4 font-bold">
            Ready to Avail These Offers?
          </h2>
          <p className="text-white/90 text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
            Subscribe now and enjoy delicious meals with amazing discounts!
          </p>
          <button 
            onClick={onNavigateToSubscription}
            className="bg-yellow-400 text-gray-900 px-8 md:px-12 py-4 md:py-5 rounded-full hover:bg-yellow-500 transition-all shadow-lg text-base md:text-lg font-semibold flex items-center gap-2 mx-auto"
          >
            Subscribe Now
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

