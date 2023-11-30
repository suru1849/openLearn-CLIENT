import { useParams } from "react-router-dom";
import { MdAssignmentAdd } from "react-icons/md";
import { useState } from "react";
import { toast } from "react-hot-toast";
import CreateModal from "./CreateModal";
import { setAssignment } from "../../../../api/assignmentAndFeedback";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import { getAClass } from "../../../../api/class";
import Loader from "../../../../Components/Loader/Loader";
import PerDayAssignment from "./PerDayAssignment";

const MyClassDetails = () => {
  const { id } = useParams();
  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  const {
    data: data = [],
    isLoading,
    refetch,
  } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getAClass(id),
    queryKey: ["users"],
  });

  // handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const deadline = form.deadline.value;
    const description = form.description.value;

    //  update the assignments
    const asg = { title, deadline, description };
    const old = data?.assignments || [];
    const updatedClass = { ...data, assignments: [...old, asg] };
    delete updatedClass._id; //deleted id;

    try {
      //  updated the data base
      await setAssignment(updatedClass, id);

      toast.success("Assignment Assigned Successfull");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      closeModal();
      refetch();
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      {/* Class Progress Section */}
      <section className="bg-base-200 p-7 rounded-md">
        <h1 className="text-2xl font-bold text-center my-5">Class Progress</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-green-500 flex flex-col justify-center items-center p-10 rounded-lg">
            <h2 className="text-lg font-semibold">Total Enrollment</h2>
            <p className="font-bold text-white">
              {data?.enroll ? data?.enroll : 0}
            </p>
          </div>
          <div className="bg-rose-400 flex flex-col justify-center items-center p-10 rounded-lg">
            <h2 className="text-lg font-semibold">Total Assignments</h2>
            <p className="font-bold text-white">
              {data?.assignments ? data?.assignments?.length : 0}
            </p>
          </div>
          <div className="md:col-span-2 bg-yellow-300 flex flex-col justify-center items-center p-10 rounded-lg">
            <h2 className="text-lg font-semibold text-center">
              Per Day Assignment Submited
              <div className="overflow-y-auto">
                {data?.assignmentsSubmission ? (
                  <table className="table ">
                    {/* head */}
                    <thead>
                      <tr className="uppercase">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* rows */}
                      {data?.assignmentsSubmission?.map((Data, index) => (
                        <PerDayAssignment key={index} Data={Data} />
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="font-bold text-white text-center">
                    No One Submited😢
                  </p>
                )}
              </div>
            </h2>
          </div>
        </div>
      </section>
      {/* Add AssignMent section */}
      <section className="bg-base-200 p-7 rounded-md my-4">
        <h1 className="text-2xl font-bold text-center my-5">Add Assignment </h1>
        <div className="flex justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-primary px-7 text-xl flex justify-center items-center"
          >
            <MdAssignmentAdd />
            Create
          </button>
          {/* modal */}
          <CreateModal
            isOpen={isOpen}
            closeModal={closeModal}
            handleSubmit={handleSubmit}
          />
        </div>
      </section>
    </div>
  );
};

export default MyClassDetails;
