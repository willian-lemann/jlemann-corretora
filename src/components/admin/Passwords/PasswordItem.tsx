import { KeyboardEvent, memo, useRef, useState } from "react";
import { Password } from "../../../types/passwords";

export type Property = "key" | "value";

interface Editing {
  id: string | null;
  property: Property;
}

interface PasswordItemProps {
  password: Password;
  defaultItem: boolean;
  onChangeData: (id: string, property: Property, value: string) => void;
  onAddPassword: (password: Password) => Promise<void>;
  onRemovePassword: (id: string | null) => Promise<void>;
}

export const PasswordItem = memo(
  ({
    defaultItem,
    password,
    onChangeData,
    onAddPassword,
    onRemovePassword,
  }: PasswordItemProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [editing, setEditing] = useState<Editing[]>([]);

    const handleEditing = (id: string, property: Property) => {
      const alreadyExist = editing.find((item) => item.id === id);

      if (alreadyExist) {
        const newEditing = editing.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              property,
            };
          }

          return item;
        });

        return setEditing(newEditing);
      }

      setEditing([...editing, { id, property }]);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    };

    const handleSubmit = (
      event: KeyboardEvent<HTMLInputElement> | null,
      id: string
    ) => {
      if (!event) {
        return setEditing(editing.filter((item) => item.id !== password.id));
      }

      if (event.key === "Enter") {
        setEditing(editing.filter((item) => item.id !== password.id));
      }
    };

    const currentEditingItem = editing.find((item) => item.id === password.id);

    return (
      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 relative">
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <input
            ref={inputRef}
            type="text"
            className="outline-none px-2 text-sm w-full max-w-xs bg-transparent border-none"
            value={password.key}
            placeholder="Digite o nome da senha"
            onChange={({ target }) =>
              onChangeData(password.id, "key", target.value)
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
              onChangeData(password.id, "value", target.value)
            }
          />
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">
          {defaultItem ? (
            <button onClick={() => onAddPassword(password)}>Adicionar</button>
          ) : (
            <button onClick={() => onRemovePassword(password.id)}>
              Remover
            </button>
          )}
        </td>
      </tr>
    );
  }
);
