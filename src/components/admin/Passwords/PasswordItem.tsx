import { memo, useRef, useState } from "react";
import { usePasswordsContext } from "../../../context/password";

import { Password } from "../../../models/password";
import { classNames } from "../../../utils/classNames";
import { Button } from "./Button";
import { DeleteModal } from "./DeleteModal";
import { EditModal, EditModalHandles } from "./EditModal";

export type Property = "key" | "value";

interface PasswordItemProps {
  password: Password;
}

export const PasswordItem = memo(({ password }: PasswordItemProps) => {
  const { passwords, addNewPassword, mutate } = usePasswordsContext();
  const [deleteItem, setDeleteItem] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeData = (id: string, property: string, value: string) => {
    const newPasswords = passwords.map((password) => {
      if (password.id === id) {
        return {
          ...password,
          [property]: value,
        };
      }

      return password;
    });

    mutate(newPasswords);
  };

  return (
    <>
      <tr
        className={classNames(
          password.defaultValue ? "hidden md:flex" : "",
          "bg-white border-b last:border-none transition duration-300 ease-in-out hover:bg-gray-100 relative"
        )}
      >
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <input
            ref={inputRef}
            type="text"
            className="outline-none px-2 text-sm w-full max-w-xs bg-transparent border-none"
            value={password.key}
            placeholder="Digite o nome da senha"
            disabled={!password.defaultValue}
            onChange={({ target }) =>
              handleChangeData(password.id as string, "key", target.value)
            }
          />
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <input
            ref={inputRef}
            type="text"
            className="w-full max-w-xs outline-none border-none px-2 text-sm bg-transparent"
            value={password.value}
            disabled={!password.defaultValue}
            placeholder="Digite o valor para a senha"
            onChange={({ target }) =>
              handleChangeData(password?.id as string, "value", target.value)
            }
          />
        </td>
        <td className="flex justify-end md:block text-sm text-gray-900 font-light px-2 md:px-6  py-4 md:min-w-[200px] min-w-0">
          <Button
            variant={password.defaultValue ? "add" : "remove"}
            onAddPassword={() => addNewPassword(password)}
            onDeleteItem={() => setDeleteItem(password.id as string)}
          />
        </td>
      </tr>

      <EditModal password={password} />
      <DeleteModal deleteItem={deleteItem} password={password} />
    </>
  );
});
