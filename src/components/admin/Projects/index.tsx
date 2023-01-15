import {
  useApartments,
  useApartmentsDrafted,
} from "../../../context/apartment/useApartments";

import { Tab } from "@headlessui/react";
import { useMemo } from "react";
import { formatDate } from "../../../functions/formatDate";
import { ApartmentList } from "./ApartmentList";

export const Projects = () => {
  const { apartments, total } = useApartments();
  const { draftedApartments, totalDrafted } = useApartmentsDrafted();

  const tabList = useMemo(
    () => [
      {
        id: 1,
        label: "Publicados",
        total: total,
      },
      {
        id: 2,
        label: "Rascunhos",
        total: totalDrafted,
      },
    ],
    [total, totalDrafted]
  );

  return (
    <div className="container m-auto mx-auto py-6 px-4 sm:px-6 lg:px-8 outline-none">
      <header className="my-2">
        <h1 className="text-lg">Meus Projetos</h1>
      </header>

      <Tab.Group as="div">
        <Tab.List className="flex items-center gap-4">
          {tabList.map((tab) => (
            <Tab
              key={tab.id}
              as="span"
              className="outline-none flex items-center cursor-pointer"
            >
              {tab.label}
              <span className="ml-1 bg-zinc-500 px-2 text-white rounded-full text-sm">
                {tab.total}
              </span>
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="flex gap-2">
          <Tab.Panel>
            <ApartmentList list={apartments} type="PUBLISHED" />
          </Tab.Panel>

          <Tab.Panel>
            <ApartmentList list={draftedApartments} type="DRAFT" />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
