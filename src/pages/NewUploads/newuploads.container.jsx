import React, { useState } from "react";
import NewUploadsView from "./newuploads.view";
const Uploads = () => {
  const [files, setFiles] = useState(null);
  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };
  const handleCancel = () => {
    setFiles(null);
  };
  return (
    <>
      <NewUploadsView
        files={files}
        handleFileChange={handleFileChange}
        handleCancel={handleCancel}
      />
    </>
  );
};
export default Uploads;
