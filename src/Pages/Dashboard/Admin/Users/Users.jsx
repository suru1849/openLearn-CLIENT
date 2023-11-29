import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import { getAllUsers } from "../../../../api/auth";
import Loader from "../../../../Components/Loader/Loader";
import UsersTableRow from "./UsersTableRow";

const Users = () => {
  const { user, loading } = useAuth();

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getAllUsers(),
    queryKey: ["users"],
  });

  if (isLoading) return <Loader />;

  return (
    <div className="overflow-x-auto">
      <table className="table ">
        {/* head */}
        <thead>
          <tr className="uppercase">
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {users?.map((user) => (
            <UsersTableRow key={user._id} user={user} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
