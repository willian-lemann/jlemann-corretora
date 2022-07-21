import { useQuery } from "@apollo/client";
import { uuid } from "uuidv4";
import { useCallback, useEffect, useState } from "react";
import {
  useCreatePassword,
  useDeletePassword,
} from "../../../lib/graphql/mutations/passwords";

import { usePasswords } from "../../../lib/graphql/queries/passwords";
import { Password } from "../../../types/passwords";

import { PasswordItem, Property } from "./PasswordItem";

export const Passwords = () => {
  const { data } = usePasswords();
  const { deletePassword } = useDeletePassword();
  const { createPassword, error: createPasswordError } = useCreatePassword();

  const [passwordValue, setPasswordValue] = useState<Password>({
    id: "",
    key: "",
    value: "",
  });

  const [passwords, setPasswords] = useState<Password[]>([]);

  const handleChangeInput = useCallback(
    (id: string, property: Property, value: string | null) => {
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

  const handleAddPassword = async (password: Password) => {
    const lastElement = passwords.at(-1);

    if (lastElement?.key === "" || lastElement?.value === "") return;

    setPasswords((state) => [...state, password]);
    setPasswordValue({ id: uuid(), key: "", value: "" });
  };

  const handleRemovePassword = async (id: string | null) => {
    setPasswords(passwords.filter((item) => item.id !== id));

    deletePassword({ variables: { id } });
  };

  useEffect(() => {
    console.log(data?.passwords);
    if (data) {
      setPasswords((state) => [...state, ...data?.passwords]);
    }
  }, [data, data?.passwords]);

  return (
    <div className="container m-auto mx-auto py-6 px-4 sm:px-6 lg:px-8 outline-none">
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
                    <PasswordItem
                      key={password.id}
                      password={password}
                      onChangeData={handleChangeInput}
                      onAddPassword={handleAddPassword}
                      onRemovePassword={handleRemovePassword}
                    />
                  ))}

                  <PasswordItem
                    defaultItem
                    password={passwordValue}
                    onChangeData={(id, property, value) =>
                      setPasswordValue((state) => ({
                        ...state,
                        id,
                        [property]: value,
                      }))
                    }
                    onAddPassword={handleAddPassword}
                    onRemovePassword={handleRemovePassword}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
