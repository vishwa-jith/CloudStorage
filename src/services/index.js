import axios from "axios";
import { BASE_URL } from "../utils";
//Add New Object
export const addNewObject = async (files) => {
  const formData = new FormData();
  formData.append("photos", files);
  var response = await axios.post(BASE_URL + `upload/single`, formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return response.data;
};
