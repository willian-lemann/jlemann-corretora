import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid";
import { usePasswordsContext } from "../../../context/password";
interface ButtonProps {
  onEditItem(): void;
  onDeleteItem(): void;
}

export const Button = ({ onDeleteItem, onEditItem }: ButtonProps) => {
  const { togglePasswordModal } = usePasswordsContext();

  return (
    <div className="flex items-center gap-4">
      <button
        className="flex cursor-pointer"
        onClick={() => {
          togglePasswordModal("edit");
          onEditItem();
        }}
      >
        <PencilIcon className="text-zinc-500 h-5 w-5" />
      </button>

      <button
        onClick={() => {
          togglePasswordModal("delete");
          onDeleteItem();
        }}
        className=" hover:text-red-600 transition-colors duration-300"
      >
        <TrashIcon className="text-red-600 h-6 w-6" />
      </button>
    </div>
  );
};
