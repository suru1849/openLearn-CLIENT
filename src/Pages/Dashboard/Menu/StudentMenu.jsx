import MenuItem from "../../../Components/MenuItem/MenuItem";
import { MdOutlineClass } from "react-icons/md";

const StudentMenu = () => {
  return (
    <div className="space-y-3">
      <MenuItem
        lable={"My Enroll Classes"}
        address={"my-enroll-classes"}
        icon={MdOutlineClass}
      />
    </div>
  );
};

export default StudentMenu;
