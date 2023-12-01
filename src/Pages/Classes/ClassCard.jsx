import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ClassCard = ({ Class }) => {
  return (
    <div
      className="flex flex-col p-4 space-y-5 overflow-hidden rounded-lg shadow-md bg-base-200 text-black group"
      data-aos="zoom-in"
    >
      <div className="flex space-x-2">
        <div className="font-semibold text-sm">Teacher: </div>
        <div className="flex flex-col">
          <a className="text-sm font-semibold">{Class?.name}</a>
          <span className="text-xs text-gray-600">{Class?.email}</span>
        </div>
      </div>
      <div>
        <figure className="flex">
          <img
            src={Class?.image}
            className="object-center rounded-md w-full mb-4 h-60 sm:h-96 bg-gray-500 group-hover:scale-105 transition"
          />
        </figure>
        <h2 className="mb-1 text-2xl font-semibold">{Class?.title}</h2>
        <p className="text-sm text-blue-400 font-medium">
          {Class?.description}
        </p>
        <p className="text-sm my-2">$ {Class?.price}</p>
      </div>
      <div className="flex justify-between">
        <div className="btn btn-success  font-bold btn-outline text-black hover:text-white">
          Total enrollment: {!Class?.enroll ? "0" : Class?.enroll}
        </div>
        <Link
          to={`/class/${Class?._id}`}
          className="btn btn-warning text-white font-bold"
        >
          Enroll
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;
