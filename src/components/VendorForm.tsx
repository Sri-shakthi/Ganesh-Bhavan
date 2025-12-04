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
import { Store, Phone, Mail, Package } from "lucide-react";

interface VendorFormProps {
  restaurantWhatsApp: string;
  googleFormId: string;
}

export default function VendorForm({ restaurantWhatsApp, googleFormId }: VendorFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vendorType: "",
    businessName: "",
    message: "",
  });

  const generateWhatsAppMessage = () => {
    const message = `
🏪 *Vendor Contact - Ganesh Bhavan*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || "Not provided"}
🏢 *Business Name:* ${formData.businessName || "Not provided"}
📦 *Vendor Type:* ${formData.vendorType}

*Message:*
${formData.message || "No additional message"}

Please contact me to discuss business opportunities. Thank you!
    `.trim();

    return `https://wa.me/${restaurantWhatsApp}?text=${encodeURIComponent(message)}`;
  };

  const generateGoogleFormURL = () => {
    const baseURL = `https://docs.google.com/forms/d/e/${googleFormId}/viewform`;
    const params = new URLSearchParams({
      "entry.name": formData.name,
      "entry.phone": formData.phone,
      "entry.email": formData.email || "",
      "entry.vendorType": formData.vendorType,
      "entry.businessName": formData.businessName || "",
      "entry.message": formData.message || "",
    });
    return `${baseURL}?${params.toString()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.vendorType) {
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
      vendorType: "",
      businessName: "",
      message: "",
    });
  };

  return (
    <Card className="p-6 md:p-8 bg-white shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Store className="text-green-600" size={32} />
        <h2 className="text-green-700 text-2xl md:text-3xl font-bold">Vendor Partnership</h2>
      </div>
      <p className="text-gray-600 mb-6 text-base md:text-lg">
        Are you a vegetable vendor or grocery supplier? We'd love to partner with you! 
        Leave your contact information and we'll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="vendorName" className="flex items-center gap-2 mb-2">
            <Package size={18} className="text-green-600" />
            Your Name *
          </Label>
          <Input
            id="vendorName"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <Label htmlFor="vendorPhone" className="flex items-center gap-2 mb-2">
            <Phone size={18} className="text-green-600" />
            Phone Number *
          </Label>
          <Input
            id="vendorPhone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <Label htmlFor="vendorEmail" className="flex items-center gap-2 mb-2">
            <Mail size={18} className="text-green-600" />
            Email (Optional)
          </Label>
          <Input
            id="vendorEmail"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <Label htmlFor="vendorType" className="flex items-center gap-2 mb-2">
            <Store size={18} className="text-green-600" />
            Vendor Type *
          </Label>
          <Select
            value={formData.vendorType}
            onValueChange={(value) => setFormData({ ...formData, vendorType: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select vendor type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vegetable">Vegetable Vendor</SelectItem>
              <SelectItem value="grocery">Grocery Supplier</SelectItem>
              <SelectItem value="spices">Spices Supplier</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="businessName" className="mb-2">
            Business Name (Optional)
          </Label>
          <Input
            id="businessName"
            type="text"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            placeholder="Your business name"
          />
        </div>

        <div>
          <Label htmlFor="vendorMessage" className="mb-2">
            Message (Optional)
          </Label>
          <Textarea
            id="vendorMessage"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your products or services..."
            rows={3}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-6 text-lg"
        >
          Submit Vendor Information
        </Button>
      </form>
    </Card>
  );
}

