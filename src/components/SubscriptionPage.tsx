import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { buildGoogleFormUrl, config } from "../config";

const subscriptionPlans = [
  { days: 7, label: "7 Days", color: "bg-yellow-100 border-yellow-300" },
  { days: 14, label: "14 Days", color: "bg-red-100 border-red-300" },
  { days: 21, label: "21 Days", color: "bg-green-100 border-green-300" },
  { days: 28, label: "28 Days", color: "bg-yellow-100 border-yellow-300" },
];

export default function SubscriptionPage() {
  const googleFormURL = buildGoogleFormUrl(config.forms.subscription);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-green-700 text-5xl mb-4">
            Monthly Subscription Plans
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Choose your plan and submit your subscription request through our Google Form.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-green-700 text-2xl mb-6 text-center">Choose Your Plan</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {subscriptionPlans.map((plan) => (
              <Card
                key={plan.days}
                className={`${plan.color} border-2 p-6 rounded-xl text-center shadow-md`}
              >
                <div className="text-3xl mb-2">{plan.days}</div>
                <div className="text-gray-700">{plan.label}</div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-6 text-lg rounded-full shadow-lg"
          >
            <a href={googleFormURL} target="_blank" rel="noopener noreferrer">
              Open Subscription Form
            </a>
          </Button>
          <p className="text-gray-600 mt-4 text-sm">
            You will be redirected to our Google Form to complete your subscription.
          </p>
        </div>
      </div>
    </div>
  );
}
