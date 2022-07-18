import { useCallback, useState } from "react";
import { PasswordItem, Password, Property } from "./PasswordItem";

export const Passwords = () => {
  const [passwords, setPasswords] = useState<Password[]>([
    {
      id: "19iasd",
      key: "senha 1",
      value: "senhavalue",
    },
  ]);

  const handleChangeInput = useCallback(
    (id: string, property: Property, value: string | null) => {
      const previousPasswords = structuredClone(passwords);

      console.log(value);
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

  return (
    <div className="container m-auto mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
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
                  {passwords.map((password) => (
                    <PasswordItem
                      key={password.id}
                      password={password}
                      onChangeData={handleChangeInput}
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
