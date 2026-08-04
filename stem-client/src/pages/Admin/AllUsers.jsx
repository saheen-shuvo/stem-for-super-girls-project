import { useEffect, useState } from "react";
import { FaTrash, FaUserShield, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loadingAnimation/Loading Animation.json";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all users
  useEffect(() => {
    fetch("http://localhost:5001/users/all")
      .then((res) => res.json())
      .then((data) => {
        setUsers(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Delete user
  const handleDelete = (id, role) => {
    if (role === "admin") {
      return Swal.fire("Action blocked", "Admin cannot be deleted", "warning");
    }

    Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete user",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setUsers(users.filter((user) => user._id !== id));
              Swal.fire("Deleted!", "User has been removed.", "success");
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          className="w-24 h-24"
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">All Users</h2>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user._id}
            className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-sm bg-white"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <img
                src={user.photoURL || "https://i.ibb.co/2d0YvJd/user.png"}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold">{user.name || "Unnamed User"}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-sm flex items-center gap-1">
                  {user.role === "admin" ? (
                    <>
                      <FaUserShield className="text-blue-600" /> Admin
                    </>
                  ) : (
                    <>
                      <FaUser className="text-gray-600" /> User
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Right */}
            <button
              onClick={() => handleDelete(user._id, user.role)}
              className="text-red-600 hover:text-red-800 text-xl"
              title="Delete User"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
