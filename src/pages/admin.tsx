/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import { Header } from "../components/admin/Header";

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
    <div className="min-h-full">
      <Header />

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <span>Numeros de inscritos: {subscribers.length}</span>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
