import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

export const useAuth = () => {
  const data = useContext(AuthContext);

  return data;
};
