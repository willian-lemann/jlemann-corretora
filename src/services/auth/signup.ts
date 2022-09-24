import { auth, createUserWithEmailAndPassword } from "../../config/firebase";

export const signUpService = async (email: string, password: string) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const token = await user.getIdToken();

  return {
    token,
    user: {
      email: user.email,
      name: user.displayName,
    },
  };
};
