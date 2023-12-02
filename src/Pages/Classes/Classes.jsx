import Container from "../../Components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import { getClassByStatus } from "../../api/class";
import Loader from "../../Components/Loader/Loader";
import ClassCard from "./ClassCard";
import EmptyPage from "../../Components/EmptyPage/EmptyPage";
import { getTotal } from "../../api/statistics";
import { useEffect, useState } from "react";

const Classes = () => {
  const [totalClass, setTotalClass] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { data: classes = [], isLoading } = useQuery({
    enabled: true,
    queryFn: async () =>
      await getClassByStatus({
        status: "approved",
        skip: currentPage * 6,
        limit: 6,
      }),
    queryKey: ["classes", currentPage],
  });

  useEffect(() => {
    getTotal().then((data) => {
      setTotalClass(data.class);
    });
  }, []);

  // Pagination
  const pages = [...Array(Math.ceil(totalClass / 6)).keys()];

  if (isLoading) return <Loader />;

  return (
    <Container>
      {classes.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {classes?.map((Class) => (
              <ClassCard key={Class._id} Class={Class} />
            ))}
          </div>
          {/* pagination */}
          {pages?.length > 1 ? (
            <div className="flex  justify-center items-center my-7">
              <p className="text-xl font-bold mx-2">Page:</p>
              <div className="join">
                {pages.map((data) => (
                  <button
                    key={data}
                    onClick={() => setCurrentPage(data)}
                    className={`join-item btn btn-square ${
                      data === currentPage ? "bg-blue-500" : ""
                    }`}
                  >
                    {data + 1}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <EmptyPage label={"No Class Available"} />
      )}
    </Container>
  );
};

export default Classes;
