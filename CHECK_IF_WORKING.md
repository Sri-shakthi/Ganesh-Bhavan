# How to Check if Your Form is Actually Working

## The 302 Redirect is NORMAL!

A 302 redirect from Google Apps Script is **expected behavior**. The data should still be submitted to your sheet.

## How to Verify It's Working:

### Method 1: Check Apps Script Execution Logs (BEST WAY)

1. **Open your Apps Script** (from your Google Sheet)
2. Click **Executions** in the left sidebar
3. **Submit your form** from the website
4. **Refresh the Executions page**
5. Look for a new execution:
   - ✅ **Green checkmark** = Success! Data was submitted
   - ❌ **Red X** = Error (click it to see the error message)

6. **If successful but no data in sheet:**
   - Click on the execution
   - Check the logs - it will show which sheet it wrote to
   - Verify the sheet name matches

### Method 2: Check Your Google Sheet

1. **Open your Google Sheet**
2. **Submit the form**
3. **Refresh the sheet** (F5)
4. Check if a new row appeared

### Method 3: Test Script Directly

1. In Apps Script, click **Run** → **testSubmission**
2. Check **Execution log** (View → Execution log)
3. Check your Google Sheet - test row should appear
4. If this works, your script is fine - the issue is with form submission

### Method 4: Check Browser Network Tab

1. Open browser DevTools (F12)
2. Go to **Network** tab
3. Submit the form
4. Look for the request to your `/exec` URL
5. Check:
   - **Status**: 302 is normal
   - **Request Payload**: Should show your form data
   - If you see the data, it's being sent correctly

---

## Common Issues:

### Issue: 302 but no data in sheet

**Possible causes:**
1. **Wrong sheet name** - Check `SHEET_NAME` in script matches your tab
2. **Script error** - Check Execution logs for errors
3. **Data format issue** - Check logs to see what data was received

**Solution:**
- Check Execution logs (most important!)
- Verify sheet name
- Run testSubmission to verify script works

### Issue: Execution shows success but no data

**Possible causes:**
1. Writing to wrong sheet
2. Sheet name mismatch
3. Permissions issue

**Solution:**
- Check Execution logs - it shows which sheet it used
- Verify sheet name in script
- Check if sheet has write permissions

---

## Quick Test:

1. **Run testSubmission** in Apps Script
2. **Check sheet** - does test data appear?
   - ✅ Yes → Script works, check form submission
   - ❌ No → Fix script first

3. **Submit form** from website
4. **Check Execution logs** - what does it show?
   - ✅ Success → Check sheet name
   - ❌ Error → Fix the error shown

---

## The 302 Redirect is OK!

Google Apps Script returns a 302 redirect after processing. This is normal. The data should still be written to your sheet. Check the Execution logs to confirm the script ran successfully!

