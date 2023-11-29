import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import { getAddedClass } from "../../../../api/class";
import MyClassCard from "./MyClassCard";
import Loader from "../../../../Components/Loader/Loader";

const MyClass = () => {
  const { user } = useAuth();

  const { data: classes = [], isLoading } = useQuery({
    enabled: !!user?.email,
    queryFn: async () => await getAddedClass(user?.email),
    queryKey: ["classes"],
  });

  console.log(classes);

  if (isLoading) return <Loader />;

  return (
    <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 m-3">
      {classes?.map((Class) => (
        <MyClassCard key={Class._id} Class={Class} />
      ))}
    </div>
  );
};

export default MyClass;
