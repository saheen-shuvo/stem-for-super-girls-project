import { Link, NavLink } from "react-router";
import logo from "../../../../../assets/navbarLogo/stem_logo.png";
import { useContext } from "react";
import AuthContext from "../../../../../context/AuthContext/AuthContext";
// import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#1ca69a] font-semibold"
      : "text-gray-700 hover:text-[#1ca69a]";

  return (
    <div className="navbar bg-base-100 shadow px-8 lg:px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium"
          >
            <li>
              <NavLink to="/" className={navLinkClass}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className={navLinkClass}>
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to="/our-works" className={navLinkClass}>
                OUR WORKS
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" className={navLinkClass}>
                COURSES
              </NavLink>
            </li>
            <li>
              <NavLink to="/publications" className={navLinkClass}>
                PUBLICATIONS
              </NavLink>
            </li>
            <li>
              <NavLink to="/join-the-purpose" className={navLinkClass}>
                JOIN THE PURPOSE
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="text-xl cursor-pointer" href="/">
          <img className="w-24" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li>
            <NavLink to="/" className={navLinkClass}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={navLinkClass}>
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink to="/our-works" className={navLinkClass}>
              OUR WORKS
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className={navLinkClass}>
              COURSES
            </NavLink>
          </li>
          <li>
            <NavLink to="/publications" className={navLinkClass}>
              PUBLICATIONS
            </NavLink>
          </li>
          <li>
            <NavLink to="/join-the-purpose" className={navLinkClass}>
              JOIN THE PURPOSE
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.role === "admin" ? (
          <Link
            to="/admin-dashboard"
            className="px-3 py-2 text-sm bg-[#1ca69a] hover:bg-yellow-300 cursor-pointer text-white rounded-3xl"
          >
            Admin Panel
          </Link>
        ) : (
          <Link
            to={user ? "/my-account" : "/log-in"}
            className="px-3 py-2 text-sm bg-[#1ca69a] hover:bg-yellow-300 cursor-pointer text-white rounded-3xl"
          >
            My Account
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
