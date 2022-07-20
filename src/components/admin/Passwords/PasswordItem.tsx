import { KeyboardEvent, memo, useRef, useState } from "react";
import { useDeletePassword } from "../../../lib/graphql/mutations/passwords";
import { Password } from "../../../types/passwords";

export type Property = "key" | "value";

interface Editing {
  id: string;
  property: Property;
}

interface PasswordItemProps {
  password: Password;
  onChangeData: (id: string, property: Property, value: string) => void;
  onRemovePassword: (id: string) => Promise<void>;
}

export const PasswordItem = memo(
  ({ password, onChangeData, onRemovePassword }: PasswordItemProps) => {
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

    const handleDeletePassword = (id: any) => {
      deletePassword({ variables: { id } });
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
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {password.id}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {currentEditingItem?.id === password.id &&
          currentEditingItem?.property === "key" ? (
            <input
              ref={inputRef}
              type="text"
              className="outline-none px-2 py-1 w-full max-w-xs bg-transparent border-none"
              value={password.key}
              placeholder="Digite o nome da senha"
              onBlur={() => handleSubmit(null, password.id)}
              onKeyUp={(event) => handleSubmit(event, password.id)}
              onChange={({ target }) =>
                onChangeData(password.id, "key", target.value)
              }
            />
          ) : (
            <span
              onClick={() => handleEditing(password.id, "key")}
              className="cursor-pointer opacity-60"
            >
              {password.key || "Digite uma senha..."}
            </span>
          )}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {currentEditingItem?.id === password.id &&
          currentEditingItem?.property === "value" ? (
            <input
              ref={inputRef}
              type="text"
              className="w-full max-w-xs outline-none border-none px-2 py-1 bg-transparent"
              value={password.value}
              placeholder="Digite o valor para a senha"
              onBlur={() => handleSubmit(null, password.id)}
              onKeyUp={(event) => handleSubmit(event, password.id)}
              onChange={({ target }) =>
                onChangeData(password.id, "value", target.value)
              }
            />
          ) : (
            <span
              onClick={() => handleEditing(password.id, "key")}
              className="cursor-pointer opacity-60"
            >
              {password.value || "Digite um valor para a senha..."}
            </span>
          )}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">
          <button onClick={() => onRemovePassword(password.id)}>Deletar</button>
        </td>
      </tr>
    );
  }
);
