import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getUser } from "../api/auth";

const useUser = () => {
  const { user, loading } = useAuth();

  const { data: User = {}, isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getUser(user?.email),
    queryKey: ["User"],
  });

  return { ...User, isLoading };
};

export default useUser;
