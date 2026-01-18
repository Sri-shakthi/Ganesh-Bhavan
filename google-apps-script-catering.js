/**
 * Google Apps Script for Direct Form Submission to Google Sheets
 * 
 * CRITICAL: This script MUST be bound to your Google Sheet
 * 1. Open your Google Sheet (where you want data to appear)
 * 2. Go to Extensions → Apps Script
 * 3. Paste this code
 * 4. Update SHEET_NAME below to match your sheet tab name
 * 5. Deploy as Web App
 */

// UPDATE THIS: Change to your actual sheet tab name
const SHEET_NAME = 'Sheet1'; // Change to match your sheet tab name exactly

function doPost(e) {
  try {
    Logger.log('=== POST REQUEST RECEIVED ===');
    Logger.log('PostData type: ' + typeof e.postData);
    Logger.log('PostData: ' + JSON.stringify(e.postData));
    
    let data = {};
    
    // Handle JSON data (from fetch)
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
        Logger.log('Parsed JSON data: ' + JSON.stringify(data));
      } catch (jsonError) {
        // Handle form-encoded data (from form submission)
        const params = e.parameter;
        data = {
          name: params.name || '',
          phone: params.phone || '',
          email: params.email || '',
          eventType: params.eventType || '',
          numberOfGuests: params.numberOfGuests || '',
          eventMeal: params.eventMeal || '',
          eventDate: params.eventDate || '',
          additionalInfo: params.additionalInfo || ''
        };
        Logger.log('Parsed form data: ' + JSON.stringify(data));
      }
    } else if (e.parameter) {
      // Handle form parameters directly
      data = {
        name: e.parameter.name || '',
        phone: e.parameter.phone || '',
        email: e.parameter.email || '',
        eventType: e.parameter.eventType || '',
        numberOfGuests: e.parameter.numberOfGuests || '',
        eventMeal: e.parameter.eventMeal || '',
        eventDate: e.parameter.eventDate || '',
        additionalInfo: e.parameter.additionalInfo || ''
      };
      Logger.log('Used parameter data: ' + JSON.stringify(data));
    } else {
      throw new Error('No data received in request');
    }
    
    // Get the spreadsheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    Logger.log('Spreadsheet name: ' + spreadsheet.getName());
    
    // Get the specific sheet
    let sheet;
    try {
      sheet = spreadsheet.getSheetByName(SHEET_NAME);
      if (!sheet) {
        // Try first sheet as fallback
        sheet = spreadsheet.getSheets()[0];
        Logger.log('Sheet "' + SHEET_NAME + '" not found. Using first sheet: ' + sheet.getName());
      } else {
        Logger.log('Using sheet: ' + sheet.getName());
      }
    } catch (err) {
      sheet = spreadsheet.getActiveSheet();
      Logger.log('Error getting sheet, using active: ' + sheet.getName());
    }
    
    // Prepare row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.name || '',
      data.phone || '',
      data.email || '',
      data.eventType || '',
      data.numberOfGuests || '',
      data.eventMeal || '',
      data.eventDate || '',
      data.additionalInfo || ''
    ];
    
    Logger.log('Row data to append: ' + JSON.stringify(rowData));
    
    // Append row
    sheet.appendRow(rowData);
    
    Logger.log('Row appended successfully to row: ' + sheet.getLastRow());
    
    // Return success
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Form submitted successfully!',
      timestamp: timestamp.toISOString(),
      rowNumber: sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('ERROR: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString(),
      message: 'Failed to submit form'
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (for testing/debugging)
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'OK',
    message: 'Catering Form Handler is running',
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function - Run this to test the script
 */
function testSubmission() {
  const testData = {
    name: 'Test User',
    phone: '1234567890',
    email: 'test@example.com',
    eventType: 'wedding',
    numberOfGuests: '50',
    eventMeal: 'lunch',
    eventDate: '2025-12-31',
    additionalInfo: 'Test from script'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  Logger.log('Testing submission...');
  const result = doPost(mockEvent);
  Logger.log('Result: ' + result.getContent());
  
  // Check sheet
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME) || 
                SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  Logger.log('Last row in sheet: ' + sheet.getLastRow());
  Logger.log('Sheet name: ' + sheet.getName());
}
