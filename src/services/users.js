import axios from "axios";
const baseUrl = "http://localhost:3001/api/user";

const createUser = async (newUser) => {
  const request = axios.post(baseUrl, newUser);
  const response = await request;
  console.log(response.data);
  return response.data;
};

export default {
  createUser,
};
