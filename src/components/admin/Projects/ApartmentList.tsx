import { TrashIcon } from "@heroicons/react/24/solid";
import { formatDate } from "../../../functions/formatDate";
import { Apartment } from "../../../types/apartment";

type Status = "DRAFT" | "PUBLISHED";

type ApartmentListProps = {
  list: Apartment[];
  type: Status;
};

export const ApartmentList = ({ list, type }: ApartmentListProps) => {
  return (
    <ul className="container w-screen">
      {list?.map((apartment) => (
        <li
          key={apartment.id}
          className="list-none bg-zinc-200 py-4 px-4 mt-4 rounded-md cursor-pointer flex items-center justify-between"
        >
          <section className="flex gap-4">
            <span className="text-zinc-900">{apartment.name}</span>
            <span>Criado em: {formatDate(apartment.createdAt)}</span>
          </section>

          <section>
            <div className="flex items-center gap-4">
              {type === "DRAFT" ? <button className="hover:text-green-700 transition-colors duration-300">Publicar</button> : null}
              <button>
                <TrashIcon className="w-6 h-6 text-red-600" />
              </button>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
};
