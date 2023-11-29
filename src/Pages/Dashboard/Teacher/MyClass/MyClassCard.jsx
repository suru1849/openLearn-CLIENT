/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { deleteClass } from "../../../../api/class";
import Swal from "sweetalert2";

const MyClassCard = ({ Class, refetch }) => {
  const { _id, title, status, price, name, description, image, email } =
    Class || {};

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#31C48D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // To do
        try {
          // Delete Class
          await deleteClass(_id);

          toast.success("Class Deleted Successfully");
        } catch (err) {
          console.log(err);
          toast.error(err.message);
        } finally {
          refetch();
        }
      }
    });
  };

  return (
    <div className="flex flex-col items-center bg-white  border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100  dark:bg-gray-800 dark:hover:bg-gray-700 md:min-h-[50vh] shadow-lg overflow-hidden group">
      <div className="flex md:w-[45%] h-full">
        <img
          className="object-center rounded-t-lg group-hover:scale-105 transition  md:rounded-l-lg md:rounded-r-none h-full"
          src={image}
        />
      </div>
      <div className="flex w-full md:w-[55%] flex-col justify-between p-3 leading-normal">
        <h5 className="mb-2 text-2xl font-bold overflow-ellipsis tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal overflow-ellipsis text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Name: </span>
          {name}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Email: </span>
          {email}
        </p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Status: </span>
          <span
            className={`uppercase font-semibold ${
              status === "pending"
                ? "text-amber-600"
                : status === "rejected"
                ? "text-error"
                : "text-success"
            }`}
          >
            {status}
          </span>
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Price: </span>$ {price}
        </p>
        <div className="flex justify-between gap-1">
          <Link
            to={`/class/update/${_id}`}
            disabled={status === "rejected" ? true : false}
            className="btn btn-warning font-bold text-white"
          >
            Update
          </Link>
          <button
            disabled={status === "approved" ? false : true}
            className="btn btn-success font-bold text-white"
          >
            Details
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-error font-bold text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyClassCard;
