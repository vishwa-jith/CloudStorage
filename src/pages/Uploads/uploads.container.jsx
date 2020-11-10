import React, { useState, useEffect } from "react";
import UploadsView from "./uploads.view";
import { listObjects } from "../../services";
const Uploads = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    listObjects()
      .then((items) => {
        setList(items);
      })
      .catch((error) => console.log(error));
  }, []);
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log(list);
  return (
    <>
      <UploadsView
        expanded={expanded}
        handleChange={handleChange}
        list={list}
      />
    </>
  );
};
export default Uploads;
