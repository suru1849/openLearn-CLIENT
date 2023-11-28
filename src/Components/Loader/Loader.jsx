/* eslint-disable react/prop-types */
import { PacmanLoader } from "react-spinners";

const Loader = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? "h-[250px]" : "h-[100vh]"}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <PacmanLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
