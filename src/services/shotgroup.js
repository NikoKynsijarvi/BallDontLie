import axios from "axios";
const baseUrl = "http://localhost:3001/api/shotgroup";

const getAll = async (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  const response = await request;
  return response.data;
};

export default {
  getAll,
};
