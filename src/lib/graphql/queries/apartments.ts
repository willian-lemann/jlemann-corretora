import { gql } from "@apollo/client";

export const GET_APARTMENTS = gql`
  query {
    apartments {
      id
      name
    }
  }
`;

export const GET_APARTMENT_PHOTOS = gql`
  query MyQuery($apartmentId: ApartmentWhereUniqueInput = {}) {
    apartment(where: $apartmentId) {
      photos {
        id
        url(transformation: { image: { resize: { width: 1280, height: 720 } } })
      }
    }
  }
`;
