import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Lottie from "lottie-react";
import loadingAnimation from "../../../assets/loadingAnimation/Loading Animation.json";

const CourseRecommendation = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Fetch all courses once
  useEffect(() => {
    const loadCourses = async () => {
      try {
        const res = await fetch("http://localhost:5001/courses");

        if (!res.ok) {
          throw new Error("Failed to fetch courses");
        }

        const data = await res.json();
        // console.log("ALL COURSES FROM DB:", data);
        setAllCourses(data);
      } catch (err) {
        console.error(err);
        setError("Could not load courses");
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  const onSubmit = (data) => {
    setSubmitted(true);

    const selectedCategory = data.category?.toLowerCase();

    const filtered = allCourses.filter(
      (course) =>
        course.category && course.category.toLowerCase() === selectedCategory,
    );

    setCourses(filtered);
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

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-md mx-auto p-4 my-12 md:my-24">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <select
          {...register("interest")}
          className="select select-bordered w-full"
        >
          <option value="">What do you like to watch?</option>
          <option value="movie">Movie</option>
          <option value="science fiction">Science Fiction</option>
          <option value="sports">Sports</option>
          <option value="talk show">Tech Show</option>
        </select>

        {/* REQUIRED CATEGORY */}
        <select
          {...register("category", { required: true })}
          className="select select-bordered w-full"
        >
          <option value="">Favorite Subject</option>
          <option value="movie">English</option>
          <option value="science fiction">Science</option>
          <option value="sports">Math</option>
          <option value="kids">Arts</option>
          <option value="computer">Technology</option>
        </select>

        <select
          {...register("studyTime")}
          className="select select-bordered w-full"
        >
          <option value="">Study hours per day</option>
          <option value="0-1">0-1</option>
          <option value="1-2">1-2</option>
          <option value="2-3">2-3</option>
          <option value="3-4">3-4</option>
          <option value="4-5">4-5</option>
        </select>

        <button type="submit" className="btn btn-primary w-full">
          Get Courses
        </button>
      </form>

      {/* Course list */}
      <div className="mt-6 space-y-3">
        {courses.map((course) => (
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
              <h3 className="font-semibold text-lg mb-2">{course.title}</h3>

              <div className="flex items-center text-sm text-gray-600 mb-3">
                ⭐ {course.rating} ({course.reviews} Reviews)
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

        {submitted && courses.length === 0 && (
          <p className="text-center text-gray-500 my-4">
            No courses found for you. Keep in touch!
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseRecommendation;
