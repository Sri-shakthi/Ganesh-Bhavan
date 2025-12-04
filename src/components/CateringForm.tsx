import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "./ui/select";
import { Utensils, Phone, Users, Calendar, Mail } from "lucide-react";

interface CateringFormProps {
  restaurantWhatsApp: string;
  googleFormId: string;
}

export default function CateringForm({ restaurantWhatsApp, googleFormId }: CateringFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    numberOfGuests: "",
    eventMeal: "",
    eventDate: "",
    additionalInfo: "",
  });

  const generateWhatsAppMessage = () => {
    const message = `
🍽️ *Catering Order Request - Ganesh Bhavan*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || "Not provided"}
🎉 *Event Type:* ${formData.eventType}
👥 *Number of Guests:* ${formData.numberOfGuests}
🍛 *Event Meal:* ${formData.eventMeal}
📅 *Event Date:* ${formData.eventDate || "Not specified"}

*Additional Information:*
${formData.additionalInfo || "None"}

Please contact me to discuss the catering details. Thank you!
    `.trim();

    return `https://wa.me/${restaurantWhatsApp}?text=${encodeURIComponent(message)}`;
  };

  const generateGoogleFormURL = () => {
    const baseURL = `https://docs.google.com/forms/d/e/${googleFormId}/viewform`;
    const params = new URLSearchParams({
      "entry.name": formData.name,
      "entry.phone": formData.phone,
      "entry.email": formData.email || "",
      "entry.eventType": formData.eventType,
      "entry.guests": formData.numberOfGuests,
      "entry.meal": formData.eventMeal,
      "entry.date": formData.eventDate || "",
      "entry.additionalInfo": formData.additionalInfo || "",
    });
    return `${baseURL}?${params.toString()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.eventType || !formData.numberOfGuests || !formData.eventMeal) {
      alert("Please fill in all required fields.");
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

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      eventType: "",
      numberOfGuests: "",
      eventMeal: "",
      eventDate: "",
      additionalInfo: "",
    });
  };

  return (
    <Card className="p-6 md:p-8 bg-white shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Utensils className="text-green-600" size={32} />
        <h2 className="text-green-700 text-2xl md:text-3xl font-bold">Catering Services</h2>
      </div>
      <p className="text-gray-600 mb-6 text-base md:text-lg">
        We take catering orders for weddings, birthday functions, and all special events. 
        Pure South Indian vegetarian cuisine prepared with authentic flavors.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
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
          <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
            <Phone size={18} className="text-green-600" />
            Phone Number *
          </Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <Label htmlFor="email" className="flex items-center gap-2 mb-2">
            <Mail size={18} className="text-green-600" />
            Email (Optional)
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <Label htmlFor="eventType" className="flex items-center gap-2 mb-2">
            <Calendar size={18} className="text-green-600" />
            Catering Event Type *
          </Label>
          <Select
            value={formData.eventType}
            onValueChange={(value) => setFormData({ ...formData, eventType: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="birthday">Birthday Party</SelectItem>
              <SelectItem value="corporate">Corporate Event</SelectItem>
              <SelectItem value="anniversary">Anniversary</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="guests" className="flex items-center gap-2 mb-2">
            <Users size={18} className="text-green-600" />
            Number of Guests *
          </Label>
          <Input
            id="guests"
            type="number"
            required
            min="1"
            value={formData.numberOfGuests}
            onChange={(e) => setFormData({ ...formData, numberOfGuests: e.target.value })}
            placeholder="50"
          />
        </div>

        <div>
          <Label htmlFor="meal" className="flex items-center gap-2 mb-2">
            <Utensils size={18} className="text-green-600" />
            Event Meal *
          </Label>
          <Select
            value={formData.eventMeal}
            onValueChange={(value) => setFormData({ ...formData, eventMeal: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select meal type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="breakfast">Breakfast</SelectItem>
              <SelectItem value="lunch">Lunch</SelectItem>
              <SelectItem value="dinner">Dinner</SelectItem>
              <SelectItem value="all">All Meals</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="date" className="flex items-center gap-2 mb-2">
            <Calendar size={18} className="text-green-600" />
            Event Date (Optional)
          </Label>
          <Input
            id="date"
            type="date"
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="additionalInfo" className="mb-2">
            Additional Information (Optional)
          </Label>
          <Textarea
            id="additionalInfo"
            value={formData.additionalInfo}
            onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
            placeholder="Any special requirements or dietary restrictions..."
            rows={3}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-6 text-lg"
        >
          Submit Catering Request
        </Button>
      </form>
    </Card>
  );
}

