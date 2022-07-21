import { gql, useMutation, useQuery } from "@apollo/client";
import { Password } from "../../../types/passwords";
import { GET_PASSWORDS } from "../queries/passwords";

export const CREATE_PASSWORD = gql`
  mutation ($data: PasswordCreateInput = { key: "", value: "" }) {
    createPassword(data: $data) {
      documentInStages(stages: PUBLISHED)
    }
  }
`;

export const DELETE_PASSWORD = gql`
  mutation ($id: ID!) {
    deletePassword(where: { id: $id }) {
      id
    }
  }
`;

export const useCreatePassword = () => {
  const [createPassword, { data, loading, error }] =
    useMutation(CREATE_PASSWORD);
  return { createPassword, data, loading, error };
};

const updateCache = (cache: any, { data }) => {
  // Fetch the todos from the cache
  const { passwords } = cache.readQuery({
    query: GET_PASSWORDS,
  });

  console.log("passwords", passwords);
  console.log("data", data);

  cache.writeQuery({
    query: GET_PASSWORDS,
    data: { passwords: {} },
  });
};

export const useDeletePassword = () => {
  const [deletePassword, { loading, error, data }] =
    useMutation(DELETE_PASSWORD);

  console.log(data);
  return { deletePassword, loading, error, data };
};
