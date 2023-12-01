import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import { getAllUsers } from "../../../../api/auth";
import Loader from "../../../../Components/Loader/Loader";
import UsersTableRow from "./UsersTableRow";
import { useEffect, useState } from "react";
import axiosSecure from "../../../../api";

const Users = () => {
  const { user, loading } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/users?searchItem=''`).then((data) => {
      console.log(data.data);
      setUsers(data.data);
    });
  }, []);

  // const {
  //   data: users = [],
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   enabled: !loading && !!user?.email,
  //   queryFn: async () => await getAllUsers(),
  //   queryKey: ["users"],
  // });

  // if (isLoading) return <Loader />;

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
            <UsersTableRow
              key={user._id}
              user={user}
              // refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
