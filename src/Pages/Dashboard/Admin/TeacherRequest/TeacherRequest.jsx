import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import { getAllTeacherReq } from "../../../../api/auth";
import Loader from "../../../../Components/Loader/Loader";
import TeacherReqyestTableRow from "./TeacherReqyestTableRow";

const TeacherRequest = () => {
  const { user } = useAuth();

  const {
    data: requests = [],
    isLoading,
    refetch,
  } = useQuery({
    enabled: !!user?.email,
    queryFn: async () => await getAllTeacherReq(),
    queryKey: ["requests"],
  });

  console.log(requests);

  if (isLoading) return <Loader />;

  return (
    <div className="overflow-x-auto">
      <table className="table ">
        {/* head */}
        <thead>
          <tr className="uppercase">
            <th>Name</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {requests?.map((user) => (
            <TeacherReqyestTableRow
              key={user._id}
              user={user}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherRequest;
