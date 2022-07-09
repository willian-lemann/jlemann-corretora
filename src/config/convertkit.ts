import axios from "axios";

export const convertAPI = axios.create({
  baseURL: "https://api.convertkit.com/v3",
  params: {
    api_secret: process.env.NEXT_PUBLIC_CONVERT_KIT_API_SECRET,
    api_key: process.env.NEXT_PUBLIC_CONVERT_API_PUBLIC,
  },
});
