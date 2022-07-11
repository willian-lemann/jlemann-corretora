import { convertAPI } from "../config/convertkit";

export const subscribe = async (email: string) =>
  convertAPI.post(`/forms/3420078/subscribe`, { email });
