import { toast } from "react-hot-toast";
import { updateRole } from "../../../../api/auth";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const UsersTableRow = ({ user, refetch }) => {
  const handleMakeAdmin = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#31C48D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // To do
        try {
          // update user Role
          await updateRole({ user, Role: "admin" });

          toast.success("Make Admin Successful");
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
              <img src={user?.photo} alt="User" />
            </div>
          </div>
          <div>
            <div className="font-bold">{user?.name}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{user?.email}</div>
      </td>
      <th>
        <button
          onClick={handleMakeAdmin}
          disabled={user?.role === "admin" ? true : false}
          className={`btn btn-warning btn-xs`}
        >
          Make Admin
        </button>
      </th>
    </tr>
  );
};

export default UsersTableRow;
