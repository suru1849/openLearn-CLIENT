import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getClasses } from "../../../../api/class";
import Loader from "../../../../Components/Loader/Loader";
import AllClassTableRow from "./AllClassTableRow";
import EmptyPage from "../../../../Components/EmptyPage/EmptyPage";

const AllClasses = () => {
  const { user } = useAuth();

  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    enabled: !!user?.email,
    queryFn: async () => await getClasses(),
    queryKey: ["classes"],
  });

  if (isLoading) return <Loader />;

  return (
    <>
      {classes.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="uppercase">
                <th>Title</th>
                <th>Email</th>
                <th>Short Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {classes?.map((Class) => (
                <AllClassTableRow
                  key={Class._id}
                  Class={Class}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyPage label={"No Class Available"} />
      )}
    </>
  );
};

export default AllClasses;
