import Container from "../../Components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import { getClassByStatus } from "../../api/class";
import Loader from "../../Components/Loader/Loader";
import ClassCard from "./ClassCard";

const Classes = () => {
  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    enabled: true,
    queryFn: async () => await getClassByStatus({ status: "approved" }),
    queryKey: ["classes"],
  });

  console.log(classes);

  if (isLoading) return <Loader />;

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {classes?.map((Class) => (
          <ClassCard key={Class._id} Class={Class} />
        ))}
      </div>
    </Container>
  );
};

export default Classes;
