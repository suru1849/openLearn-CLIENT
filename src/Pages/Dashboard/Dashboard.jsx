import { useState } from "react";
import SmallNavBar from "./Components/SmallNavBar/SmallNavBar";
import Container from "../../Components/Container/Container";
import Logo from "../../Components/Shared/Logo/Logo";
import AdminMenu from "./Menu/AdminMenu";
import MenuItem from "../../Components/MenuItem/MenuItem";

// icons
import { RiProfileLine } from "react-icons/ri";
import StudentMenu from "./Menu/StudentMenu";
import TeacherMenu from "./Menu/TeacherMenu";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      {/* small device navbar */}
      <div className="block md:hidden ">
        <SmallNavBar openSideBar={openSideBar} />
      </div>
      <div className="flex gap-1 relative">
        {/* sideBar */}
        <div
          className={`md:block border w-[27%] bg-gray-100 min-h-[calc(100vh)]  ${
            isOpen
              ? "absolute shadow-xl w-[280px] top-[1px] transition ease-in-out duration-700 z-20"
              : "hidden"
          }`}
        >
          {/* logo */}
          <div className={`bg-green-100 mb-5 ${isOpen && "hidden"}`}>
            <Logo />
          </div>

          {/* Menu Items */}
          <div className="space-y-3 py-3 flex flex-col justify-between h-[calc(100vh-100px)]">
            {/* menu Items */}

            <AdminMenu />
            {/* <StudentMenu /> */}
            {/* <TeacherMenu /> */}

            <div>
              <hr className="my-10 border-[1px] w-[80%] mx-auto" />
              <MenuItem
                lable={"Profile"}
                address={"profile"}
                icon={RiProfileLine}
              />
            </div>
          </div>
        </div>
        {/* outlet */}
        <div className="min-h-[calc(100vh)] flex-1 border-4">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
