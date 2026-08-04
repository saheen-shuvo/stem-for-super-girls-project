import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import PurchaseHistory from "./PurchaseHistory";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loadingAnimation/Loading Animation.json";

const AccountContent = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        if (!userEmail) {
          setLoading(false);
          return;
        }

        const response = await fetch(
          `http://localhost:5001/my-enrolled-courses?email=${userEmail}`,
        );
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userEmail) fetchCourses();
  }, [userEmail]);

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
  if (courses.length === 0)
    return <p>You have not enrolled in any courses yet.</p>;

  return (
    <div className="lg:col-span-3">
      <div className="hidden">
        <PurchaseHistory courses={courses} />
      </div>
      <h1 className="text-2xl font-semibold mb-6">My Courses</h1>

      {courses.map((course) => (
        <div
          key={course._id}
          className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 mb-6"
        >
          {/* Course Image */}
          <img
            src={course.image || "/default-course.jpg"}
            alt={course.title}
            className="w-full md:w-64 rounded-lg"
          />

          {/* Course Info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>

            <div className="flex gap-6 text-sm text-gray-500 mb-3">
              <span>🎥 Lectures {course.lectures}</span>
              <span>📝 Quizzes {course.quizzes}</span>
              <span>⏱ {course.duration}</span>
            </div>

            {/* Progress */}
            <div className="mb-3">
              <div className="h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-teal-500 rounded"
                  style={{ width: `${course.progress || 0}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {course.progress || 0}% completed
              </p>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Expiry period -{" "}
              <span className="text-green-600 font-medium">
                {course.access || "LIFETIME ACCESS"}
              </span>
            </p>

            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg">
              ▶ Start now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountContent;
