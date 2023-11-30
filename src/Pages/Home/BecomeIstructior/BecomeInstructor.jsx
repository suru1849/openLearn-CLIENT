import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";

const BecomeInstructor = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-10">
      <div className="hero-content flex-col lg:flex-row">
        <FaChalkboardTeacher size={300} />
        <div>
          <h1 className="text-5xl font-bold">Become A Instrcutor</h1>
          <p className="py-6">
            Hit the icon add provide ligal details to be a Instrcutor
          </p>
          <Link to="/teach-on-openLEARN" className="btn btn-primary">
            Start Teaching Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BecomeInstructor;
