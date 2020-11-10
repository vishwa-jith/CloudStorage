import axios from "axios";
import { BASE_URL } from "../utils";
//Add New Object
export const addNewObject = async (files) => {
  const formData = new FormData();
  formData.append("photos", files[0]);
  var response = await axios.post(BASE_URL + `upload/single`, formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return response.data;
};
export const listObjects = async () => {
  var response = await axios.get(BASE_URL + `upload/objects`);
  return response.data;
};
