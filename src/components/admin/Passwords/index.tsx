import { usePasswordsContext } from "../../../context/password";

import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";

import { PasswordItem } from "./PasswordItem";
import { uniqueId } from "../../../utils/uniqueId";

export const Passwords = () => {
  const { passwords, mutate, searchPasswords } = usePasswordsContext();

  const handleAddMore = (id: string | null, newId: string | null) => {
    mutate((state) => [
      ...state,
      { id: uniqueId(), key: "", value: "", defaultValue: true },
    ]);
  };

  return (
    <div className="container m-auto mx-auto py-6 px-4 sm:px-6 lg:px-8 outline-none">
      <section className="flex gap-4 justify-end w-full">
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
          className="hover:bg-purple-800 hover:text-white py-2 px-2 rounded-md transition-colors duration-300"
          onClick={() => handleAddMore(null, null)}
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
                  {passwords.map((password) => (
                    <PasswordItem key={password.id} password={password} />
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
