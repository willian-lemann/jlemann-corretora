import { Fragment, useMemo } from "react";
import Image from "next/image";

import { Disclosure, Menu, Tab, Transition } from "@headlessui/react";

import {
  FiBell as BellIcon,
  FiMenu as MenuIcon,
  FiX as XIcon,
} from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

const user = {
  name: "Juciane Lemann",
  email: "jucianeleman@hotmail.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Meu dashboard", href: "#", current: true, tabDisabled: false },
  { name: "Senhas", href: "#", current: false, tabDisabled: false },
  {
    name: "Gerenciamento de time",
    href: "#",
    current: false,
    tabDisabled: false,
  },
  { name: "Projetos", href: "#", current: false, tabDisabled: false },
  { name: "Calendario", href: "#", current: false, tabDisabled: false },
  { name: "Relatórios", href: "#", current: false, tabDisabled: false },
];

export const Header = () => {
  const { currentUser, logOut } = useAuth();

  const userNavigation = useMemo(
    () => [
      { name: "Meu Perfil", href: "#", handler: () => {} },
      { name: "Configurações", href: "#", handler: () => {} },
      { name: "Sair", href: "#", handler: () => logOut() },
    ],
    [logOut]
  );

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="relative w-8 h-8">
                  <Image
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                    fill
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Tab.List>
                      {navigation.map((item) => (
                        <Tab
                          as="a"
                          key={item.name}
                          href={item.href}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white
                        px-3 py-2 rounded-md text-sm font-medium"
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <div className="relative">
                          <Image
                            className="h-8 w-8 rounded-full"
                            src={
                              null ??
                              "https://avatars.githubusercontent.com/u/44612750?v=4"
                            }
                            alt="avatar image"
                            fill
                          />
                        </div>
                      </Menu.Button>

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
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white
                  block px-3 py-2 rounded-md text-base font-medium"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0 w-10 h-10 relative">
                  <Image
                    className="rounded-full"
                    src={user.imageUrl}
                    alt=""
                    fill
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
