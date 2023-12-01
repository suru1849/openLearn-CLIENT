import { useParams } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import { getAClass } from "../../../../api/class";
import { useQuery } from "@tanstack/react-query";
import MECrow from "./MECrow";
import Loader from "../../../../Components/Loader/Loader";
import {
  setAssignment,
  setFeedBack,
} from "../../../../api/assignmentAndFeedback";
import { toast } from "react-hot-toast";
import { MdAssignmentAdd } from "react-icons/md";
import { useState } from "react";
import MECmodal from "./MECmodal";
import EmptyPage from "../../../../Components/EmptyPage/EmptyPage";

const MyEnrollClassDetails = () => {
  const { id } = useParams();
  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const { data: Class = {}, isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getAClass(id),
    queryKey: ["users"],
  });
  const assignments = Class?.assignments || [];

  const handleSubmit = async (currentAssignment) => {
    const oldSubmissions = Class?.assignmentsSubmission || [];
    const subbmission = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
      time: new Date().toISOString(),
      assignment: currentAssignment,
    };
    const updatedClass = {
      ...Class,
      assignmentsSubmission: [...oldSubmissions, subbmission],
    };
    delete updatedClass._id;

    // update class
    try {
      //  updated the data base
      await setAssignment(updatedClass, id);

      toast.success("Assignment Submited Successfull");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // moadl
  const closeModal = () => {
    setIsOpen(!isOpen);
  };
  // handle ratting
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleModal = async (event) => {
    event.preventDefault();

    const form = event.target;
    const description = form.description.value;
    const FeedBack = {
      description,
      rating: rating,
      classID: id,
      classTitle: Class?.title,
      userName: user?.displayName,
      userEmail: user?.email,
      userImage: user?.photoURL,
    };

    // setFeedBack
    try {
      await setFeedBack(FeedBack);

      toast.success("Get FeedBack SuccessFul");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      closeModal();
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      {/* assigmnets */}
      <div className="my-5">
        {/* tooltip */}
        <button
          onClick={() => closeModal()}
          className="btn btn-warning tooltip tooltip-bottom flex"
          data-tip="Give the feed-back of this class"
        >
          <MdAssignmentAdd /> Teaching Evaluation Report
        </button>

        {/* modal */}
        <MECmodal
          isOpen={isOpen}
          closeModal={closeModal}
          handleModal={handleModal}
          ratingChanged={ratingChanged}
        />
      </div>
      <div>
        {assignments.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead>
                <tr className="uppercase">
                  <th>Title</th>
                  <th>Description</th>
                  <th>Deadline</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* rows */}
                {assignments?.map((data, index) => (
                  <MECrow
                    key={index}
                    data={data}
                    handleSubmit={handleSubmit}
                    ratingChanged={ratingChanged}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyPage label={"No Assignments Available"} />
        )}
      </div>
    </div>
  );
};

export default MyEnrollClassDetails;
