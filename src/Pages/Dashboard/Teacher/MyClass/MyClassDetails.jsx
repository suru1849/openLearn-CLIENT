import { useLoaderData } from "react-router-dom";
import { MdAssignmentAdd } from "react-icons/md";
import { useState } from "react";
import CreateModal from "./CreateModal";

const MyClassDetails = () => {
  const data = useLoaderData();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  // handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const deadline = form.deadline.value;
    const description = form.description.value;

    const aa = { title, deadline, description };

    console.log(aa);
    closeModal();
  };

  console.log(data);

  return (
    <div>
      {/* Class Progress Section */}
      <section className="bg-base-200 p-7 rounded-md">
        <h1 className="text-2xl font-bold text-center my-5">Class Progress</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-green-500 flex flex-col justify-center items-center p-10 rounded-lg">
            <h2 className="text-lg font-semibold">Total Enrollment</h2>
            <p className="font-bold text-white">number</p>
          </div>
          <div className="bg-rose-400 flex flex-col justify-center items-center p-10 rounded-lg">
            <h2 className="text-lg font-semibold">Total Assignment</h2>
            <p className="font-bold text-white">number</p>
          </div>
          <div className="md:col-span-2 bg-yellow-300 flex flex-col justify-center items-center p-10 rounded-lg">
            <h2 className="text-lg font-semibold">
              Per Day Assignment Submited
            </h2>
            <p className="font-bold text-white">number</p>
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
