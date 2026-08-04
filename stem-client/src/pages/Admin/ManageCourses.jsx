import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loadingAnimation/Loading Animation.json";
import { toast } from "react-toastify";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://stem-server.onrender.com/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load courses");
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This course will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(
            `https://stem-server.onrender.com/courses/${id}`,
            {
              method: "DELETE",
            },
          );

          const data = await res.json();

          if (data.deletedCount > 0) {
            setCourses((prev) => prev.filter((course) => course._id !== id));

            Swal.fire("Deleted!", "The course has been deleted.", "success");
          }
          // eslint-disable-next-line no-unused-vars
        } catch (error) {
          Swal.fire("Error!", "Failed to delete course.", "error");
        }
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
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">Manage Courses</h2>

      {courses.length === 0 ? (
        <p className="text-gray-500">No courses available</p>
      ) : (
        <ul className="divide-y">
          {courses.map((course) => (
            <li
              key={course._id}
              className="flex items-center justify-between py-4"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-16 h-12 object-cover rounded"
                />

                <div>
                  <h4 className="font-semibold">{course.title}</h4>
                  <p className="text-sm text-gray-500">
                    {course.subTitle?.slice(0, 70)}
                  </p>
                </div>
              </div>

              {/* DELETE BUTTON */}
              <button
                onClick={() => handleDelete(course._id)}
                className="text-red-500 hover:text-red-700 transition"
                title="Delete course"
              >
                <FaTrashAlt size={18} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageCourses;
