import axios, { AxiosInstance } from "axios"

export const ApiConfig = () => {
  return axios.create({
      baseURL: 'http://localhost:3001',
      headers: {
        "Content-type": "application/json"
      }
  })
}
