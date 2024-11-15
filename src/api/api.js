// src/api/api.js
import axios from "axios";

const API_URL = "http://127.0.0.1:5000"; // Replace with your backend URL if it's different

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Register User
export const registerUser = (userData) => {
  return axiosInstance.post(`/register`, userData);
};

// Login User
export const loginUser = (userData) => {
  return axiosInstance.post(`/login`, userData);
};

// Get animals
export const getAnimals = () => {
  return axiosInstance.get(`/animals`);
};
