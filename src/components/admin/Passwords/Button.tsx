import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid";
import { usePasswordsContext } from "../../../context/password";
interface ButtonProps {
  variant: "remove" | "add";
  onAddPassword: () => Promise<void>;
  onDeleteItem(): void;
}

export const Button = ({
  variant,
  onAddPassword,
  onDeleteItem,
}: ButtonProps) => {
  const { togglePasswordModal } = usePasswordsContext();

  if (variant === "add") {
    return <button onClick={() => onAddPassword()}>Adicionar</button>;
  }

  return (
    <div className="flex items-center">
      <button
        className="flex  cursor-pointer pr-4"
        onClick={() => togglePasswordModal("edit")}
      >
        <span className="hidden md:block">Editar</span>

        <PencilIcon className="text-zinc-500 h-6 w-6 md:hidden" />
      </button>

      <button
        onClick={() => {
          togglePasswordModal("delete");
          onDeleteItem();
        }}
        className=" hover:text-red-600 transition-colors duration-300"
      >
        <span className="hidden md:block">Remover</span>

        <TrashIcon className="block md:hidden text-red-600 h-6 w-6 " />
      </button>
    </div>
  );
};
