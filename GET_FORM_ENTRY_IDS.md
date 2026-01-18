# How to Get Google Form Entry IDs

To submit data to Google Form responses, you need the entry IDs for each field.

## Method 1: Using Browser Developer Tools (Easiest)

1. **Open your Google Form** in a browser
2. **Right-click** on the form and select **"Inspect"** (or press F12)
3. Go to the **"Network"** tab in DevTools
4. **Fill out the form** with test data
5. **Submit the form**
6. In the Network tab, look for a request to **`formResponse`**
7. Click on it
8. Go to **"Payload"** or **"Form Data"** tab
9. You'll see entry IDs like:
   - `entry.123456789` = Full Name
   - `entry.987654321` = Phone Number
   - etc.

## Method 2: Using Prefill Link (Recommended)

1. **Open your Google Form**
2. Click the **three dots (⋮)** menu (top right)
3. Select **"Get pre-filled link"**
4. **Fill in sample data** for each field:
   - Full Name: "Test Name"
   - Phone Number: "1234567890"
   - Email: "test@example.com"
   - etc.
5. Click **"Get link"**
6. The URL will look like:
   ```
   https://docs.google.com/forms/d/e/FORM_ID/viewform?entry.123456789=Test+Name&entry.987654321=1234567890&entry.111222333=test%40example.com
   ```
7. **Extract the entry IDs** from the URL:
   - `entry.123456789` = Full Name
   - `entry.987654321` = Phone Number
   - `entry.111222333` = Email
   - etc.

## Method 3: View Page Source

1. **Open your Google Form**
2. **Right-click** → **"View Page Source"** (or Ctrl+U / Cmd+U)
3. Press **Ctrl+F** (or Cmd+F) and search for `entry.`
4. You'll find entries like:
   ```html
   <input name="entry.123456789" ...>
   ```
5. Note down the entry numbers for each field

---

## Update CateringForm.tsx

Once you have the entry IDs, update the `submitToGoogleForm` function in `CateringForm.tsx`:

Replace the placeholder `entry.0`, `entry.1`, etc. with your actual entry IDs:

```typescript
formDataToSubmit.append('entry.123456789', formData.name); // Your actual entry ID for Full Name
formDataToSubmit.append('entry.987654321', formData.phone); // Your actual entry ID for Phone
formDataToSubmit.append('entry.111222333', formData.email || ''); // Your actual entry ID for Email
// ... continue for all fields
```

---

## Your Form Fields (in order):

Based on your Google Form:
1. Timestamp (auto-generated, no entry ID needed)
2. Full Name → `entry.XXXXX`
3. Phone Number → `entry.XXXXX`
4. Email Id → `entry.XXXXX`
5. Catering Event Type → `entry.XXXXX`
6. No of Guests → `entry.XXXXX`
7. Event Meal → `entry.XXXXX`
8. Event Date → `entry.XXXXX`
9. Additional Information → `entry.XXXXX`

---

## Quick Test

After updating the entry IDs:
1. Submit the form from your website
2. Check **Google Form Responses** - data should appear
3. Check **Google Sheet** - data should also appear (from Apps Script)

Both should now have the data!

