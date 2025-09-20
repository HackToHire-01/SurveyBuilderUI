import React, { useState } from "react";
import "./FileUpload.css";
function FileUpload() {
  const [data, setData] = useState({});
  const uploadFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryStr = event.target.result;

      // Read workbook
      const workbook = XLSX.read(binaryStr, { type: "binary" });

      // Get first sheet
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convert to JSON using headers from the first row
      const excelData = XLSX.utils.sheet_to_json(sheet);
      console.log(excelData);
      debugger;
      setData(excelData);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div className="file-upload-container">
      <form className="file-upload-form">
        <label htmlFor="fileUpload">Upload an Excel File</label>
        <input type="file" id="fileUpload" accept=".xls,.xlsx" required />
        <button type="submit" onClick={uploadFile}>
          Upload
        </button>
      </form>
    </div>
  );
}

export default FileUpload;
