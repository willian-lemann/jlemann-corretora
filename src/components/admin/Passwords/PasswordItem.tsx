export interface Password {
  id: string;
  key: string;
  value: string;
}

interface PasswordItemProps {
  password: Password;
}

export const PasswordItem = ({ password }: PasswordItemProps) => {
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {password.id}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {password.key}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {password.value}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <button className="hover:text-gray-500 transition-colors duration-300 p-2">
            Editar
          </button>
          <button className="ml-4 hover:text-red-300 transition-colors duration-300 p-2">
            Deletar
          </button>
        </div>
      </td>
    </tr>
  );
};
