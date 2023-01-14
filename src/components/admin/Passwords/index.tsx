import { usePasswordsContext } from "../../../context/password";

import {
  MagnifyingGlassIcon as SearchIcon,
  PlusIcon as AddIcon,
} from "@heroicons/react/24/outline";

import { PasswordItem } from "./PasswordItem";
import { uniqueId } from "../../../utils/uniqueId";
import { AddModal } from "./AddModal";
import { useCallback, useState } from "react";
import { Password } from "../../../models/password";
import { DeleteModal } from "./DeleteModal";
import { EditModal } from "./EditModal";

export const Passwords = () => {
  const { passwords, isEmpty, searchPasswords, togglePasswordModal } =
    usePasswordsContext();

  const [deletePassword, setDeletePassword] = useState({
    key: "",
    value: "",
  });
  const [editPassword, setEditPassword] = useState<Password | null>(null);

  const handleEditItem = useCallback((password: Password) => {
    setEditPassword(password);
  }, []);

  const handleDeleteItem = useCallback((password: Password) => {
    setDeletePassword(password);
  }, []);

  return (
    <div className="container m-auto mx-auto py-6 px-4 sm:px-6 lg:px-8 outline-none">
      <section className="flex gap-4 justify-end w-full h-10 md:h-auto">
        <div className="bg-zinc-100 w-96 relative flex items-center rounded-md border border-zinc-200">
          <input
            type="text"
            placeholder="Procurar por senha"
            className="pl-2 text-zinc-600 flex-1 rounded-md h-full outline-none bg-transparent"
            onChange={({ target }) => searchPasswords(target.value)}
          />

          <SearchIcon className="h-6 w-6 mr-2 text-zinc-600" />
        </div>

        <button
          className="flex items-center hover:bg-gray-800 hover:text-white py-2 px-2 rounded-md transition-colors duration-300"
          onClick={() => togglePasswordModal("add")}
        >
          <span className="hidden md:block"> Adicionar mais </span>
          <AddIcon className="block md:hidden h-8 w-8" />
        </button>
      </section>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div>
              <div className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                <h1 className="text-lg">Senhas</h1>
              </div>

              {isEmpty ? (
                <div className=" p-4 bg-zinc-100 rounded-md text-center">
                  <h1>Nenhuma senha cadastrada</h1>
                </div>
              ) : (
                <table className="min-w-full table-auto">
                  <tbody>
                    {passwords.map((password) => (
                      <PasswordItem
                        key={password.id}
                        password={password}
                        onEditItem={handleEditItem}
                        onDeleteItem={handleDeleteItem}
                      />
                    ))}
                  </tbody>
                </table>
              )}

              <AddModal />
              <EditModal key={editPassword?.id} password={editPassword} />
              <DeleteModal key={deletePassword.key} password={deletePassword} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
