import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Utensils } from "lucide-react";
import { buildGoogleFormUrl } from "../config";

interface CateringFormProps {
  googleFormId?: string;
}

export default function CateringForm({ googleFormId }: CateringFormProps) {
  const googleFormURL = buildGoogleFormUrl(googleFormId);

  return (
    <Card className="p-6 md:p-8 bg-white shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Utensils className="text-green-600" size={32} />
        <h2 className="text-green-700 text-2xl md:text-3xl font-bold">Catering Services</h2>
      </div>
      <p className="text-gray-600 mb-6 text-base md:text-lg">
        We take catering orders for weddings, birthday functions, and all special events.
        Click the button below to submit your request in our Google Form.
      </p>
      <Button
        asChild
        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-6 text-lg"
      >
        <a href={googleFormURL} target="_blank" rel="noopener noreferrer">
          Open Catering Request Form
        </a>
      </Button>
    </Card>
  );
}
