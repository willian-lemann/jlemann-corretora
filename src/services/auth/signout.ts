import { auth, signOut } from "../../config/firebase";

export const signOutService = async () => {
  return await signOut(auth);
};
