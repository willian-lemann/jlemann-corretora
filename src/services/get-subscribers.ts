import { convertAPI } from "../config/convertkit";

export const getSubscribers = () => convertAPI.get("/subscribers");
