import { useQuery } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { useDeletePassword } from "../../../lib/graphql/mutations/passwords";

import { usePasswords } from "../../../lib/graphql/queries/passwords";
import { Password } from "../../../types/passwords";

import { PasswordItem, Property } from "./PasswordItem";

export const Passwords = () => {
  const { loading, error, data } = usePasswords();
  const [passwords, setPasswords] = useState<Password[]>([]);
  const { deletePassword } = useDeletePassword();

  const handleChangeInput = useCallback(
    (id: string, property: Property, value: string | null) => {},
    []
  );

  const handleRemovePassword = (id: string) => {
    setPasswords(passwords.filter((item) => item.id !== id));

    deletePassword({ variables: { id } });
  };

  useEffect(() => {
    setPasswords(data?.passwords);
  }, [data?.passwords]);

  return (
    <div className="container m-auto mx-auto py-6 px-4 sm:px-6 lg:px-8">
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
                      #
                    </th>
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
                      onRemovePassword={handleRemovePassword}
                    />
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
