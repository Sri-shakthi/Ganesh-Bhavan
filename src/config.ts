// Configuration file for Ganesh Bhavan
// Replace these values with your actual WhatsApp number and Google Form IDs

export const config = {
  // Restaurant WhatsApp number (without + or spaces, e.g., "919876543210" for India)
  restaurantWhatsApp: "6383892024",
  
  // OPTION 1: Google Apps Script Web App URLs (RECOMMENDED - Direct submission, no popup)
  // Get these after deploying your Google Apps Script as a Web App
  // Format: https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
  appsScriptUrls: {
    catering: "https://script.google.com/macros/s/AKfycbyG2nzy5tukErPvXzia2d4i5VsU6Xjs63Zv0_JMGuy4T64yV9U_YGmNucZKJV3C3taXLw/exec",
    vendor: "YOUR_VENDOR_APPS_SCRIPT_URL",
    recipe: "YOUR_RECIPE_APPS_SCRIPT_URL",
  },
  
  // OPTION 2: Google Form IDs (FALLBACK - Opens form in new tab)
  // Format: https://docs.google.com/forms/d/e/FORM_ID/viewform
  forms: {
    catering: "https://forms.gle/gyuY2BMxvDFxaQVj8",
    vendor: "https://forms.gle/G65rWm8TfXSYLm3FA",
    recipe: "https://forms.gle/fyEJAMhpRwQ6yVaG8",
    subscription: "https://forms.gle/LW5cUDaE3hG17qQN6",
  },
};

export const buildGoogleFormUrl = (value?: string) => {
  if (!value) {
    return "https://docs.google.com/forms";
  }
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }
  return `https://docs.google.com/forms/d/e/${value}/viewform`;
};
