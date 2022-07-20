import { gql, useQuery } from "@apollo/client";

export const GET_PASSWORDS = gql`
  query {
    passwords {
      id
      key
      value
    }
  }
`;

export const usePasswords = () => {
  const { data, loading, error } = useQuery(GET_PASSWORDS);
  return { data, loading, error };
};
