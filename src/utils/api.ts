// Placeholder for future backend integration using axios
import axios from "axios";

export const shortenUrl = async (data: { longURL: string; validity?: number; customCode?: string }) => {
  // return await axios.post("/api/shorten", data);
  return {
    shortURL: `https://short.ly/${data.customCode || Math.random().toString(36).substring(2, 8)}`,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + (data.validity || 30) * 60000).toISOString(),
    clicks: 0,
  };
};