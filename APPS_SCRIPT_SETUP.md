# Apps Script Setup - Google Sheets vs Google Form

## ✅ CORRECT: Use Google Sheets Apps Script

### Step-by-Step:

1. **Open your Google Sheet**
   - This is the sheet where you want the form data to appear
   - It can be:
     - A sheet linked to your Google Form (Form Responses)
     - A standalone Google Sheet you created

2. **Open Apps Script from the Sheet**
   - In your Google Sheet, click **Extensions** (top menu)
   - Click **Apps Script**
   - A new tab opens with the Apps Script editor

3. **Verify it's bound to the sheet**
   - Look at the top of the Apps Script editor
   - You should see your sheet name (e.g., "Catering Form Responses")
   - If you see "Untitled project", you're in the wrong place

4. **Paste the code**
   - Delete any existing code
   - Copy code from `google-apps-script-catering.js`
   - Paste it into the editor

5. **Update the sheet name**
   - Look at the bottom of your Google Sheet
   - See the tab name (e.g., "Sheet1", "Form Responses 1")
   - In Apps Script, update line 7:
   ```javascript
   const SHEET_NAME = 'Sheet1'; // Change to match your tab name
   ```

6. **Save the script**
   - Click the save icon (💾) or press Ctrl+S
   - Name it "Catering Form Handler"

7. **Deploy as Web App**
   - Click **Deploy** → **New deployment**
   - Click the gear icon ⚙️ next to "Select type"
   - Choose **"Web app"**
   - Set:
     - **Description**: "Catering Form Submission"
     - **Execute as**: "Me"
     - **Who has access**: "Anyone" (for testing) or "Anyone with Google account"
   - Click **Deploy**
   - **Authorize** the script (click "Authorize access")
   - **Copy the Web App URL** (ends with `/exec`)

8. **Update config.ts**
   ```typescript
   appsScriptUrls: {
     catering: "PASTE_YOUR_EXEC_URL_HERE",
   }
   ```

---

## ❌ WRONG: Don't Use Google Form Apps Script

**If you created the script from Google Form:**
- ❌ It won't have access to write to sheets
- ❌ It's not bound to any sheet
- ❌ It will fail when trying to append data

**How to fix if you did this:**
1. Delete the script from the Form
2. Open your Google Sheet instead
3. Follow the steps above

---

## 🔍 How to Verify It's Correct

### Check 1: Apps Script Editor
- Top bar should show your sheet name
- Not "Untitled project"

### Check 2: Test the Script
1. In Apps Script, click **Run** → **testSubmission**
2. Check **Execution log** (View → Execution log)
3. Check your Google Sheet - test data should appear
4. If it works, your script is set up correctly!

### Check 3: Execution Logs
1. Submit your form
2. In Apps Script, go to **Executions** (left sidebar)
3. Click the latest execution
4. Check for errors:
   - ✅ Green = Success
   - ❌ Red = Error (read the message)

---

## 📋 Quick Checklist

- [ ] Script is in **Google Sheet** (not Google Form)
- [ ] Script editor shows sheet name at top
- [ ] `SHEET_NAME` matches your tab name exactly
- [ ] Script saved
- [ ] Deployed as **Web app** (not library)
- [ ] Deployment access is **"Anyone"**
- [ ] Copied the `/exec` URL (not `/dev`)
- [ ] Updated `config.ts` with the URL
- [ ] Tested with `testSubmission` function

---

## 🎯 Summary

**Use:** Google Sheet → Extensions → Apps Script  
**Don't use:** Google Form → Script Editor

The script MUST be bound to your Google Sheet to write data to it!

