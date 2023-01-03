import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../config/firebase";
import { Password } from "../../models/password";

interface Params {
  id: string;
  data: Partial<Password>;
}

export async function updatePasswordService({ id, data }: Params) {
  const passwordRef = doc(firestore, "passwords", id);
  await updateDoc(passwordRef, { ...data });
}
