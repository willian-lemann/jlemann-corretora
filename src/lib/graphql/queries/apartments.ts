import { gql } from "@apollo/client";

export const GET_APARTMENTS = gql`
  query {
    apartments {
      id
      name
      createdAt
    }
  }
`;

export const GET_APARTMENTS_DRAFTED = gql`
  query {
    apartments(
      stage: DRAFT
      where: { documentInStages_none: { stage: PUBLISHED } }
    ) {
      id
      name
      createdAt
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

export const PUBLISH_APARTMENT = gql`
  mutation MyMutation($apartmentId: ApartmentWhereUniqueInput = {}) {
    publishApartment(where: $apartmentId, to: PUBLISHED) {
      id
    }
  }
`;

export const GET_ASSETS = gql`
  query {
    assets {
      id
      fileName
      url(transformation: { image: { resize: { width: 1280, height: 720 } } })
    }
  }
`;
