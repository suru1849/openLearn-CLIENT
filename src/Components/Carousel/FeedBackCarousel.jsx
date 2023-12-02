import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import { getAllFeedBack } from "../../api/assignmentAndFeedback";
import { Carousel } from "flowbite-react";
import img1 from "../../assets/feedback-concept-hand-holding-blue-speech-bubble-copy-space-yellow-background_279525-24836.avif";

const FeedBackCarousel = () => {
  const { data: feedBacks = [], isLoading } = useQuery({
    enabled: true,
    queryFn: async () => await getAllFeedBack(),
    queryKey: ["feedBacks"],
  });

  if (isLoading) return <Loader />;

  return (
    <div className="my-20">
      <h1 className="text-3xl font-bold text-center my-10">
        Students Feed-backes
      </h1>
      {feedBacks.length > 0 ? (
        <div className="my-10">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <Carousel>
              {feedBacks?.map((data) => (
                <div key={data?._id} className="relative">
                  <figure className="w-full h-full">
                    <img
                      src={img1}
                      alt="..."
                      className="w-full h-full rounded-lg object-center"
                    />
                  </figure>
                  {/* info */}
                  <div
                    className=" bg-gray-500 py-2 px-2 rounded-lg absolute top-[18%] 
          md:top-[28%] lg:top-[39%] left-[25%] md:left-[26%] w-[50%] flex flex-col justify-center items-center"
                  >
                    <figure>
                      <img
                        src={data?.userImage}
                        className="w-24 h-24 border-2 rounded-full"
                      />
                    </figure>
                    <p className="text-xs md:text-2xl font-bold">
                      Name:{" "}
                      <span className="font-semibold text-red-400">
                        {data?.userName}
                      </span>
                    </p>
                    <p className="text-xs md:text-2xl font-bold">
                      Class Titile:{" "}
                      <span className="font-semibold text-red-400">
                        {data?.classTitle}
                      </span>
                    </p>
                    <p className="text-xs md:text-2xl font-bold w-full truncate">
                      FeedBack:{" "}
                      <span className="font-semibold text-red-400">
                        {data?.description}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center border-2 w-[60%] mx-auto p-3">
          <p className="text-lg">No Feed Back Found 😢</p>
        </div>
      )}
    </div>
  );
};

export default FeedBackCarousel;
