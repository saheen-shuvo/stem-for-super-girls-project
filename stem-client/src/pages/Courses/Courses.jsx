import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loadingAnimation/Loading Animation.json";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://stem-server.onrender.com/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setFilteredCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setLoading(false);
      });
  }, []);
  console.log(courses);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    if (category === "all") {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter((course) => course.category === category);
      setFilteredCourses(filtered);
    }
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
    <section className="bg-white">
      {/* Banner */}
      <div className="bg-linear-to-r from-purple-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600 mb-3">
            🏠 Home <span className="mx-2">›</span> Courses
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Courses</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <main className="lg:col-span-4">
          <div className="flex flex-wrap gap-3 mb-6">
            {["all", "science", "math", "english", "arts", "technology"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition
        ${
          activeCategory === category
            ? "bg-teal-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-teal-100"
        }`}
                >
                  {category === "all"
                    ? "All Courses"
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ),
            )}
          </div>
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <p className="text-gray-600">
              Showing <strong>{filteredCourses.length}</strong> of{" "}
              <strong>{courses.length}</strong> Results
            </p>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No courses available
              </h3>
              <p className="text-gray-500">
                There are no courses in this category right now.
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCourses.map((course) => (
                <div
                  key={course._id}
                  onClick={() => navigate(`/courses/${course._id}`)}
                  className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded">
                      {course.level}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">
                      {course.title}
                    </h3>

                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      ⭐ {course.avgRating} ({course.totalReviews} Reviews)
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-semibold">
                        {course.price}
                      </span>

                      <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                        Enroll now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </main>
      </div>
    </section>
  );
};

export default Courses;
