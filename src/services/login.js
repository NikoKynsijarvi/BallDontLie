import axios from "axios";
const baseUrl = "http://localhost:3001/api/login";

const loginUser = async (user) => {
  const request = axios.post(baseUrl, user);
  const response = await request;
  return response.data;
};

export default {
  loginUser,
};
