import { NavLink, Outlet, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import {
  FaBookReader,
  FaCalendarAlt,
  FaEnvelope,
  FaHome,
  FaSignOutAlt,
  FaUsers,
} from "react-icons/fa";
import { MdAddToPhotos, MdAssignmentAdd } from "react-icons/md";

const AdminDashboard = () => {
  const { signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOutUser();
    toast.success("Logged out successfully");
    navigate("/log-in");
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-100">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4 font-semibold">Admin Dashboard</div>
        </nav>
        {/* Page content here */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible shadow-lg">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-100 shadow-lg is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow space-y-2">
            {/* List item */}
            <li>
              <NavLink
                to="/admin-dashboard"
                end
                className={({ isActive }) =>
                  isActive ? "text-teal-600 font-semibold" : ""
                }
              >
                <FaHome className="text-lg" />
                <span className="is-drawer-close:hidden">Dashboard</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <NavLink
                to="/admin-dashboard/all-users"
                className={({ isActive }) =>
                  isActive ? "text-teal-600 font-semibold" : ""
                }
              >
                <FaUsers className="text-lg" />
                <span className="is-drawer-close:hidden">All Users</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <NavLink
                to="/admin-dashboard/addCourses"
                className={({ isActive }) =>
                  isActive ? "text-teal-600 font-semibold" : ""
                }
              >
                <MdAddToPhotos className="text-lg" />
                <span className="is-drawer-close:hidden">Add Courses</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <NavLink
                to="/admin-dashboard/manageCourses"
                className={({ isActive }) =>
                  isActive ? "text-teal-600 font-semibold" : ""
                }
              >
                <FaBookReader className="text-lg" />
                <span className="is-drawer-close:hidden">Manage Courses</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <NavLink
                to="/admin-dashboard/addEvents"
                className={({ isActive }) =>
                  isActive ? "text-teal-600 font-semibold" : ""
                }
              >
                <MdAssignmentAdd className="text-lg" />
                <span className="is-drawer-close:hidden">Add Events</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <NavLink
                to="/admin-dashboard/manageEvents"
                className={({ isActive }) =>
                  isActive ? "text-teal-600 font-semibold" : ""
                }
              >
                <FaCalendarAlt className="text-lg" />
                <span className="is-drawer-close:hidden">Manage Events</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <NavLink
                to="/admin-dashboard/all-messages"
                className={({ isActive }) =>
                  isActive ? "text-teal-600 font-semibold" : ""
                }
              >
                <FaEnvelope className="text-lg" />
                <span className="is-drawer-close:hidden">Messages</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <button
                onClick={handleLogout}
                className={({ isActive }) =>
                  isActive ? "text-teal-600 font-semibold" : ""
                }
              >
                <FaSignOutAlt className="text-lg text-red-600" />
                <span className="is-drawer-close:hidden">Log Out</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
