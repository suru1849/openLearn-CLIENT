import { useState } from "react";
import SmallNavBar from "./Components/SmallNavBar/SmallNavBar";
import Container from "../../Components/Container/Container";
import Logo from "../../Components/Shared/Logo/Logo";
import AdminMenu from "./Menu/AdminMenu";
import MenuItem from "../../Components/MenuItem/MenuItem";
import { Helmet } from "react-helmet-async";
// icons
import { RiProfileLine } from "react-icons/ri";
import StudentMenu from "./Menu/StudentMenu";
import TeacherMenu from "./Menu/TeacherMenu";
import { Outlet, useNavigate } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import Loader from "../../Components/Loader/Loader";
import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
  const { role } = useUser();
  const { loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const openSideBar = () => {
    setIsOpen(!isOpen);
  };

  if (loading) return <Loader />;

  return (
    <Container>
      <Helmet>
        <title>openLEARN | Dashboard</title>
      </Helmet>
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
          <div
            onClick={() => navigate("/")}
            className={`bg-green-100 py-3 mb-5 ${
              isOpen && "hidden"
            } cursor-pointer`}
          >
            <Logo />
          </div>

          {/* Menu Items */}
          <div className="space-y-3 py-3 flex flex-col justify-between h-[calc(100vh-100px)]">
            {/* menu Items */}

            {/* <div className=""> */}
            {role === "admin" && <AdminMenu />}
            {role === "student" && <StudentMenu />}
            {role === "teacher" && <TeacherMenu />}
            {/* </div> */}

            <div>
              <hr className="my-10 border-[1px] w-[80%] mx-auto" />
              <div className="mb-10">
                <MenuItem
                  lable={"Profile"}
                  address={"/dashboard"}
                  icon={RiProfileLine}
                />
              </div>
            </div>
          </div>
        </div>
        {/* outlet */}
        <div className="min-h-[calc(100vh)] flex-1 ">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
