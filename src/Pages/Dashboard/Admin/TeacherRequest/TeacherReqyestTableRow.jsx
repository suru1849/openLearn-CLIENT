import { toast } from "react-hot-toast";
import { getUser, updateReqStatus, updateRole } from "../../../../api/auth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const TeacherReqyestTableRow = ({ user, refetch }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getUser(user?.email).then((data) => setCurrentUser(data));
  }, [user?.email]);

  // handle Actions
  const handleAction = async (status) => {
    console.log(status);

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
          // updated status of Requested user
          await updateReqStatus({ user, status });

          // Update Role
          if (status === "approved") {
            const obj = { user: { ...currentUser }, Role: "teacher" };
            await updateRole(obj);
          }

          toast.success("Updated");
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
            <div className="mask mask-squircle w-12 h-12">
              <img src={user?.image} alt="User" />
            </div>
          </div>
          <div>
            <div className="font-bold">{user?.name}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-semibold">{user?.email}</div>
      </td>
      <td>
        <div className="font-semibold">{user?.experience}</div>
      </td>
      <td>
        <div className="font-semibold ">{user?.category}</div>
      </td>
      <td>
        <div
          className={`font-bold  ${
            user?.status === "pending" && "text-yellow-400"
          }  ${user?.status === "approved" && "text-green-400"} ${
            user?.status === "rejected" && "text-red-400"
          }`}
        >
          {user?.status}
        </div>
      </td>
      <th>
        <button
          disabled={user?.status === "pending" ? false : true}
          onClick={() => handleAction("approved")}
          className={`btn btn-success btn-xs`}
        >
          Approve
        </button>
      </th>
      <th>
        <button
          disabled={user?.status === "pending" ? false : true}
          onClick={() => handleAction("rejected")}
          className={`btn btn-error btn-xs`}
        >
          Reject
        </button>
      </th>
    </tr>
  );
};

export default TeacherReqyestTableRow;
