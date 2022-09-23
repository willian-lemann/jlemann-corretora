import { useCallback, useEffect, useState } from "react";
import { uuid } from "uuidv4";
import {
  useCreatePassword,
  useDeletePassword,
  usePublishPassword,
} from "../../../lib/graphql/mutations/passwords";

import { usePasswords } from "../../../lib/graphql/queries/passwords";
import { Password } from "../../../types/passwords";

import { addErrorNotification } from "../../shared/alert";
import { PasswordItem, Property } from "./PasswordItem";

export const Passwords = () => {
  const { data } = usePasswords();
  const { deletePassword, error: hasDeleteError } = useDeletePassword();
  const { createPassword } = useCreatePassword();
  const { publishPassword } = usePublishPassword();
  const [isAddingPassword, setIsAddingPassword] = useState<string[]>([]);

  const [passwords, setPasswords] = useState<Password[]>([]);

  const handleChangeEditInput = useCallback(
    (id: string | null, key: string, value: string) => {
      const newPasswords = passwords.map((password) => {
        if (password.id === id) {
          return {
            ...password,
            key,
            value,
          };
        }

        return password;
      });

      setPasswords(newPasswords);
    },
    [passwords]
  );

  const handleChangeInput = useCallback(
    (id: string | null, property: Property, value: string | null) => {
      const newPasswords = passwords.map((password) => {
        if (password.id === id) {
          return {
            ...password,
            [property]: value,
          };
        }

        return password;
      });

      setPasswords(newPasswords);
    },
    [passwords]
  );

  const handleAddMore = (id: string, newId: string) => {
    if (id) {
      const newPasswords = passwords.map((password) => {
        if (password.id === id) {
          return {
            ...password,
            id: newId,
            defaultValue: false,
          };
        }

        return password;
      });

      setPasswords(newPasswords);
    }

    setPasswords((state) => [
      ...state,
      { id: uuid(), key: "", value: "", defaultValue: true },
    ]);
  };

  const handleAddPassword = async (password: Password) => {
    if (password.key === "" && password.value === "")
      return addErrorNotification("Precisa preeencher os campos!");

    setIsAddingPassword((state) => [...state, String(password.id)]);

    try {
      const {
        data: {
          createPassword: { id },
        },
      } = await createPassword({
        variables: { data: { key: password.key, value: password.value } },
      });

      const {
        data: {
          publishPassword: { id: publishId },
        },
      } = await publishPassword({ variables: { id } });

      handleAddMore(String(password.id), publishId);
    } catch (error) {
    } finally {
      setIsAddingPassword((state) =>
        state.filter((item) => item !== password.id)
      );
    }
  };

  const handleRemovePassword = async (id: string | null) => {
    const previousPasswords = structuredClone(passwords);

    setPasswords((state) => state.filter((password) => password.id !== id));

    try {
      await deletePassword({ variables: { id } });

      if (hasDeleteError) {
        setPasswords(previousPasswords);
        addErrorNotification(hasDeleteError.message);
        return;
      }
    } catch (error) {
      setPasswords(previousPasswords);
      addErrorNotification("Erro ao excluir senha");
    }
  };

  useEffect(() => {
    if (data) {
      setPasswords((state) => [...state, ...data.passwords]);
    }
  }, [data]);

  return (
    <div className="container m-auto mx-auto py-6 px-4 sm:px-6 lg:px-8 outline-none">
      <section className="flex justify-end w-full">
        <button
          className="hover:bg-purple-800 hover:text-white py-2 px-2 rounded-md transition-colors duration-300"
          onClick={handleAddMore}
        >
          Adicionar mais
        </button>
      </section>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Nome da senha
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Valor
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Ações
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {passwords?.map((password) => (
                    <>
                      <PasswordItem
                        key={password.id}
                        defaultValue={password.defaultValue}
                        password={password}
                        isAdding={isAddingPassword.includes(
                          String(password.id)
                        )}
                        onChangeData={handleChangeInput}
                        onEdit={handleChangeEditInput}
                        onAddPassword={handleAddPassword}
                        onRemovePassword={handleRemovePassword}
                      />
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
