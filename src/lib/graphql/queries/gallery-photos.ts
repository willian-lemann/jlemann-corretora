import { gql } from "@apollo/client";

export interface GalleryPhotos {
  page: {
    content: [];
  };
}

export const GET_GALLERY_PHOTOS = gql`
  query {
    apartment(where: { id: "cl5iuthzn20x50blwfmy810oq" }) {
      id
      name
      photos {
        id
        url(transformation: { image: { resize: { width: 500, height: 500 } } })
      }
    }
  }
`;
