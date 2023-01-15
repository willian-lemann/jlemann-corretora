import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useMemo } from "react";
import { useAuth } from "../../../context/AuthContext";

const user = {
  name: "Juciane Lemann",
  email: "jucianeleman@hotmail.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

export const ProfileMenu = () => {
  const { logOut } = useAuth();

  const userNavigation = useMemo(
    () => [
      { name: "Meu Perfil", href: "#", handler: () => {} },
      { name: "Configurações", href: "#", handler: () => {} },
      { name: "Sair", href: "#", handler: () => logOut() },
    ],
    [logOut]
  );

  return (
    <>
      <Menu as="div" className="ml-3 relative">
        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">Open user menu</span>
          <div className="flex-shrink-0 w-8 h-8 relative">
            <Image
              className="rounded-full"
              src={user.imageUrl}
              alt="avatar image"
              fill
            />
          </div>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-20 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map(({ href, name, handler }) => (
              <Menu.Item key={name}>
                {({ active }) => (
                  <a
                    href={href}
                    className="block px-4 py-2 text-sm text-gray-700"
                    onClick={handler}
                  >
                    {name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};
