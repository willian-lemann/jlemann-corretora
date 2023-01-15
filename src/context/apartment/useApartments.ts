import { useQuery } from "@apollo/client";

import {
  GET_APARTMENTS,
  GET_APARTMENTS_DRAFTED,
} from "../../lib/graphql/queries/apartments";
import { Apartment } from "../../types/apartment";

interface Params {
  apartments: Apartment[];
}

export function useApartments() {
  const { data, loading, error } = useQuery<Params>(GET_APARTMENTS);

  return {
    apartments: data?.apartments as Apartment[],
    isLoadingApartments: loading,
    apartmentsError: error,
    total: data?.apartments.length,
  };
}

export function useApartmentsDrafted() {
  const { data, loading, error } = useQuery<Params>(GET_APARTMENTS_DRAFTED);

  return {
    draftedApartments: data?.apartments as Apartment[],
    isLoadingdraftedApartments: loading,
    draftedApartmentsError: error,
    totalDrafted: data?.apartments.length,
  };
}
