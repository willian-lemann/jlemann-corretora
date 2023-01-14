import { memo, useRef, useState } from "react";
import { usePasswordsContext } from "../../../context/password";
import { usePasswords } from "../../../context/password/usePasswords";

import { Password } from "../../../models/password";
import { Button } from "./Button";
import { EditModal, ModalHandles } from "./EditModal";

export type Property = "key" | "value";

interface PasswordItemProps {
  password: Password;
}

export const PasswordItem = memo(({ password }: PasswordItemProps) => {
  const { passwords, addNewPassword, removePassword, mutate } =
    usePasswordsContext();

  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<ModalHandles>(null);

  const handleOpenModal = () => {
    modalRef.current?.openModal();
  };

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
      <tr className="bg-white border-b last:border-none transition duration-300 ease-in-out hover:bg-gray-100 relative">
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
            placeholder="Digite o valor para a senha"
            onChange={({ target }) =>
              handleChangeData(password?.id as string, "value", target.value)
            }
          />
        </td>
        <td className="flex justify-end md:block text-sm text-gray-900 font-light px-2 md:px-6  py-4 min-w-[200px]">
          <Button
            variant={password.defaultValue ? "add" : "remove"}
            onOpenModal={handleOpenModal}
            onAddPassword={() => addNewPassword(password)}
            onRemovePassword={() => removePassword(password.id as string)}
          />
        </td>
      </tr>

      <EditModal ref={modalRef} password={password} />
    </>
  );
});
