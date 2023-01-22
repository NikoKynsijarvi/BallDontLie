import axios from "axios";
const baseUrl = "http://localhost:3001/api/shotgroup";

const getAll = async (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  const response = await request;
  return response.data;
};

const addNew = async (object) => {
  console.log(object);
  const newObject = {
    "username": "Niko98",
    "type":"3p",
    "shotsmade": 5,
    "shotsattempted": 15,
    "date": "2022-10-10"
    
}
  const request = axios.post(baseUrl, newObject)
  const response = await request
  return response.data
  
}

export default {
  getAll,
  addNew
};
