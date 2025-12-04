import { useState, useRef } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { ChefHat, Phone, Mail, FileText, Image as ImageIcon } from "lucide-react";

interface RecipeFormProps {
  restaurantWhatsApp: string;
  googleFormId: string;
}

export default function RecipeForm({ restaurantWhatsApp, googleFormId }: RecipeFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    recipeName: "",
    recipeInstructions: "",
    hometown: "",
  });
  const [images, setImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files);
    }
  };

  const generateWhatsAppMessage = () => {
    let message = `
🌟 *Recipe Submission - Ganesh Bhavan*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || "Not provided"}
🏠 *Hometown:* ${formData.hometown || "Not provided"}
🍽️ *Recipe Name:* ${formData.recipeName}

*Recipe Instructions:*
${formData.recipeInstructions}

*Images:* ${images.length > 0 ? `${images.length} image(s) attached` : "No images"}
    `.trim();

    // Note: WhatsApp Web API doesn't support file attachments directly
    // Images would need to be uploaded separately or sent via email
    return `https://wa.me/${restaurantWhatsApp}?text=${encodeURIComponent(message)}`;
  };

  const generateGoogleFormURL = () => {
    const baseURL = `https://docs.google.com/forms/d/e/${googleFormId}/viewform`;
    const params = new URLSearchParams({
      "entry.name": formData.name,
      "entry.phone": formData.phone,
      "entry.email": formData.email || "",
      "entry.recipeName": formData.recipeName,
      "entry.instructions": formData.recipeInstructions,
      "entry.hometown": formData.hometown || "",
      "entry.imageCount": images.length.toString(),
    });
    return `${baseURL}?${params.toString()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.recipeName || !formData.recipeInstructions) {
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

    // Note: For actual file upload to Google Forms, you would need to use Google Forms API
    // or handle file uploads separately through a backend service

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      recipeName: "",
      recipeInstructions: "",
      hometown: "",
    });
    setImages([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Card className="p-6 md:p-8 bg-white shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <ChefHat className="text-green-600" size={32} />
        <h2 className="text-green-700 text-2xl md:text-3xl font-bold">Share Your Recipe</h2>
      </div>
      <p className="text-gray-600 mb-6 text-base md:text-lg">
        Share your unique hometown recipe with us! If selected, your recipe will be featured on our menu 
        and you'll receive exciting gifts. Help us celebrate the diversity of Indian cuisine!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="recipeName" className="flex items-center gap-2 mb-2">
            <ChefHat size={18} className="text-green-600" />
            Your Name *
          </Label>
          <Input
            id="recipeName"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <Label htmlFor="recipePhone" className="flex items-center gap-2 mb-2">
            <Phone size={18} className="text-green-600" />
            Phone Number *
          </Label>
          <Input
            id="recipePhone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <Label htmlFor="recipeEmail" className="flex items-center gap-2 mb-2">
            <Mail size={18} className="text-green-600" />
            Email (Optional)
          </Label>
          <Input
            id="recipeEmail"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <Label htmlFor="hometown" className="mb-2">
            Hometown (Optional)
          </Label>
          <Input
            id="hometown"
            type="text"
            value={formData.hometown}
            onChange={(e) => setFormData({ ...formData, hometown: e.target.value })}
            placeholder="Your hometown"
          />
        </div>

        <div>
          <Label htmlFor="recipeTitle" className="flex items-center gap-2 mb-2">
            <FileText size={18} className="text-green-600" />
            Recipe Name *
          </Label>
          <Input
            id="recipeTitle"
            type="text"
            required
            value={formData.recipeName}
            onChange={(e) => setFormData({ ...formData, recipeName: e.target.value })}
            placeholder="e.g., Grandma's Special Biryani"
          />
        </div>

        <div>
          <Label htmlFor="recipeInstructions" className="flex items-center gap-2 mb-2">
            <FileText size={18} className="text-green-600" />
            Recipe Instructions *
          </Label>
          <Textarea
            id="recipeInstructions"
            required
            value={formData.recipeInstructions}
            onChange={(e) => setFormData({ ...formData, recipeInstructions: e.target.value })}
            placeholder="Step-by-step instructions on how to prepare the recipe..."
            rows={6}
          />
        </div>

        <div>
          <Label htmlFor="recipeImages" className="flex items-center gap-2 mb-2">
            <ImageIcon size={18} className="text-green-600" />
            Recipe Images (Optional)
          </Label>
          <Input
            id="recipeImages"
            type="file"
            ref={fileInputRef}
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="cursor-pointer"
          />
          {images.length > 0 && (
            <p className="text-sm text-gray-500 mt-2">
              {images.length} image(s) selected
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-6 text-lg"
        >
          Submit Recipe
        </Button>
      </form>
    </Card>
  );
}

