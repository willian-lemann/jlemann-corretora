import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { usePasswordsContext } from "../../../context/password";

import { Password } from "../../../models/password";

interface DeleteModalProps {
  password: Password;
  deleteItem: string;
}

export const DeleteModal = ({ deleteItem, password }: DeleteModalProps) => {
  const { togglePasswordModal, passwordModal, removePassword } =
    usePasswordsContext();

  return (
    <Transition
      appear
      show={passwordModal.isDeleteModalOpen && deleteItem === password.id}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => togglePasswordModal("delete")}
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
                  Tem certeza que quer{" "}
                  <span className="text-red-600">deletar</span>?
                </Dialog.Title>

                <div className="my-4">
                  <span>Você está deletando</span>
                  <p className="rounded-md bg-zinc-100 py-2 px-2 my-2">
                    {password.value}
                  </p>
                </div>

                <div className="mt-2 flex justify-end gap-2">
                  <button onClick={() => togglePasswordModal("delete")}>
                    Cancelar
                  </button>
                  <button className="bg-red-600 text-white rounded-md px-2 py-2" onClick={() => removePassword(password.id as string)}>
                    Deletar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
