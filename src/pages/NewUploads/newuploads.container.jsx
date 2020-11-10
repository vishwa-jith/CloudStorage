import React, { useState } from "react";
import NewUploadsView from "./newuploads.view";
import { addNewObject } from "../../services";
const Uploads = () => {
  const [files, setFiles] = useState(null);
  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };
  const handleCancel = () => {
    setFiles(null);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewObject(files);
  };
  return (
    <>
      <NewUploadsView
        files={files}
        handleFileChange={handleFileChange}
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
export default Uploads;
