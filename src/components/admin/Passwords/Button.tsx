import { usePasswordsContext } from "../../../context/password";
import { Loading } from "../../shared/loading";

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
    <div>
      <button className="cursor-pointer pr-10" onClick={onOpenModal}>
        Editar
      </button>

      <button
        onClick={() => onRemovePassword()}
        className="hover:text-red-600 transition-colors duration-300"
      >
        Remover
      </button>
    </div>
  );
};
