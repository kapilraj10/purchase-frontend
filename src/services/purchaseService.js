import axios from "axios";
// Server mounts purchase routes under "/products" (see server/src/routes/index.js)
const API_URL = import.meta.env.VITE_API_URL + "/products";

export const getPurchases = async (token) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const createPurchase = async (data, token) => {
  const res = await axios.post(API_URL, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Optional: fetch total purchases in the last 30 days for the current user/admin
export const getTotalLast30Days = async (token) => {
  const res = await axios.get(`${API_URL}/total-last-30-days`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
