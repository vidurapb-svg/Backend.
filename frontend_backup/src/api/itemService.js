import axios from "axios";

const API = "http://localhost:5000";

export const getItems = async () => {
  const res = await axios.get(`${API}/items`);
  return res.data;
};

export const addItem = async (itemData) => {
  const res = await axios.post(`${API}/add`, itemData);
  return res.data;
};
