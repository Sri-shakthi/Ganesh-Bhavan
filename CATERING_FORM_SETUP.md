# Catering Form Setup - Complete Guide

## ✅ What You've Done
- Created a Google Form with these fields:
  - Timestamp (auto-generated)
  - Full Name
  - Phone Number
  - Email Id
  - Catering Event Type
  - No of Guests
  - Event Meal
  - Event Date
  - Additional Information

## 🎯 Next Steps - Choose One Method:

---

## **METHOD 1: Direct Submission (RECOMMENDED) ⭐**

This method submits directly to Google Sheets without opening a form popup.

### Step 1: Set Up Google Apps Script

1. **Open your Google Form's linked Google Sheet**
   - In your Google Form, click "Responses" tab
   - Click the green Sheets icon to open/create the linked sheet

2. **Open Apps Script**
   - In the Google Sheet, go to: **Extensions → Apps Script**

3. **Paste the Script**
   - Delete any existing code
   - Copy the code from `google-apps-script-catering.js` file
   - Paste it into the Apps Script editor

4. **Update Sheet Name (if needed)**
   - If your sheet tab is NOT named "Form Responses 1", update line 20:
   ```javascript
   const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('YOUR_SHEET_NAME');
   ```

5. **Save the Script**
   - Click the save icon (💾) or press Ctrl+S
   - Name it "Catering Form Handler"

6. **Deploy as Web App**
   - Click **"Deploy"** → **"New deployment"**
   - Click the gear icon ⚙️ next to "Select type"
   - Choose **"Web app"**
   - Set:
     - **Description**: "Catering Form Submission Handler"
     - **Execute as**: "Me"
     - **Who has access**: "Anyone" (or "Anyone with Google account" for more security)
   - Click **"Deploy"**
   - **Authorize** the script (click "Authorize access" and follow prompts)
   - **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/ABC123.../exec`)

### Step 2: Update config.ts

Open `src/config.ts` and update:

```typescript
export const config = {
  restaurantWhatsApp: "919876543210", // Your WhatsApp number (country code + number, no + or spaces)
  appsScriptUrls: {
    catering: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", // Paste the Web App URL here
  },
  forms: {
    catering: "", // Leave empty if using Apps Script
  },
};
```

### Step 3: Test It!

1. Run your website
2. Fill out the catering form
3. Submit it
4. Check your Google Sheet - the data should appear automatically!

---

## **METHOD 2: Prefill Google Form (FALLBACK)**

This method opens the Google Form in a new tab with pre-filled data.

### Step 1: Get Your Form ID

1. Open your Google Form
2. Click **"Send"** button (top right)
3. Click the link icon (🔗)
4. Copy the URL - it looks like:
   ```
   https://docs.google.com/forms/d/e/FORM_ID_HERE/viewform
   ```
5. Extract the `FORM_ID_HERE` part

### Step 2: Get Entry IDs

**Easy Method:**
1. Open your Google Form
2. Click the three dots (⋮) menu
3. Select **"Get pre-filled link"**
4. Fill in sample data for each field
5. Click **"Get link"**
6. The URL will contain entry IDs like:
   ```
   ?entry.123456789=John&entry.987654321=1234567890
   ```
7. Note down the entry numbers for each field

### Step 3: Update CateringForm.tsx

Update the `generateGoogleFormURL` function with your actual entry IDs:

```typescript
const generateGoogleFormURL = () => {
  const baseURL = `https://docs.google.com/forms/d/e/${googleFormId}/viewform`;
  const params = new URLSearchParams({
    "entry.123456789": formData.name,        // Replace with your entry ID
    "entry.987654321": formData.phone,       // Replace with your entry ID
    "entry.111222333": formData.email || "", // Replace with your entry ID
    // ... continue for all fields
  });
  return `${baseURL}?${params.toString()}`;
};
```

### Step 4: Update config.ts

```typescript
export const config = {
  restaurantWhatsApp: "919876543210",
  forms: {
    catering: "YOUR_FORM_ID_HERE",
  },
};
```

---

## 📱 WhatsApp Number Format

Your WhatsApp number should be in international format:
- **India**: `919876543210` (91 = country code, no + sign, no spaces)
- **USA**: `15551234567` (1 = country code)
- **UK**: `447911123456` (44 = country code)

---

## ✅ Testing Checklist

- [ ] Form submits without errors
- [ ] Data appears in Google Sheets
- [ ] WhatsApp message opens with correct information
- [ ] All form fields are captured correctly
- [ ] Form resets after submission

---

## 🆘 Troubleshooting

**Issue: "Form not submitting"**
- Check that your Apps Script URL is correct
- Make sure the Web App is deployed with "Anyone" access
- Check browser console for errors

**Issue: "Data not appearing in Sheets"**
- Verify the sheet name in the script matches your actual sheet
- Check Apps Script execution logs (View → Execution log)
- Make sure the script has permission to edit the sheet

**Issue: "WhatsApp not opening"**
- Verify the WhatsApp number format (no +, no spaces)
- Check that the number is correct

---

## 📝 Notes

- **Method 1 (Apps Script)** is recommended because:
  - ✅ No popup/form opening
  - ✅ Better user experience
  - ✅ Direct submission
  - ✅ More reliable

- **Method 2 (Prefill)** works but:
  - ⚠️ Opens form in new tab
  - ⚠️ User must click submit again
  - ⚠️ Less seamless experience

---

## 🎉 You're Done!

Once you've completed the setup, your catering form will:
1. Submit data directly to Google Sheets
2. Send a WhatsApp message to the restaurant
3. Reset the form for the next submission

Good luck! 🚀

