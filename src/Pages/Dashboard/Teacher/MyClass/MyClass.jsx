import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import { getAddedClass } from "../../../../api/class";
import MyClassCard from "./MyClassCard";
import Loader from "../../../../Components/Loader/Loader";
import EmptyPage from "../../../../Components/EmptyPage/EmptyPage";

const MyClass = () => {
  const { user } = useAuth();

  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    enabled: !!user?.email,
    queryFn: async () => await getAddedClass(user?.email),
    queryKey: ["classes"],
  });

  if (isLoading) return <Loader />;

  return (
    <>
      {classes.length > 0 ? (
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 m-3">
          {classes?.map((Class) => (
            <MyClassCard key={Class._id} Class={Class} refetch={refetch} />
          ))}
        </div>
      ) : (
        <EmptyPage label={"No Class Available"} />
      )}
    </>
  );
};

export default MyClass;
