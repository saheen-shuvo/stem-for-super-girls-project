import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loadingAnimation/Loading Animation.json";

const PurchaseHistory = () => {
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
  }, [userEmail, courses]);

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
    return (
      <p className="my-6 font-semibold">
        You have not purchased any courses yet.
      </p>
    );

  return (
    <div className="lg:col-span-3">
      <h1 className="text-2xl font-semibold mb-6">Purchase History</h1>

      {courses?.map((course) => (
        <div
          key={course._id}
          className="bg-white rounded-xl shadow p-5 flex items-center justify-between mb-4"
        >
          <div>
            <h2 className="font-semibold">{course.title}</h2>

            <p className="text-sm text-gray-500">
              Purchased on {new Date(course.enrolledAt).toLocaleDateString()}
            </p>

            <p className="text-sm text-gray-600">
              Access:{" "}
              <span className="text-green-600 font-medium">
                {course.access}
              </span>
            </p>
          </div>

          <span className="text-sm font-medium text-teal-600">
            {course.progress === 100 ? "Completed" : "Active"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PurchaseHistory;
