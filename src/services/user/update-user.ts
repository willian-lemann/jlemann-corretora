import { collection, updateDoc, doc } from "firebase/firestore";
import { firestore } from "../../config/firebase";
import { User } from "../../models/user";

interface Params {
  id: string;
  data: Partial<User>;
}

export async function updateUserService({ id, data }: Params) {
  const usersRef = doc(firestore, "users", id);
  await updateDoc(usersRef, { ...data });
}
