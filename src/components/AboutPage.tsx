import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Target, Award, Heart } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="text-red-600" size={40} />,
      title: "Passion for Food",
      description: "Every dish is crafted with love and dedication to authentic flavors.",
    },
    {
      icon: <Award className="text-yellow-600" size={40} />,
      title: "Quality First",
      description: "We use only the finest ingredients, sourced locally and sustainably.",
    },
    {
      icon: <Users className="text-green-600" size={40} />,
      title: "Community Focus",
      description: "Building relationships with our customers and supporting local farmers.",
    },
    {
      icon: <Target className="text-red-600" size={40} />,
      title: "Excellence",
      description: "Committed to delivering exceptional service and unforgettable taste.",
    },
  ];

  const team = [
    {
      name: "Chef Rajesh Kumar",
      role: "Head Chef",
      image: "https://images.unsplash.com/photo-1698653223689-24b0bfd5150b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzYwNjgxMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Priya Sharma",
      role: "Sous Chef",
      image: "https://images.unsplash.com/photo-1616632125404-33e2addbff09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBjb29raW5nfGVufDF8fHx8MTc2MDYwMTc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Amit Patel",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1728745118618-941ec839208f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBpbmRpYW4lMjBmb29kfGVufDF8fHx8MTc2MDY5NDkwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/80 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1667388968964-4aa652df0a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkaW5pbmd8ZW58MXx8fHwxNzYwNTk2ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Restaurant interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-white text-5xl md:text-6xl mb-4">Our Story</h1>
            <p className="text-white/90 text-xl max-w-2xl">
              A journey of flavors, passion, and tradition since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-green-700 text-4xl mb-6">
                Welcome to Ganesh Bhavan
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Founded in 2010, Ganesh Bhavan began with a simple mission: to bring authentic, home-cooked flavors to our community. What started as a small family kitchen has grown into a beloved restaurant serving hundreds of happy customers daily.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                Our recipes have been passed down through generations, each dish telling a story of tradition, culture, and love. We believe that food is more than just sustenance—it's a way to connect, celebrate, and create memories.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we're proud to offer our subscription service, bringing the same quality and care directly to your home. Every meal is prepared fresh daily by our dedicated team of chefs who pour their heart into every dish.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1698653223689-24b0bfd5150b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzYwNjgxMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chef cooking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-green-700 text-4xl mb-4">Our Journey</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              A timeline of milestones that shaped Ganesh Bhavan into what it is today
            </p>
          </div>

          <div className="space-y-12">
            {/* History Item 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className={`order-2 lg:order-1 ${1 % 2 === 0 ? 'lg:order-2' : ''}`}>
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1667388968964-4aa652df0a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkaW5pbmd8ZW58MXx8fHwxNzYwNTk2ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Restaurant opening"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className={`order-1 lg:order-2 ${1 % 2 === 0 ? 'lg:order-1' : ''}`}>
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                  <div className="text-yellow-500 text-sm font-semibold mb-2">2010</div>
                  <h3 className="text-green-700 text-2xl md:text-3xl mb-4 font-bold">The Beginning</h3>
                  <p className="text-gray-600 text-base md:text-lg mb-4">
                    Ganesh Bhavan opened its doors with a simple vision: to serve authentic, home-cooked Indian meals. 
                    Starting as a small family-run kitchen, we began with just a handful of recipes passed down through generations.
                  </p>
                  <p className="text-gray-600 text-base md:text-lg">
                    Our first location was a modest space, but the warmth and flavors we served quickly won the hearts of our community.
                  </p>
                </div>
              </div>
            </div>

            {/* History Item 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1616632125404-33e2addbff09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBjb29raW5nfGVufDF8fHx8MTc2MDYwMTc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Award recognition"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                  <div className="text-yellow-500 text-sm font-semibold mb-2">2018</div>
                  <h3 className="text-green-700 text-2xl md:text-3xl mb-4 font-bold">Recognition & Awards</h3>
                  <p className="text-gray-600 text-base md:text-lg mb-4">
                    Our commitment to quality and authenticity earned us recognition as "Best Indian Restaurant" in the city. 
                    This award validated our mission and motivated us to continue raising the bar.
                  </p>
                  <p className="text-gray-600 text-base md:text-lg">
                    We also received the "Customer Choice Award" for three consecutive years, a testament to the love and 
                    trust our customers have in us.
                  </p>
                </div>
              </div>
            </div>

            {/* History Item 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-2">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1728745118618-941ec839208f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBpbmRpYW4lMjBmb29kfGVufDF8fHx8MTc2MDY5NDkwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Subscription service"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-1">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                  <div className="text-yellow-500 text-sm font-semibold mb-2">2020 - Present</div>
                  <h3 className="text-green-700 text-2xl md:text-3xl mb-4 font-bold">Innovation & Service</h3>
                  <p className="text-gray-600 text-base md:text-lg mb-4">
                    Adapting to changing times, we launched our subscription service, bringing Ganesh Bhavan's authentic flavors 
                    directly to our customers' homes. This innovation allowed us to serve more families while maintaining our 
                    commitment to quality.
                  </p>
                  <p className="text-gray-600 text-base md:text-lg">
                    Today, we continue to grow, serving hundreds of customers daily, both in-house and through our delivery service, 
                    always staying true to our founding principles of authenticity, quality, and love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-green-700 text-4xl mb-4">Our Values</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing ingredients to serving our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-gray-900 text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-green-700 text-4xl mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              The passionate chefs behind your favorite meals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-80 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-gray-900 text-xl mb-2">{member.name}</h3>
                  <p className="text-green-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 text-4xl mb-4">
            Join Our Food Family
          </h2>
          <p className="text-gray-800 text-xl mb-8 max-w-2xl mx-auto">
            Experience the Ganesh Bhavan difference with our convenient subscription service.
          </p>
          <button className="bg-green-600 text-white px-10 py-4 rounded-full hover:bg-green-700 transition-all shadow-lg">
            Subscribe Today
          </button>
        </div>
      </section>
    </div>
  );
}
