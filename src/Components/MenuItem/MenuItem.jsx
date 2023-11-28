/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const MenuItem = ({ address, lable, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center gap-4 bg-gray-200 hover:bg-gray-300 ${
          isActive && "bg-gray-400 font-bold"
        } mx-5 p-3 rounded-md `
      }
    >
      <Icon size={24} />
      <span className="font-semibold text-lg">{lable}</span>
    </NavLink>
  );
};

export default MenuItem;
