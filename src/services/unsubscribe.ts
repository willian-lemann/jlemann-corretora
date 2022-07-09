import { convertAPI } from "../config/convertkit";

export const unsubscribe = (email: string) =>
  convertAPI.put("/unsubscribe", { email });
