import axios from "axios";
import toast from "react-hot-toast";

// In production, there is no localhost so we have to make this dyanmic
const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

// Global response interceptor — catches 429 rate-limit errors from any API call
api.interceptors.response.use(
  (response) => response, // pass through successful responses unchanged
  (error) => {
    if (error.response?.status === 429) {
      toast.error("Slow down! Too many requests. Please wait a moment.", {
        duration: 4000,
        icon: "⚡",
      });
    }
    return Promise.reject(error); // re-throw so page-level catch blocks still run
  },
);

export default api;
