import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { uuid } from "uuidv4";
import {
  addErrorNotification,
  addSuccessNotification,
} from "../../components/shared/alert";
import { Password } from "../../models/password";
import { createPasswordService } from "../../services/password/create-password";
import { getPasswords } from "../../services/password/get-passwords";
import { removePasswordService } from "../../services/password/remove-password";
import { updatePasswordService } from "../../services/password/update-password";
import { uniqueId } from "../../utils/uniqueId";

type ModalTypes = "add" | "edit" | "delete";
export interface ContextParams {
  isEmpty: boolean;
  isLoading: boolean;
  passwords: Password[];
  mutate: Dispatch<SetStateAction<Password[]>>;
  search: string;
  passwordModal: {
    isAddModalOpen: boolean;
    isEditModalOpen: boolean;
    isDeleteModalOpen: boolean;
  };
  addNewPassword(password: Password): Promise<void>;
  editPassword(id: string, data: Partial<Password>): Promise<void>;
  removePassword(id: string): Promise<void>;
  searchPasswords(search: string): void;
  togglePasswordModal(modalTypes: ModalTypes): void;
}

export function usePasswords(): ContextParams {
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [passwordModal, setPasswordModal] = useState({
    isAddModalOpen: false,
    isEditModalOpen: false,
    isDeleteModalOpen: false,
  });

  const togglePasswordModal = (modal: ModalTypes) => {
    const functionBasedOnModal = {
      add: () =>
        setPasswordModal((state) => ({
          ...state,
          isAddModalOpen: !state.isAddModalOpen,
        })),

      edit: () =>
        setPasswordModal((state) => ({
          ...state,
          isAddModalOpen: !state.isEditModalOpen,
        })),

      delete: () =>
        setPasswordModal((state) => ({
          ...state,
          isDeleteModalOpen: !state.isDeleteModalOpen,
        })),
    };

    return functionBasedOnModal[modal]();
  };

  const searchPasswords = (value: string) => {
    setSearch(value);
  };

  const addNewPassword = async (password: Password) => {
    if (password.key === "" && password.value === "") {
      return addErrorNotification("Precisa preeencher os campos!");
    }

    const previousPasswords = structuredClone(passwords);

    console.log("new", password);
    setPasswords((state) => [
      ...state,
      {
        id: uniqueId(),
        key: password.key,
        value: password.value,
        defaultValue: false,
      },
      { id: uniqueId(), key: "", value: "", defaultValue: true },
    ]);

    try {
      await createPasswordService(password);
    } catch (error) {
      addErrorNotification("Erro ao adicionar nova senha");
      setPasswords(previousPasswords);
    }
  };

  const editPassword = async (id: string, data: Partial<Password>) => {
    const previousPasswords = structuredClone(passwords);

    const newPasswords = passwords.map((password) => {
      if (password.id === id) {
        return {
          ...password,
          ...data,
        };
      }

      return password;
    });

    setPasswords(newPasswords);

    addSuccessNotification("Senha salva com sucesso!");

    try {
      await updatePasswordService({ id, data });
    } catch (error) {
      addErrorNotification("Erro ao editar senha");
      setPasswords(previousPasswords);
    }
  };

  const removePassword = async (id: string) => {
    const previousPasswords = structuredClone(passwords);

    const newPasswords = passwords.filter((password) => password.id !== id);

    setPasswords(newPasswords);

    togglePasswordModal("delete");

    try {
      await removePasswordService(id);
    } catch (error) {
      addErrorNotification("Error ao remover senha");
      setPasswords(previousPasswords);
    }
  };

  const data = useMemo(() => {
    const filteredPasswords =
      search.length > 0
        ? passwords.filter(
            (password) =>
              password.key.toLowerCase().includes(search.toLowerCase()) ||
              password.value.toLowerCase().includes(search.toLowerCase())
          )
        : passwords;

    return filteredPasswords;
  }, [passwords, search]);

  useEffect(() => {
    const loadPasswords = async () => {
      const data = await getPasswords();
      setPasswords(data);
    };

    loadPasswords().finally(() => setIsLoading(false));
  }, []);

  return {
    isEmpty: data.length === 0,
    isLoading,
    passwords: data,
    search,
    mutate: setPasswords,
    passwordModal,
    addNewPassword,
    editPassword,
    removePassword,
    searchPasswords,
    togglePasswordModal,
  };
}
