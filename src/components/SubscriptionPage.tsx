import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "./ui/select";
import { Calendar as CalendarIcon, Users, MapPin, Phone, Clock } from "lucide-react";

// Weekly menu data
const weeklyMenus = {
  Monday: [
    { name: "Butter Chicken", description: "Creamy tomato curry with tender chicken" },
    { name: "Dal Makhani", description: "Black lentils in rich creamy sauce" },
    { name: "Garlic Naan", description: "Freshly baked flatbread" },
    { name: "Jeera Rice", description: "Basmati rice with cumin" },
  ],
  Tuesday: [
    { name: "Chicken Biryani", description: "Aromatic rice with spiced chicken" },
    { name: "Raita", description: "Yogurt with cucumber and spices" },
    { name: "Tandoori Chicken", description: "Grilled marinated chicken" },
    { name: "Mixed Veg Curry", description: "Seasonal vegetables in curry" },
  ],
  Wednesday: [
    { name: "Paneer Tikka Masala", description: "Cottage cheese in tomato cream sauce" },
    { name: "Chole Bhature", description: "Chickpea curry with fried bread" },
    { name: "Aloo Gobi", description: "Potato and cauliflower curry" },
    { name: "Roti", description: "Whole wheat flatbread" },
  ],
  Thursday: [
    { name: "Fish Curry", description: "Fresh fish in coconut curry" },
    { name: "Prawn Masala", description: "Spiced prawns in rich gravy" },
    { name: "Steamed Rice", description: "Plain basmati rice" },
    { name: "Papad", description: "Crispy lentil wafers" },
  ],
  Friday: [
    { name: "Lamb Rogan Josh", description: "Tender lamb in aromatic curry" },
    { name: "Palak Paneer", description: "Cottage cheese in spinach curry" },
    { name: "Pulao", description: "Fragrant basmati rice" },
    { name: "Naan", description: "Traditional flatbread" },
  ],
  Saturday: [
    { name: "Thali Combo", description: "Complete meal with variety" },
    { name: "Chicken Korma", description: "Mild creamy chicken curry" },
    { name: "Malai Kofta", description: "Veggie balls in cream sauce" },
    { name: "Kulcha", description: "Stuffed flatbread" },
  ],
  Sunday: [
    { name: "Special Thali", description: "Sunday special complete meal" },
    { name: "Mutton Curry", description: "Slow-cooked mutton in rich gravy" },
    { name: "Masala Dosa", description: "Crispy crepe with potato filling" },
    { name: "Filter Coffee", description: "South Indian style coffee" },
  ],
};

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function SubscriptionPage() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    numberOfPeople: "",
    subscriptionDays: "",
  });

  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const subscriptionPlans = [
    { days: 7, label: "7 Days", color: "bg-yellow-100 border-yellow-300" },
    { days: 14, label: "14 Days", color: "bg-red-100 border-red-300" },
    { days: 21, label: "21 Days", color: "bg-green-100 border-green-300" },
    { days: 28, label: "28 Days", color: "bg-yellow-100 border-yellow-300" },
  ];

  const handleDaysSelection = (days: string) => {
    setFormData({ ...formData, subscriptionDays: days });
    setSelectedDates([]);
    setShowCalendar(true);
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (!date || !formData.subscriptionDays) return;

    const maxDays = parseInt(formData.subscriptionDays);
    const dateIndex = selectedDates.findIndex(
      (d) => d.toDateString() === date.toDateString()
    );

    if (dateIndex > -1) {
      // Remove date if already selected
      setSelectedDates(selectedDates.filter((_, i) => i !== dateIndex));
    } else if (selectedDates.length < maxDays) {
      // Add date if under limit
      setSelectedDates([...selectedDates, date].sort((a, b) => a.getTime() - b.getTime()));
    }
  };

  const getDayName = (date: Date) => {
    return dayNames[date.getDay()];
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const generateGoogleFormURL = () => {
    // Replace with your actual Google Form URL
    // This is a placeholder - you'll need to create a Google Form and get the prefill URL
    const baseURL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";
    
    const params = new URLSearchParams({
      "entry.name": formData.name,
      "entry.address": formData.address,
      "entry.phone": formData.phone,
      "entry.people": formData.numberOfPeople,
      "entry.days": formData.subscriptionDays,
      "entry.dates": selectedDates.map(d => formatDate(d)).join(", "),
    });

    return `${baseURL}?${params.toString()}`;
  };

  const generateWhatsAppMessage = () => {
    const message = `
🍽️ *Ganesh Bhavan Subscription Request*

👤 *Name:* ${formData.name}
📍 *Address:* ${formData.address}
📱 *WhatsApp Number:* ${formData.phone}
👨‍👩‍👧‍👦 *Number of People:* ${formData.numberOfPeople}
📅 *Subscription Duration:* ${formData.subscriptionDays} days

*Selected Delivery Dates:*
${selectedDates.map((date, idx) => {
  const dayName = getDayName(date);
  const menu = weeklyMenus[dayName as keyof typeof weeklyMenus];
  return `${idx + 1}. ${formatDate(date)} (${dayName})\n   Menu: ${menu.map(item => item.name).join(', ')}`;
}).join('\n\n')}

Please confirm my subscription and provide payment details. Thank you!
    `.trim();

    // Replace with actual restaurant WhatsApp number
    const phoneNumber = "1234567890"; // Restaurant's WhatsApp number
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedDates.length !== parseInt(formData.subscriptionDays)) {
      alert(`Please select exactly ${formData.subscriptionDays} dates from the calendar.`);
      return;
    }

    // Open Google Form in new tab
    const googleFormURL = generateGoogleFormURL();
    window.open(googleFormURL, '_blank');

    // Small delay before opening WhatsApp
    setTimeout(() => {
      const whatsappURL = generateWhatsAppMessage();
      window.open(whatsappURL, '_blank');
    }, 1000);
  };

  const isDateDisabled = (date: Date) => {
    // Disable dates before today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-green-700 text-5xl mb-4">
            Monthly Subscription Plans
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Subscribe to daily meal deliveries from Ganesh Bhavan. Choose your plan, pick your dates, and enjoy delicious food at home!
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="mb-12">
          <h2 className="text-green-700 text-2xl mb-6 text-center">Choose Your Plan</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {subscriptionPlans.map((plan) => (
              <button
                key={plan.days}
                onClick={() => handleDaysSelection(plan.days.toString())}
                className={`${plan.color} border-2 p-6 rounded-xl text-center transition-all hover:scale-105 ${
                  formData.subscriptionDays === plan.days.toString()
                    ? "ring-4 ring-green-500 shadow-xl"
                    : "shadow-md"
                }`}
              >
                <div className="text-3xl mb-2">{plan.days}</div>
                <div className="text-gray-700">{plan.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Contact Information */}
            <Card className="p-6 bg-white shadow-lg">
              <h2 className="text-green-700 text-2xl mb-6">Your Details</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                    <Users size={18} className="text-green-600" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="flex items-center gap-2 mb-2">
                    <MapPin size={18} className="text-red-600" />
                    Delivery Address *
                  </Label>
                  <Textarea
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Enter your complete delivery address"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                    <Phone size={18} className="text-yellow-600" />
                    WhatsApp Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    We'll contact you on WhatsApp to confirm your order
                  </p>
                </div>

                <div>
                  <Label htmlFor="people" className="flex items-center gap-2 mb-2">
                    <Users size={18} className="text-green-600" />
                    Number of People *
                  </Label>
                  <Select
                    value={formData.numberOfPeople}
                    onValueChange={(value) => setFormData({ ...formData, numberOfPeople: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of people" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Person" : "People"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            {/* Calendar Selection */}
            {showCalendar && (
              <Card className="p-6 bg-white shadow-lg">
                <h2 className="text-green-700 text-2xl mb-4 flex items-center gap-2">
                  <CalendarIcon size={24} />
                  Select Your Delivery Dates
                </h2>
                <p className="text-gray-600 mb-4">
                  Choose {formData.subscriptionDays} dates for meal delivery. 
                  Selected: {selectedDates.length}/{formData.subscriptionDays}
                </p>
                
                <div className="flex justify-center">
                  <Calendar
                    mode="multiple"
                    selected={selectedDates}
                    onSelect={(dates) => {
                      if (Array.isArray(dates)) {
                        const maxDays = parseInt(formData.subscriptionDays);
                        if (dates.length <= maxDays) {
                          setSelectedDates(dates.sort((a, b) => a.getTime() - b.getTime()));
                        }
                      }
                    }}
                    disabled={isDateDisabled}
                    className="rounded-md border"
                  />
                </div>
              </Card>
            )}
          </div>

          {/* Selected Dates and Menu Preview */}
          {selectedDates.length > 0 && (
            <Card className="p-6 bg-white shadow-lg mb-8">
              <h2 className="text-green-700 text-2xl mb-6 flex items-center gap-2">
                <Clock size={24} />
                Your Menu Schedule
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedDates.map((date, idx) => {
                  const dayName = getDayName(date);
                  const menu = weeklyMenus[dayName as keyof typeof weeklyMenus];
                  
                  return (
                    <div
                      key={idx}
                      className="border-2 border-gray-200 rounded-lg p-4 hover:border-green-500 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="text-green-700">{dayName}</div>
                          <div className="text-sm text-gray-600">{formatDate(date)}</div>
                        </div>
                        <div className="bg-yellow-400 text-gray-900 px-2 py-1 rounded text-sm">
                          Day {idx + 1}
                        </div>
                      </div>
                      
                      <div className="text-sm space-y-1">
                        {menu.map((item, itemIdx) => (
                          <div key={itemIdx} className="text-gray-700">
                            • {item.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              disabled={
                !formData.name ||
                !formData.address ||
                !formData.phone ||
                !formData.numberOfPeople ||
                selectedDates.length !== parseInt(formData.subscriptionDays)
              }
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-6 text-lg rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit & Contact via WhatsApp
            </Button>
            
            <p className="text-gray-600 mt-4 text-sm">
              After clicking submit, you'll be redirected to Google Forms for confirmation 
              and WhatsApp to finalize your order with our team.
            </p>
          </div>
        </form>

        {/* Info Section */}
        <div className="mt-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-center">
          <h3 className="text-gray-900 text-2xl mb-4">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-800">
            <div>
              <div className="text-4xl mb-2">1️⃣</div>
              <div>Choose your plan duration</div>
            </div>
            <div>
              <div className="text-4xl mb-2">2️⃣</div>
              <div>Select your delivery dates</div>
            </div>
            <div>
              <div className="text-4xl mb-2">3️⃣</div>
              <div>Fill in your details</div>
            </div>
            <div>
              <div className="text-4xl mb-2">4️⃣</div>
              <div>Confirm via WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
