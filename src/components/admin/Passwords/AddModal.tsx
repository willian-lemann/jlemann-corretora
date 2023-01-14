import { Dialog, Transition } from "@headlessui/react";
import {
  Fragment,
  useState,
  useImperativeHandle,
  forwardRef,
  ChangeEvent,
} from "react";
import { usePasswordsContext } from "../../../context/password";
import { Password } from "../../../models/password";

import { addErrorNotification } from "../../shared/alert";

export interface AddModalHandles {
  openModal: () => void;
}

interface EditModalProps {
  password?: Password;
}

export const AddModal = () => {
  const { passwordModal, addNewPassword, togglePasswordModal } =
    usePasswordsContext();
  const [newPassword, setNewPassword] = useState({
    key: "",
    value: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setNewPassword((state) => ({ ...state, [name]: value }));
  };

  const handleSaveNewPassword = async () => {
    await addNewPassword(newPassword);
  };

  return (
    <>
      <Transition appear show={passwordModal.isAddModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => togglePasswordModal("add")}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Adicionar nova Senha
                  </Dialog.Title>
                  <div className="mt-6">
                    <section>
                      <p className="text-sm text-gray-500">Nome da Senha</p>
                      <input
                        className="w-full border-b-2  outline-none px-2 py-2 text-sm bg-transparent"
                        name="key"
                        placeholder="Nome da sua senha..."
                        value={newPassword.key}
                        onChange={handleChange}
                      />
                    </section>

                    <section className="mt-5">
                      <p className="text-sm text-gray-500">Valor da Senha</p>
                      <textarea
                        className="w-full h-40 outline-none rounded-md border resize-y px-2 py-2 mt-2 text-sm bg-transparent"
                        name="value"
                        placeholder="Digite o valor..."
                        value={newPassword.value}
                        onChange={handleChange}
                      />
                    </section>
                  </div>

                  <div className="mt-10 w-full flex justify-end gap-2">
                    <button
                      type="button"
                      className="inline-flex  justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => togglePasswordModal("add")}
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleSaveNewPassword}
                    >
                      Salvar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
