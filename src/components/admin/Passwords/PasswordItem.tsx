import { memo, useRef, useState } from "react";
import { useUpdatePassword } from "../../../lib/graphql/mutations/passwords";
import { Password } from "../../../types/passwords";
import { Button } from "./Button";
import { EditModal, ModalHandles } from "./EditModal";

export type Property = "key" | "value";

interface PasswordItemProps {
  defaultValue: boolean;
  password: Password;
  isAdding: boolean;
  onEdit: (id: string | null, key: string, value: string) => void;
  onChangeData: (id: string | null, property: Property, value: string) => void;
  onAddPassword: (password: Password) => Promise<void>;
  onRemovePassword: (id: string | null) => Promise<void>;
}

export const PasswordItem = memo(
  ({
    defaultValue,
    password,
    isAdding,
    onEdit,
    onChangeData,
    onAddPassword,
    onRemovePassword,
  }: PasswordItemProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const modalRef = useRef<ModalHandles>(null);
    const { updatePassword } = useUpdatePassword();

    const handleUpdatePassword = (
      id: string | null,
      key: string,
      value: string
    ) => {};

    const handleOpenModal = () => {
      modalRef.current?.openModal();
    };

    return (
      <>
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 relative">
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <input
              ref={inputRef}
              type="text"
              className="outline-none px-2 text-sm w-full max-w-xs bg-transparent border-none"
              value={password.key}
              placeholder="Digite o nome da senha"
              disabled={!defaultValue}
              onChange={({ target }) =>
                onChangeData(password?.id, "key", target.value)
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
              disabled={!defaultValue}
              onChange={({ target }) =>
                onChangeData(password.id, "value", target.value)
              }
            />
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 min-w-[200px]">
            <Button
              variant={defaultValue ? "add" : "remove"}
              loading={isAdding}
              onOpenModal={handleOpenModal}
              onAddPassword={() => onAddPassword(password)}
              onRemovePassword={() => onRemovePassword(password.id)}
            />
          </td>
        </tr>

        <EditModal ref={modalRef} password={password} onEdit={onEdit} />
      </>
    );
  }
);
