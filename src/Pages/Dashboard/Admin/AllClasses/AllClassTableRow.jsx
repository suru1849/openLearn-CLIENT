import { toast } from "react-hot-toast";
import { updateClass } from "../../../../api/class";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AllClassTableRow = ({ Class, refetch }) => {
  // Handle Action
  const handleAction = async (status) => {
    const updatedClass = { ...Class, status };
    delete updatedClass._id;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#31C48D",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${status}!`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        // To do
        try {
          // updated Status
          const obj = { addedClass: { ...updatedClass }, id: Class?._id };
          await updateClass(obj);

          toast.success("Status Updated");
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
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-14 h-14">
              <img src={Class?.image} alt="User" />
            </div>
          </div>
          <div>
            <div className="font-semibold">{Class?.title}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-semibold">{Class?.email}</div>
      </td>
      <td>
        <div className="font-semibold">{Class?.description}</div>
      </td>
      <td className="space-x-3 flex ">
        <button
          onClick={() => handleAction("approved")}
          disabled={Class?.status !== "pending" ? true : false}
          className={`btn btn-success btn-xs`}
        >
          Approve
        </button>
        <button
          onClick={() => handleAction("rejected")}
          disabled={Class?.status !== "pending" ? true : false}
          className={`btn btn-error btn-xs`}
        >
          Reject
        </button>
        <Link
          to={`feedBack/${Class?._id}`}
          disabled={Class?.status === "approved" ? false : true}
          className={`btn btn-primary btn-xs`}
        >
          See Progress
        </Link>
      </td>
    </tr>
  );
};

export default AllClassTableRow;
