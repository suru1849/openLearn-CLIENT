import { Link, useLoaderData } from "react-router-dom";

const ClassEnroll = () => {
  const data = useLoaderData();

  console.log(data);

  return (
    <div className="min-h-screen flex  justify-center items-center">
      <div className="min-w-[80%] md:min-w-[40%] p-4 shadow-md bg-gray-200 dark:text-gray-400 group">
        <div className="space-y-4 ">
          <div className="w-[90%] mx-auto">
            <img
              src={data?.image}
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 group-hover:scale-105  transition "
            />
          </div>
          <div className="flex space-x-4">
            <img
              alt="teacher Image"
              src={data?.teacher?.image}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <p rel="noopener noreferrer" className="text-sm font-semibold">
                {data?.name}
              </p>
              <span className="text-xs dark:text-gray-400">{data?.email}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div rel="noopener noreferrer" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {data?.title}
              </h3>
            </div>
            <p className="leadi dark:text-gray-400">{data?.description}</p>
            <div className="flex justify-between items-center">
              <p className="leadi dark:text-gray-400 text-red-500 font-bold">
                $ {data?.price}
              </p>
              <Link
                to={`/payment/${data?._id}`}
                className="btn btn-success text-white font-bold"
              >
                Payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassEnroll;
