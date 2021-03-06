import { gql } from "@apollo/client";

export interface PageContent {
  page: {
    content: [];
  };
}

export const GET_PAGE_CONTENT = gql`
  query {
    page(where: { id: "cl5dee5zf48740bkn2iwfe3qg" }) {
      content {
        ... on Header {
          title
          navigation
          subheaderTitle
          subheaderDescription
        }

        ... on Feature {
          title
          description
          features
        }

        ... on Gallery {
          title
          categories
        }
      }
    }
  }
`;
