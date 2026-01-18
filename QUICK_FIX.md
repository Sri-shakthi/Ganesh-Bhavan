# Quick Fix: Data Not Appearing in Google Sheet

## Most Common Issues & Solutions

### ✅ Issue 1: Script Not Bound to Sheet

**Problem:** Script is standalone, not attached to your sheet.

**Solution:**
1. Open your Google Sheet (where you want data)
2. Go to **Extensions → Apps Script**
3. If you see empty script editor, paste the code from `google-apps-script-catering.js`
4. If you created script at script.google.com, delete it and create it in the sheet instead

### ✅ Issue 2: Wrong Sheet Name

**Problem:** Script can't find the sheet tab.

**Solution:**
1. Look at the bottom of your Google Sheet
2. See the tab name (e.g., "Sheet1", "Form Responses 1")
3. In Apps Script, update line 7:
   ```javascript
   const SHEET_NAME = 'Sheet1'; // Change to your actual tab name
   ```
4. Save and redeploy

### ✅ Issue 3: Need to Redeploy After Changes

**Problem:** Using old deployment URL.

**Solution:**
1. After ANY code change, go to **Deploy → Manage deployments**
2. Click the pencil icon (edit)
3. Click **Deploy** (even if nothing changed)
4. **Copy the NEW URL** (it might change)
5. Update `config.ts` with the new URL

### ✅ Issue 4: Check Execution Logs

**This is the MOST IMPORTANT step:**

1. In Apps Script, click **Executions** (left sidebar)
2. Submit your form
3. Check the execution log:
   - ✅ Green = Success (check sheet)
   - ❌ Red = Error (read error message)

**Common errors:**
- "Cannot find method getSheetByName" → Wrong sheet name
- "Permission denied" → Deployment access wrong
- "No data received" → Form not sending data

### ✅ Issue 5: Test Script Directly

1. In Apps Script editor, click **Run** → **testSubmission**
2. Check **Execution log** for errors
3. Check your Google Sheet - test data should appear
4. If test works but form doesn't → Deployment/URL issue
5. If test doesn't work → Script/sheet issue

### ✅ Issue 6: Verify Column Order

Your sheet should have these columns in order:
1. Timestamp
2. Full Name  
3. Phone Number
4. Email Id
5. Catering Event Type
6. No of Guests
7. Event Meal
8. Event Date
9. Additional Information

If different, update the `rowData` array in the script.

---

## Step-by-Step Checklist

- [ ] Script is in **Extensions → Apps Script** (not standalone)
- [ ] `SHEET_NAME` matches your tab name exactly
- [ ] Script deployed as **Web app** (not library)
- [ ] Deployment access is **"Anyone"** or **"Anyone with Google account"**
- [ ] Used the **NEW URL** after redeploying
- [ ] URL in `config.ts` ends with `/exec`
- [ ] Tested with `testSubmission` function
- [ ] Checked Execution logs for errors
- [ ] Sheet has correct column headers

---

## Still Not Working?

1. **Run testSubmission** - Does it add data to sheet?
   - ✅ Yes → Form/deployment issue
   - ❌ No → Script/sheet issue

2. **Check Execution Logs** - What error appears?
   - Fix the specific error shown

3. **Verify Sheet Name** - Is it exactly correct?
   - Case-sensitive, no extra spaces

4. **Redeploy** - Always redeploy after code changes
   - Get new URL
   - Update config.ts

The execution logs will tell you exactly what's wrong!

