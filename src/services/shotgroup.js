import axios from "axios";
const baseUrl = "http://localhost:3001/api/shotgroup";

const getStatistics = async (id) => {
  const request = axios.get(`${baseUrl}/statistics/${id}`);
  const response = await request;
  return response.data;
};

const getAll = async (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  const response = await request;
  return response.data;
};

const addNew = async (object, token) => {
  const userToken = token;
  const header = {
    Authorization: `Bearer ${userToken}`,
  };

  const request = axios.post(baseUrl, object, { headers: header });
  const response = await request;
  return response.data;
};

export default {
  getAll,
  addNew,
  getStatistics,
};
