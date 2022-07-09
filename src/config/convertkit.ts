import axios from "axios";

export const convertAPI = axios.create({
  baseURL: "https://api.convertkit.com/v3",
  params: {
    api_secret: process.env.CONVERT_KIT_API_SECRET,
  },
});
