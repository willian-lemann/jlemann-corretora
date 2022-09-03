import { gql, useMutation, useQuery } from "@apollo/client";

export const CREATE_PASSWORD = gql`
  mutation ($data: PasswordCreateInput = { key: "", value: "" }) {
    createPassword(data: $data) {
      id
    }
  }
`;

export const PUBLISH_PASSWORD = gql`
  mutation MyMutation($id: ID = "") {
    publishPassword(where: { id: $id }, to: PUBLISHED) {
      id
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

export const useDeletePassword = () => {
  const [deletePassword, { loading, error, data }] =
    useMutation(DELETE_PASSWORD);
  return { deletePassword, loading, error, data };
};

export const usePublishPassword = () => {
  const [publishPassword, { data, loading, error }] =
    useMutation(PUBLISH_PASSWORD);

  return {
    publishPassword,
    data,
    loading,
    error,
  };
};
