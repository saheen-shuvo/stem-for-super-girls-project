import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loadingAnimation/Loading Animation.json";

const AdminHome = () => {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, coursesRes, enrollRes, eventRes] = await Promise.all([
          fetch("http://localhost:5001/users/all").then((res) => res.json()),
          fetch("http://localhost:5001/courses").then((res) => res.json()),
          fetch("http://localhost:5001/enrollments").then((res) => res.json()),
          fetch("http://localhost:5001/events").then((res) => res.json()),
        ]);

        setUsers(usersRes);
        setCourses(coursesRes);
        setEnrollments(enrollRes);
        setEvents(eventRes);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium">Total Students</h3>
          <p className="text-2xl font-bold">{users.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium">Total Enrollments</h3>
          <p className="text-2xl font-bold">{enrollments.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium">Total Courses</h3>
          <p className="text-2xl font-bold">{courses.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium">Total Events</h3>
          <p className="text-2xl font-bold">{events.length}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
