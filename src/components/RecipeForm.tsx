import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChefHat } from "lucide-react";
import { buildGoogleFormUrl } from "../config";

interface RecipeFormProps {
  googleFormId: string;
}

export default function RecipeForm({ googleFormId }: RecipeFormProps) {
  const googleFormURL = buildGoogleFormUrl(googleFormId);

  return (
    <Card className="p-6 md:p-8 bg-white shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <ChefHat className="text-green-600" size={32} />
        <h2 className="text-green-700 text-2xl md:text-3xl font-bold">Share Your Recipe</h2>
      </div>
      <p className="text-gray-600 mb-6 text-base md:text-lg">
        Share your unique hometown recipe with us! Click the button below to submit your recipe
        using our Google Form.
      </p>
      <Button
        asChild
        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-6 text-lg"
      >
        <a href={googleFormURL} target="_blank" rel="noopener noreferrer">
          Open Recipe Submission Form
        </a>
      </Button>
    </Card>
  );
}
