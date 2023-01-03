import { deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../../config/firebase";

export async function removePasswordService(id: string) {
  const passwordRef = doc(firestore, "passwords", id);
  await deleteDoc(passwordRef);
}
