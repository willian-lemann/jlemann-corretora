import { gql } from "@apollo/client";

export interface GalleryPhotos {
  page: {
    content: [];
  };
}

export const GET_APARTMENT_PHOTOS = gql`
  query {
    apartments {
      id
      photos {
        id
        url(transformation: { image: { resize: { width: 500, height: 500 } } })
      }
    }
  }
`;

