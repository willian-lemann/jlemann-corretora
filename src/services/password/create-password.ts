import { setDoc, collection, addDoc } from "firebase/firestore";
import { firestore } from "../../config/firebase";

interface Params {
  key: string;
  value: string;
}

export async function createPasswordService({ key, value }: Params) {
  const passwordRef = collection(firestore, "passwords");

  const password = await addDoc(passwordRef, { key, value });

  return password.id;
}
