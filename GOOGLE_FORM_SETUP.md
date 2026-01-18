# Google Form Setup Guide for Ganesh Bhavan

## Step 1: Get Your Google Form ID

1. Open your Google Form
2. Click on the "Send" button (top right)
3. Click on the link icon (🔗)
4. Copy the URL - it will look like:
   ```
   https://docs.google.com/forms/d/e/FORM_ID_HERE/viewform
   ```
5. Extract the `FORM_ID_HERE` part - this is your Google Form ID

## Step 2: Get Entry IDs for Each Field

### Method 1: Using Browser Developer Tools (Easiest)

1. Open your Google Form in a browser
2. Right-click on the form and select "Inspect" (or press F12)
3. Go to the "Network" tab
4. Fill out the form and submit it
5. Look for a request to `formResponse` in the Network tab
6. Click on it and check the "Payload" or "Form Data" tab
7. You'll see entry IDs like `entry.123456789`, `entry.987654321`, etc.

### Method 2: Using Form Source Code

1. Open your Google Form
2. Right-click and select "View Page Source"
3. Press Ctrl+F (or Cmd+F on Mac) and search for `entry.`
4. You'll find entries like:
   ```html
   <input name="entry.123456789" ...>
   ```
5. Note down the entry numbers for each field

### Method 3: Using Prefill URL Generator

1. In your Google Form, click the three dots (⋮) menu
2. Select "Get pre-filled link"
3. Fill in sample data for each field
4. Click "Get link"
5. The URL will contain entry IDs like:
   ```
   https://docs.google.com/forms/d/e/FORM_ID/viewform?entry.123456789=John&entry.987654321=1234567890
   ```

## Step 3: Map Your Form Fields

Based on your Google Form fields:
- Timestamp (auto-generated, no entry ID needed)
- Full Name → entry.XXXXX
- Phone Number → entry.XXXXX
- Email Id → entry.XXXXX
- Catering Event Type → entry.XXXXX
- No of Guests → entry.XXXXX
- Event Meal → entry.XXXXX
- Event Date → entry.XXXXX
- Additional Information → entry.XXXXX

## Step 4: Update config.ts

Once you have the Form ID and Entry IDs, update `src/config.ts`:

```typescript
export const config = {
  restaurantWhatsApp: "YOUR_WHATSAPP_NUMBER", // e.g., "919876543210"
  forms: {
    catering: "YOUR_CATERING_FORM_ID", // From Step 1
  },
};
```

## Step 5: Update CateringForm.tsx Entry IDs

After getting entry IDs, we'll update the form to use the correct entry IDs.

---

## BETTER OPTION: Direct Submission via Google Apps Script

For a better user experience (no form popup), you can set up Google Apps Script to directly submit to Google Sheets.

### Setup Google Apps Script Web App:

1. Open your Google Form's linked Google Sheet
2. Go to Extensions → Apps Script
3. Replace the code with the script provided below
4. Deploy as a Web App
5. Get the Web App URL
6. Update the form to use the Web App URL instead

This will allow direct submission without opening the Google Form!

