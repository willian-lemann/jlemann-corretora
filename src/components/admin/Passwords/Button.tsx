import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid";
interface ButtonProps {
  variant: "remove" | "add";
  onAddPassword: () => Promise<void>;
  onRemovePassword: () => Promise<void>;
  onOpenModal: () => void;
}

export const Button = ({
  variant,
  onRemovePassword,
  onAddPassword,
  onOpenModal,
}: ButtonProps) => {
  if (variant === "add") {
    return <button onClick={() => onAddPassword()}>Adicionar</button>;
  }

  return (
    <div className="flex items-center">
      <button className="flex  cursor-pointer pr-10" onClick={onOpenModal}>
        <span className="hidden md:block">Editar</span>

        <PencilIcon className="h-6 w-6 md:hidden" />
      </button>

      <button
        onClick={() => onRemovePassword()}
        className="hover:text-red-600 transition-colors duration-300"
      >
        <span className="hidden md:block">Remover</span>
        <TrashIcon className="h-6 w-6 md:hidden" />
      </button>
    </div>
  );
};
