import MenuItem from "../../../Components/MenuItem/MenuItem";
import { IoMdGitPullRequest } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { RiUserSettingsLine } from "react-icons/ri";

const AdminMenu = () => {
  return (
    <div className="space-y-3">
      <MenuItem
        lable={"Teacher Request"}
        address={"teacher-request"}
        icon={IoMdGitPullRequest}
      />
      <MenuItem lable={"Users"} address={"users"} icon={RiUserSettingsLine} />
      <MenuItem
        lable={"All Classes"}
        address={"all-classes"}
        icon={SiGoogleclassroom}
      />
    </div>
  );
};

export default AdminMenu;
