import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../config/firebase";
import { Password } from "../../models/password";

export async function getPasswords() {
  const passwordRef = collection(firestore, "passwords");

  const docs = await getDocs(passwordRef);

  const passwords = docs.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as Password[];

  return passwords;
}
