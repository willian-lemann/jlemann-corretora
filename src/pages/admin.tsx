import { Tab } from "@headlessui/react";
import { Dashboard } from "../components/admin/Dashboard";
import { Header } from "../components/admin/Header";
import { Passwords } from "../components/admin/Passwords";
import { withSSRAuth } from "../utils/withSSRAuth";

import { PasswordsProvider } from "../context/password";
import { Projects } from "../components/admin/Projects";

const Admin = () => {
  return (
    <Tab.Group as="div" className="min-h-full">
      <Header />

      <Tab.Panels>
        <Tab.Panel>
          <Dashboard />
        </Tab.Panel>

        <Tab.Panel>
          <PasswordsProvider>
            <Passwords />
          </PasswordsProvider>
        </Tab.Panel>

        <Tab.Panel>
          <h1>gerencimento</h1>
        </Tab.Panel>

        <Tab.Panel>
          <Projects />
        </Tab.Panel>

        <Tab.Panel>
          <h1>Calendario</h1>
        </Tab.Panel>

        <Tab.Panel>
          <h1>Relatorios</h1>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export const getServerSideProps = withSSRAuth(async (context) => {
  return {
    props: {},
  };
});

export default Admin;
