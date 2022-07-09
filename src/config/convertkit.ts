import axios from "axios";

export const convertAPI = axios.create({
  baseURL: "https://api.convertkit.com/v3",
  headers: {
    api_secret: process.env.CONVERT_KIT_API_SECRET as string,
    api_key: process.env.CONVERT_API_PUBLIC as string,
  },
});
