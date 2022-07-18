/* This example requires Tailwind CSS v2.0+ */
import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Dashboard } from "../components/admin/Dashboard";
import { Header } from "../components/admin/Header";
import { Passwords } from "../components/admin/Passwords";

import { getSubscribers } from "../services/get-subscribers";

const Admin = () => {
  const [subscribers, setSubscribers] = useState([]);

  const loadSubscribers = async () => {
    const response = await getSubscribers();

    const { subscribers } = response.data;

    setSubscribers(subscribers);
  };

  useEffect(() => {
    loadSubscribers();
  }, []);

  return (
    <Tab.Group as="div" className="min-h-full">
      <Header />

      <Tab.Panels>
        <Tab.Panel>
          <Dashboard subscribers={subscribers.length} />
        </Tab.Panel>

        <Tab.Panel>
          <Passwords />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Admin;
