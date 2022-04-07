import axios from "axios";

export const ApiConfig = 
  axios.create({
    baseURL: "http://localhost:3001",
    headers: {
      "Content-type": "application/json",
    },
  });
