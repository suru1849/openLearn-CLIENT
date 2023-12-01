import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import { getAllFeedBack } from "../../api/assignmentAndFeedback";
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
        <div
          id="animation-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          {/* <!-- Carousel wrapper --> */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* <!-- Items--> */}
            {feedBacks?.map((data) => (
              <div
                key={data?._id}
                className="hidden duration-200 ease-linear "
                data-carousel-item
              >
                <img
                  src={img1}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
                <div
                  className=" bg-gray-500 py-2 rounded-lg absolute top-[15%] 
          md:top-[25%] left-[25%] md:left-[28%] w-[50%] flex flex-col justify-center items-center"
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
                  <p className="text-xs md:text-2xl font-bold w-[70%] truncate">
                    FeedBack:{" "}
                    <span className="font-semibold text-red-400">
                      {data?.description}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
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
