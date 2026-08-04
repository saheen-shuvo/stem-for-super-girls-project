import { useEffect, useState } from "react";
import userHomeImage from "../../../assets/userHomeImage/userHomeimage.png";
import TrainingTeam from "../../About Us/TrainingTeam";

const UserHome = () => {
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);

  // Fetch latest courses
  useEffect(() => {
    fetch("https://stem-server.onrender.com/courses/latest")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  // Fetch upcoming events
  useEffect(() => {
    fetch("https://stem-server.onrender.com/events/upcoming")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      {/* Banner */}
      <div>
        <img src={userHomeImage} alt="User Home" />
      </div>

      {/* Latest Courses */}
      <div className="mt-12 px-4 max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl font-semibold mb-10 text-center">
          Latest Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white shadow rounded-xl overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>

                <p className="text-sm text-gray-500 mb-3">
                  {course.description?.slice(0, 80)}...
                </p>

                <button className="btn btn-sm bg-teal-500 text-white border-0">
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="px-4 max-w-7xl mx-auto mb-24">
        <h2 className="text-4xl font-semibold mb-10 text-center">
          Upcoming Events
        </h2>

        <div className="">
          {events.length === 0 ? (
            <div className="text-center text-gray-500 text-lg py-10">
              🚫 No upcoming events at the moment.
              <br />
              Please check back later!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event._id}
                  className="bg-white shadow rounded-xl overflow-hidden border border-gray-400"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-40 w-full object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {event.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-1">
                      📅 {event.fullDate}
                    </p>

                    <p className="text-sm text-gray-600 mb-3">
                      ⏰ {event.startTime} – {event.endTime}
                    </p>

                    <span className="inline-block px-3 py-1 text-xs bg-teal-100 text-teal-700 rounded-full mb-3">
                      {event.category}
                    </span>

                    <a
                      href={event.location}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-medium text-teal-600 hover:underline"
                    >
                      View Location
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Training Team */}
      <TrainingTeam></TrainingTeam>
    </div>
  );
};

export default UserHome;
