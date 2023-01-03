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

import {
  addErrorNotification,
  addSuccessNotification,
} from "../../shared/alert";

export interface ModalHandles {
  openModal: () => void;
}

interface EditModalProps {
  password: Password;
}

export const EditModal = forwardRef<ModalHandles, EditModalProps>(
  ({ password }, ref) => {
    const { editPassword } = usePasswordsContext();
    const [isOpen, setIsOpen] = useState(false);
    const [editData, setEditData] = useState({
      key: password.key,
      value: password.value,
    });

    const closeModal = () => {
      setIsOpen(false);
    };

    const openModal = () => {
      setIsOpen(true);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setEditData({ ...editData, [name]: value });
    };

    const handleSaveNewPassword = async () => {
      if (editData.key.length === 0 && editData.value.length === 0) {
        return addErrorNotification("Campos vazios, preencha-os!");
      }

      const { key, value } = editData;

      await editPassword(password.id as string, { key, value });

      closeModal();
    };

    useImperativeHandle(ref, () => ({
      openModal,
    }));

    return (
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                      Editar Senha
                    </Dialog.Title>
                    <div className="mt-2">
                      <section>
                        <p className="text-sm text-gray-500">Nome da Senha</p>
                        <input
                          className="w-full border-b-2 max-w-xs outline-none px-2 text-sm bg-transparent"
                          type="text"
                          name="key"
                          value={editData.key}
                          onChange={handleChange}
                        />
                      </section>

                      <section className="mt-5">
                        <p>Valor da Senha</p>
                        <input
                          className="w-full max-w-xs outline-none border-b-2 px-2 text-sm bg-transparent"
                          type="text"
                          name="value"
                          value={editData.value}
                          onChange={handleChange}
                        />
                      </section>
                    </div>

                    <div className="mt-10">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleSaveNewPassword}
                      >
                        Salvar nova senha!
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
  }
);
