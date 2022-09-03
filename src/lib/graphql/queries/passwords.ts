import { gql, useQuery } from "@apollo/client";
import { Password } from "../../../types/passwords";

export const GET_PASSWORDS = gql`
  query {
    passwords {
      id
      key
      value
    }
  }
`;

interface PasswordsQuery {
  passwords: Password[];
}

export const usePasswords = () => {
  const { data, loading, error } = useQuery<PasswordsQuery>(GET_PASSWORDS);
  return { data, loading, error };
};
