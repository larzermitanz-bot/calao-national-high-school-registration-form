function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.firstName || "",
      data.middleName || "",
      data.lastName || "",
      data.lrn || "",
      data.birthDate || "",
      data.gradeLevel || "",
      data.address || "",
      data.guardianName || "",
      data.guardianEmail || "",
      data.guardianPhone || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
