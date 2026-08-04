import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/About Us/AboutUs";
import OurWorks from "../pages/Our Works/OurWorks";
import Courses from "../pages/Courses/Courses";
import Publications from "../pages/Publications/Publications";
import JoinThePurpose from "../pages/Join the Purpose/JoinThePurpose";
import LogIn from "../pages/Log in/LogIn";
import Register from "../pages/Register/Register";
import CourseDetails from "../pages/Courses/CourseDetails";
import UserHome from "../pages/Home/User Home/UserHome";
import MyAccount from "../pages/My Account/MyAccount";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AddCourses from "../pages/Admin/AddCourses";
import AdminHome from "../pages/Admin/AdminHome";
import AllMessages from "../pages/Admin/AllMessages";
import ManageCourses from "../pages/Admin/ManageCourses";
import AllUsers from "../pages/Admin/AllUsers";
import AddEvents from "../pages/Admin/AddEvents";
import ManageEvents from "../pages/Admin/ManageEvents";
import CourseRecommendation from "../pages/Home/User Home/CourseRecommendation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about-us",
        Component: AboutUs,
      },
      {
        path: "our-works",
        Component: OurWorks,
      },
      {
        path: "courses",
        Component: Courses,
      },
      {
        path: "courses/:id",
        Component: CourseDetails,
      },
      {
        path: "publications",
        Component: Publications,
      },
      {
        path: "join-the-purpose",
        Component: JoinThePurpose,
      },
      {
        path: "log-in",
        Component: LogIn,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "my-account",
        Component: MyAccount,
      },
      {
        path: "user-home",
        Component: UserHome,
      },
      {
        path: "admin-dashboard",
        Component: AdminDashboard,
        children: [
          {
            index: true,
            Component: AdminHome,
          },
          {
            path: "addCourses",
            Component: AddCourses,
          },
          {
            path: "manageCourses",
            Component: ManageCourses,
          },
          {
            path: "addEvents",
            Component: AddEvents,
          },
          {
            path: "manageEvents",
            Component: ManageEvents,
          },
          {
            path: "all-messages",
            Component: AllMessages,
          },
          {
            path: "all-users",
            Component: AllUsers,
          },
        ],
      },
      {
        path: "course-recommendation",
        Component: CourseRecommendation,
      },
    ],
  },
]);
