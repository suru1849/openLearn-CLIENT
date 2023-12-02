import { getSortedClass } from "../../api/class";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import { Carousel } from "flowbite-react";

const Carousell = () => {
  const { data: classes = [], isLoading } = useQuery({
    enabled: true,
    queryFn: async () => await getSortedClass(),
    queryKey: ["classes"],
  });

  if (isLoading) return <Loader />;

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center my-10">Top Classes</h1>
      <div className="relative h-56 overflow-hidden rounded-lg md:h-[600px]">
        <Carousel>
          {classes?.map((Class) => (
            <div key={Class._id} className="relative">
              <figure className="w-full h-full">
                <img
                  src={Class.image}
                  alt="..."
                  className="w-full h-full rounded-lg object-center"
                />
              </figure>
              {/* info */}
              <div
                className=" bg-amber-100 opacity-75 p-3 rounded-lg absolute top-[28%]
              md:top-[42%] left-[25%] md:left-[28%] w-[50%]"
              >
                <p className="text-xs md:text-2xl font-bold">
                  Title:
                  <span className="font-semibold text-red-400">
                    {Class?.title}
                  </span>
                </p>
                <p className="text-xs md:text-2xl font-bold">
                  Description:
                  <span className="font-semibold text-red-400">
                    {Class?.description}
                  </span>
                </p>
                <p className="text-xs md:text-2xl font-bold">
                  Total Enroll:
                  <span className="font-semibold text-red-400">
                    {Class?.enroll}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Carousell;
