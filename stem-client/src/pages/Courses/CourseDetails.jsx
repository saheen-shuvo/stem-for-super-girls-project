import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loadingAnimation/Loading Animation.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const CourseDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5001/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (!course?._id) return;

    fetch(`http://localhost:5001/reviews/${course._id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);

        if (data.length > 0) {
          const total = data.reduce((sum, r) => sum + r.rating, 0);
          setAvgRating((total / data.length).toFixed(1));
        }
      });
  }, [course]);

  const handleEnroll = () => {
    const enrolledCourse = {
      userEmail: user?.email,
      courseId: course._id,
      title: course.title,
      image: course.image,
      price: course.price,
    };

    fetch("http://localhost:5001/enroll", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(enrolledCourse),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Course enrolled successfully!");
        } else {
          toast.error("Already enrolled!");
        }
      });
  };

  const handleSubmitReview = async () => {
    if (!rating || !reviewText) {
      toast.warn("Please give rating and write something");
      return;
    }

    const reviewData = {
      courseId: course._id,
      userEmail: user.email,
      rating,
      description: reviewText,
      createdAt: new Date(),
    };

    try {
      const res = await fetch("http://localhost:5001/reviews", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(reviewData),
      });

      const data = await res.json();

      if (data.insertedId) {
        const newReview = {
          _id: data.insertedId,
          ...reviewData,
        };

        setReviews((prev) => [newReview, ...prev]);

        const total = reviews.reduce((sum, r) => sum + r.rating, 0) + rating;
        setAvgRating((total / (reviews.length + 1)).toFixed(1));

        toast.success("Review submitted!");
        setShowModal(false);
        setRating(0);
        setReviewText("");
      }
    } catch (err) {
      toast.error("Failed to submit review", err);
    }
  };

  const roundedRating = Math.min(5, Math.max(0, Math.round(avgRating)));

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Lottie animationData={loadingAnimation} loop className="w-24 h-24" />
      </div>
    );
  }

  if (!course?._id) {
    return <div className="text-center py-20">Course not found</div>;
  }

  return (
    <section className="bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-4">
          Home / Courses / <span className="text-gray-800">Details</span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {course.subTitle || "An engaging course to enhance your skills."}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
              <span>
                ⭐ {avgRating || "0.0"} ({reviews.length} Reviews)
              </span>
              <span>📘 {course.level}</span>
              <span className="capitalize">📂 {course.category}</span>
              <span>
                <button
                  onClick={() => {
                    if (!user) {
                      toast.warn("Please login to write a review");
                      return;
                    }
                    setShowModal(true);
                  }}
                  className="btn btn-xs bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Write a Review
                </button>
              </span>
            </div>

            {/* Tabs */}
            <div className="border-b mb-6 flex gap-6">
              {["overview", "curriculum", "instructor", "reviews"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 capitalize font-medium ${
                      activeTab === tab
                        ? "border-b-2 border-teal-600 text-teal-600"
                        : "text-gray-500"
                    }`}
                  >
                    {tab}
                  </button>
                ),
              )}
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Course description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {course.description ||
                    "Detailed course overview will be added soon."}
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Requirements</h3>

                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 mt-1">✔</span>
                      <span>
                        <strong>A Device:</strong> Computer, tablet, or
                        smartphone.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 mt-1">✔</span>
                      <span>
                        <strong>Internet Access:</strong> A stable connection to
                        use Canva.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 mt-1">✔</span>
                      <span>
                        <strong>A Canva Account:</strong> A free account
                        (parent/guardian help required for kids under 13).
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 mt-1">✔</span>
                      <span>
                        <strong>Basic Skills:</strong> Ability to use a
                        mouse/touchscreen and keyboard.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 mt-1">✔</span>
                      <span>
                        <strong>A Creative Mindset:</strong> Ready to learn and
                        have fun!
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "curriculum" && (
              <p className="text-gray-600">Curriculum coming soon.</p>
            )}

            {activeTab === "instructor" && (
              <p className="text-gray-600">
                Instructor: {course.instructor || "STEM For Super Girls"}
              </p>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-5">
                {reviews.length === 0 && (
                  <p className="text-gray-600">No reviews yet.</p>
                )}

                {reviews.map((review) => (
                  <div
                    key={review._id}
                    className="border border-gray-300 rounded-lg p-4 bg-white"
                  >
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">{review.userEmail}</p>
                      <p className="text-yellow-400">
                        {"★".repeat(roundedRating)}
                        {"☆".repeat(5 - roundedRating)}
                      </p>
                    </div>

                    <p className="text-gray-600">{review.description}</p>

                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:sticky top-24 h-fit">
            <div className="bg-white rounded-xl shadow p-5">
              <div className="relative mb-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-lg"
                />
                <button className="absolute inset-0 flex items-center justify-center text-white text-4xl">
                  ▶
                </button>
              </div>

              <h2 className="text-2xl font-bold mb-4">{course.price}</h2>

              <ul className="space-y-3 text-sm text-gray-600 mb-6">
                <li>📘 Lectures: {course.lectures || 0}</li>
                <li>📝 Quizzes: {course.quizzes || 0}</li>
                <li>🎯 Skill level: {course.level}</li>
                <li>⏳ Expiry: Lifetime</li>
              </ul>

              <button
                onClick={handleEnroll}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium"
              >
                Enroll now
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-2">
          <div className="bg-white w-full max-w-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Write a Review</h3>

            {/* Rating */}
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setRating(num)}
                  className={`text-2xl ${
                    rating >= num ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            {/* Textarea */}
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 mb-4"
              rows="4"
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitReview}
                className="px-4 py-2 bg-teal-600 text-white rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseDetails;
