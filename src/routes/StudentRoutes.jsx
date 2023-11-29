/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useUser from "../Hooks/useUser";
import Loader from "../Components/Loader/Loader";

const StudentRoutes = ({ children }) => {
  const { role, isLoading } = useUser();

  if (isLoading) return <Loader />;

  if (role !== "student") return <Navigate to="/" />;

  return children;
};

export default StudentRoutes;
