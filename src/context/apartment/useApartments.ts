import { useQuery } from "@apollo/client";

import { GET_APARTMENTS } from "../../lib/graphql/queries/apartments";
import { Apartment } from "../../types/apartment";

interface Params {
  apartments: Apartment[];
}

export function useApartments() {
  const { data, loading, error } = useQuery<Params>(GET_APARTMENTS);

  return {
    apartments: data?.apartments as Apartment[],
    loading,
    error,
  };
}
