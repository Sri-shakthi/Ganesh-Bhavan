import { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import SubscriptionPage from "./components/SubscriptionPage";
import FestivalOffersPage from "./components/FestivalOffersPage";
import CateringPage from "./components/CateringPage";
import VendorPage from "./components/VendorPage";
import RecipePage from "./components/RecipePage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage 
            onNavigateToSubscription={() => setCurrentPage("subscription")} 
            onNavigateToOffers={() => setCurrentPage("offers")}
            onNavigateToCatering={() => setCurrentPage("catering")}
            onNavigateToVendor={() => setCurrentPage("vendor")}
            onNavigateToRecipe={() => setCurrentPage("recipe")}
          />
        );
      case "menu":
        return <MenuPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "subscription":
        return <SubscriptionPage />;
      case "offers":
        return <FestivalOffersPage onNavigateToSubscription={() => setCurrentPage("subscription")} />;
      case "catering":
        return <CateringPage />;
      case "vendor":
        return <VendorPage />;
      case "recipe":
        return <RecipePage />;
      default:
        return (
          <HomePage 
            onNavigateToSubscription={() => setCurrentPage("subscription")} 
            onNavigateToOffers={() => setCurrentPage("offers")}
            onNavigateToCatering={() => setCurrentPage("catering")}
            onNavigateToVendor={() => setCurrentPage("vendor")}
            onNavigateToRecipe={() => setCurrentPage("recipe")}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
