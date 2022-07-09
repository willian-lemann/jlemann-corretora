import { convertAPI } from "../config/convertkit";

console.log("env", process.env.NEXTCONVERT_API_PUBLIC);
export const subscribe = async (email: string) =>
  convertAPI.post(`/forms/3420078/subscribe`, { email });
