import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddCourses = () => {
  const {
    register,
    handleSubmit,
    reset,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const courseData = {
      ...data,
      rating: Number(data.rating),
      reviews: Number(data.reviews),
    };

    try {
      const res = await fetch("https://stem-server.onrender.com/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseData),
      });

      const result = await res.json();

      if (result.insertedId) {
        toast.success("Course added successfully!");
        reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add course");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">Add New Course</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        {/* Title */}
        <input
          {...register("title", { required: true })}
          placeholder="Course Title"
          className="input input-bordered w-full"
        />

        {/* Subtitle */}
        <textarea
          {...register("subTitle", { required: true })}
          placeholder="Course Subtitle"
          className="textarea textarea-bordered w-full"
        />

        {/* Image */}
        <input
          {...register("image", { required: true })}
          placeholder="Image URL"
          className="input input-bordered w-full"
        />

        {/* Instructor */}
        <input
          {...register("instructor", { required: true })}
          placeholder="Instructor Name"
          className="input input-bordered w-full"
        />

        {/* Level */}
        <input
          {...register("level", { required: true })}
          placeholder="Level (Beginner / Intermediate)"
          className="input input-bordered w-full"
        />

        {/* Category */}
        <select
          {...register("category", { required: true })}
          className="select select-bordered w-full"
        >
          <option value="">Select Category</option>
          <option value="science">Science</option>
          <option value="math">Math</option>
          <option value="english">English</option>
          <option value="arts">Arts</option>
          <option value="technology">Technology</option>
        </select>

        {/* Price */}
        <input
          {...register("price", { required: true })}
          placeholder="Price (Free / $50)"
          className="input input-bordered w-full"
        />

        {/* Rating */}
        <input
          type="number"
          step="0.1"
          {...register("rating")}
          placeholder="Rating (0 - 5)"
          className="input input-bordered w-full"
        />

        {/* Reviews */}
        <input
          type="number"
          {...register("reviews")}
          placeholder="Reviews Count"
          className="input input-bordered w-full"
        />

        {/* Description */}
        <textarea
          {...register("description", { required: true })}
          placeholder="Course Description"
          className="textarea textarea-bordered w-full h-32"
        />

        <button className="btn btn-primary w-full mt-4">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourses;
