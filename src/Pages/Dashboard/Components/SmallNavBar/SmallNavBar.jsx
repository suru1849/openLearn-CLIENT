/* eslint-disable react/prop-types */
import Logo from "../../../../Components/Shared/Logo/Logo";
import { MdMenuOpen } from "react-icons/md";

const SmallNavBar = ({ openSideBar }) => {
  return (
    <div className="navbar bg-base-100 shadow-md rounded-md">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-none">
        <button onClick={openSideBar} className="btn btn-square btn-ghost">
          <MdMenuOpen size={26} />
        </button>
      </div>
    </div>
  );
};

export default SmallNavBar;
