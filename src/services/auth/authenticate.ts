import { auth, signInWithEmailAndPassword } from "../../config/firebase";
import { updateUserService } from "../user/update-user";

export const authenticateService = async (
  email: string,
  password: string,
  name: string
) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  const token = await user.getIdToken();


  return {
    token,
    user: { email: user.email, name: user.displayName },
  };
};
