import React from "react";
import "./FileUpload.css";
function FileUpload() {
  return (
    <div className="file-upload-container">
      <form className="file-upload-form">
        <label htmlFor="fileUpload">Upload an Excel File</label>
        <input type="file" id="fileUpload" accept=".xls,.xlsx" required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default FileUpload;
