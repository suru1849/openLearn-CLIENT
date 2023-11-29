import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Logo from "../Logo/Logo";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import useUser from "../../../Hooks/useUser";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const { role } = useUser();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${
              isActive &&
              "bg-green-400 text-white font-bold px-3 py-[1.5px] rounded-md"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-classes"
          end
          className={({ isActive }) =>
            `${
              isActive &&
              "bg-green-400 text-white font-bold px-3 py-[1.5px] rounded-md"
            }`
          }
        >
          All Classes
        </NavLink>
      </li>
      {role === "student" && (
        <li>
          <NavLink
            to="/teach-on-openLEARN"
            end
            className={({ isActive }) =>
              `${
                isActive &&
                "bg-green-400 text-white font-bold px-3 py-[1.5px] rounded-md"
              }`
            }
          >
            Teach On openLEARN
          </NavLink>
        </li>
      )}
      {!user && (
        <li>
          <NavLink to="/login">Sign In</NavLink>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 shadow-md rounded-md md:px-4">
        <Link to="/" className="flex-1 md:flex-none">
          <Logo />
        </Link>
        <div id="navbar" className="hidden flex-1 md:flex md:justify-center">
          {links}
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            {user ? (
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
            ) : (
              <>
                <div tabIndex={0} role="button" className="block md:hidden">
                  <GiHamburgerMenu size={20} />
                </div>
              </>
            )}
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <div className="block md:hidden ">
                <div className="space-y-2">{links}</div>
                {user && <hr className="my-3" />}
              </div>
              {user ? (
                <>
                  <div className="font-medium text-gray-700 px-[1px] pb-[1px]">
                    {user?.displayName}
                  </div>

                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={logOut}>LogOut</button>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
