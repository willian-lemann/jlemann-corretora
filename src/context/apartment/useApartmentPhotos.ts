import { useQuery } from "@apollo/client";

import { GET_APARTMENT_PHOTOS } from "../../lib/graphql/queries/apartments";
import { ApartmentPhotos } from "../../types/apartment";

interface Params {
  apartment: {
    photos: ApartmentPhotos[];
  };
}

export function useApartmentPhotos(apartmentId: string) {
  const variables = {
    apartmentId: { id: apartmentId },
  };

  const { data, loading, error } = useQuery<Params>(GET_APARTMENT_PHOTOS, {
    variables,
  });

  return {
    photos: data?.apartment?.photos as ApartmentPhotos[],
    loading,
    error,
  };
}
