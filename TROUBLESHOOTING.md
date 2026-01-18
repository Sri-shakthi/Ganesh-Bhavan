# Troubleshooting: Data Not Appearing in Google Sheet

## Step-by-Step Debugging Guide

### 1. Verify Script is Bound to Correct Spreadsheet

**CRITICAL:** The Apps Script MUST be bound to your Google Sheet, not a standalone script.

✅ **Correct Way:**
1. Open your Google Sheet (where you want data to appear)
2. Go to **Extensions → Apps Script**
3. Paste the code there
4. The script is now "bound" to that sheet

❌ **Wrong Way:**
- Creating a standalone script at script.google.com
- The script won't know which sheet to write to

### 2. Check Sheet Name

In `google-apps-script-catering.js`, update this line:
```javascript
const SHEET_NAME = 'Sheet1'; // Change to your actual sheet tab name
```

Common sheet names:
- `Sheet1` (default)
- `Form Responses 1` (if linked to a Google Form)
- Your custom name

**To find your sheet name:**
1. Look at the tab name at the bottom of your Google Sheet
2. Update `SHEET_NAME` in the script to match exactly (case-sensitive)

### 3. Test the Script Directly

1. In Apps Script editor, click **Run** → **testSubmission**
2. Check the **Execution log** (View → Execution log)
3. Check your Google Sheet - a test row should appear
4. If it works here but not from the form, it's a deployment issue

### 4. Check Deployment Settings

1. Go to **Deploy → Manage deployments**
2. Click the pencil icon (edit) on your deployment
3. Verify:
   - **Execute as:** Me
   - **Who has access:** Anyone (or "Anyone with Google account")
4. Click **Deploy** (even if nothing changed)
5. **Copy the NEW URL** - URLs change when you redeploy

### 5. Check Execution Logs

1. In Apps Script, go to **Executions** (left sidebar)
2. Look for recent executions when you submit the form
3. Click on an execution to see:
   - ✅ Success: Green checkmark
   - ❌ Error: Red X with error message

**Common Errors:**
- "Cannot find method getSheetByName" → Sheet name is wrong
- "Cannot read property 'contents'" → Data format issue
- "Permission denied" → Deployment access settings wrong

### 6. Verify Data is Being Sent

Add this to your `CateringForm.tsx` before the fetch:
```typescript
console.log('Submitting data:', {
  name: formData.name,
  phone: formData.phone,
  // ... other fields
});
console.log('URL:', googleAppsScriptUrl);
```

Check browser console (F12) to see if data is correct.

### 7. Alternative: Use Form Action (More Reliable)

Instead of fetch with no-cors, you can use a hidden form:

```typescript
// Create a hidden form and submit it
const form = document.createElement('form');
form.method = 'POST';
form.action = googleAppsScriptUrl;
form.target = '_blank';

// Add form fields
Object.entries(formData).forEach(([key, value]) => {
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = key;
  input.value = value;
  form.appendChild(input);
});

document.body.appendChild(form);
form.submit();
document.body.removeChild(form);
```

### 8. Quick Fix: Use Google Form Instead

If Apps Script continues to fail, use the Google Form method:

1. Update `config.ts`:
```typescript
forms: {
  catering: "YOUR_GOOGLE_FORM_ID", // Your actual form ID
}
```

2. Remove or comment out the Apps Script URL:
```typescript
appsScriptUrls: {
  catering: "", // Leave empty to use Google Form instead
}
```

### 9. Verify Column Order in Sheet

Make sure your Google Sheet has these columns in this exact order:
1. Timestamp
2. Full Name
3. Phone Number
4. Email Id
5. Catering Event Type
6. No of Guests
7. Event Meal
8. Event Date
9. Additional Information

If columns are different, update the `rowData` array in the script.

### 10. Manual Test

Test the script directly:
1. In Apps Script, click **Run** → **testSubmission**
2. Check the sheet - if data appears, script works
3. If no data appears, check execution logs for errors
4. Fix any errors and test again

---

## Still Not Working?

1. **Check Apps Script Execution Logs** - This is the most important step
2. **Verify script is bound to the correct sheet** - Not standalone
3. **Check sheet name matches exactly** - Case-sensitive
4. **Redeploy after any code changes** - Always get new URL
5. **Test with testSubmission function first** - Verify script works

If testSubmission works but form doesn't, it's a deployment/URL issue.
If testSubmission doesn't work, it's a script/sheet issue.

