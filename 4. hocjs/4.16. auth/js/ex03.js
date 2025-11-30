import { axiosInstance } from "./axios.js";

const getProfile = async () => {
  //Call api
  try {
    const response = await axiosInstance.get(`/auth/profile`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

getProfile();
getProfile();
getProfile();

//post(url, body, config)
