import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Dashboard/Common/Profile";
import Users from "../Pages/Dashboard/Admin/Users/Users";
import PrivateRoute from "./PrivateRoute";
import TeachOn from "../Pages/TeachOn/TeachOn";
import TeacherRequest from "../Pages/Dashboard/Admin/TeacherRequest/TeacherRequest";
import StudentRoutes from "./StudentRoutes";
import AddClass from "../Pages/Dashboard/Teacher/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/Teacher/MyClass/MyClass";
import UpdateClass from "../Pages/Dashboard/Teacher/MyClass/UpdateClass";
import { getAClass } from "../api/class";
import AllClasses from "../Pages/Dashboard/Admin/AllClasses/AllClasses";
import Classes from "../Pages/Classes/Classes";
import MyClassDetails from "../Pages/Dashboard/Teacher/MyClass/MyClassDetails";
import ClassEnroll from "../Pages/Classes/ClassEnroll";
import Payment from "../Pages/Payment/Payment";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all-classes",
        element: <Classes />,
      },
      {
        path: "class/:id",
        element: (
          <PrivateRoute>
            <ClassEnroll />
          </PrivateRoute>
        ),
        loader: async ({ params }) => await getAClass(params.id),
      },
      {
        path: "teach-on-openLEARN",
        element: (
          <PrivateRoute>
            <StudentRoutes>
              <TeachOn />
            </StudentRoutes>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        ),
      },
      {
        path: "teacher-request",
        element: (
          <PrivateRoute>
            <TeacherRequest />
          </PrivateRoute>
        ),
      },
      {
        path: "add-class",
        element: (
          <PrivateRoute>
            <AddClass />
          </PrivateRoute>
        ),
      },
      {
        path: "my-class",
        element: (
          <PrivateRoute>
            <MyClass />
          </PrivateRoute>
        ),
      },
      {
        path: "my-class/:id",
        element: (
          <PrivateRoute>
            <MyClassDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => await getAClass(params.id),
      },
      {
        path: "all-classes",
        element: (
          <PrivateRoute>
            <AllClasses />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/class/update/:id",
    element: (
      <PrivateRoute>
        <UpdateClass />
      </PrivateRoute>
    ),
    loader: async ({ params }) => await getAClass(params.id),
  },
  {
    path: "/payment/:id",
    element: (
      <PrivateRoute>
        <Payment />
      </PrivateRoute>
    ),
    loader: async ({ params }) => await getAClass(params.id),
  },
]);

export default Routes;
