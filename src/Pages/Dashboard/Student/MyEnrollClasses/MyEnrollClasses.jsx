import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import Loader from "../../../../Components/Loader/Loader";
import { getUserEnrolls } from "../../../../api/enrolls";
import MyEnrollClassesRow from "./MyEnrollClassesRow";

const MyEnrollClasses = () => {
  const { user, loading } = useAuth();

  const { data: classes = [], isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getUserEnrolls(user?.email),
    queryKey: ["classes"],
  });

  if (isLoading) return <Loader />;

  return (
    <div className="overflow-x-auto">
      <table className="table ">
        {/* head */}
        <thead>
          <tr className="uppercase">
            <th>Title</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {classes?.map((enroll) => (
            <MyEnrollClassesRow key={enroll._id} enroll={enroll} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyEnrollClasses;
