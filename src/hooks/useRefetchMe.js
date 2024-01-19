import { useMeQuery } from "../redux/api/user";

export const useRefetchMe = () => {
  const { refetch } = useMeQuery();
  return refetch;
};
