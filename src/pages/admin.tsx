import { Tab } from "@headlessui/react";
import { Dashboard } from "../components/admin/Dashboard";
import { Header } from "../components/admin/Header";
import { Passwords } from "../components/admin/Passwords";
import { withSSRAuth } from "../utils/withSSRAuth";

const Admin = () => {
  return (
    <Tab.Group as="div" className="min-h-full">
      <Header />

      <Tab.Panels>
        <Tab.Panel>
          <Dashboard />
        </Tab.Panel>

        <Tab.Panel>
          <Passwords />
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
