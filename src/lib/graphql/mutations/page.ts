import { gql, useMutation } from "@apollo/client";

export const CHANGE_TITLE = gql``;

export const useChangeTitle = () => {
  const [changeTitle, { data, loading, error }] = useMutation(CHANGE_TITLE);
  return {
    changeTitle,
    data,
    loading,
    error,
  };
};
