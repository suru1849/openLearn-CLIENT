import MenuItem from "../../../Components/MenuItem/MenuItem";
import { MdClass } from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";

const TeacherMenu = () => {
  return (
    <div className="space-y-3">
      <MenuItem
        lable={"Add Class"}
        address={"add-class"}
        icon={AiOutlineVideoCameraAdd}
      />
      <MenuItem lable={"My Class"} address={"my-class"} icon={MdClass} />
    </div>
  );
};

export default TeacherMenu;
