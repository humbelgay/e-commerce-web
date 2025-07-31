import axios from "axios";
// import e from "express";

const axiosInstance = axios.create({
  baseURL: import.meta.mode === "development" ? "http://localhost:5000/api" : "/api",
  withCredentials: true, // Include credentials for CORS requests


});
export default axiosInstance;