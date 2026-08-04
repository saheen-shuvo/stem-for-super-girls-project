import { FaBook, FaHistory, FaUser } from "react-icons/fa";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router";
import { AiFillMessage } from "react-icons/ai";

const AccountSidebar = ({ activeTab, setActiveTab }) => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOutUser();
      toast.success("Logged out successfully!", { position: "top-right" });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const menuItems = [
    { id: "courses", label: "My Courses", icon: <FaBook /> },
    { id: "history", label: "Purchase History", icon: <FaHistory /> },
    { id: "messages", label: "Messages", icon: <AiFillMessage />},
    { id: "profile", label: "Profile", icon: <FaUser /> },
    {
      id: "logout",
      label: "Log out",
      icon: <MdLogout />,
      action: handleSignOut,
    },
  ];
  return (
    <div className="bg-white rounded-xl shadow p-6">
      {/* User Info */}
      <div className="text-center mb-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 mb-3">
          <img
            src={user?.photoURL || "/default-profile.png"}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2 className="font-semibold text-lg">
          {user?.displayName || "No Name"}
        </h2>
        <p className="text-sm text-gray-500">{user?.email || "No Email"}</p>
      </div>

      {/* Menu */}
      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              if (item.action) {
                item.action();
                navigate("/log-in");
              } else {
                setActiveTab(item.id);
              }
            }}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer ${
              activeTab === item.id
                ? "bg-teal-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-teal-100"
            }`}
          >
            {item.icon} {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountSidebar;
