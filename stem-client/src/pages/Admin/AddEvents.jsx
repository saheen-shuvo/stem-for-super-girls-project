import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddEvents = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Convert fullDate to date & month
  const getDateAndMonth = (fullDate) => {
    const dateObj = new Date(fullDate);
    const day = dateObj.getDate().toString();
    const month = dateObj
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();

    return { day, month };
  };

  const onSubmit = async (data) => {
    const { day, month } = getDateAndMonth(data.fullDate);

    const eventData = {
      title: data.title,
      image: data.image,
      date: day,
      month: month,
      startTime: data.startTime,
      endTime: data.endTime,
      fullDate: data.fullDate,
      location: data.location,
      category: data.category,
      highlighted: data.highlighted || false,
    };

    try {
      const res = await fetch("https://stem-server.onrender.com/events", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (res.ok) {
        toast.success("Event added successfully!");
        reset();
      } else {
        toast.error("Failed to add event");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Server error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">Add New Event</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Event Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            {...register("title", { required: true })}
          />
          {errors.title && <p className="text-red-500">Title is required</p>}
        </div>

        {/* Image */}
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            {...register("image", { required: true })}
          />
        </div>

        {/* Full Date */}
        <div>
          <label className="block mb-1 font-medium">Event Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 p-2 rounded"
            {...register("fullDate", { required: true })}
          />
        </div>

        {/* Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Start Time</label>
            <input
              type="time"
              className="w-full border border-gray-300 p-2 rounded"
              {...register("startTime", { required: true })}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">End Time</label>
            <input
              type="time"
              className="w-full border border-gray-300 p-2 rounded"
              {...register("endTime", { required: true })}
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-medium">
            Location (Google Maps URL)
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            {...register("location", { required: true })}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            className="w-full border border-gray-300 p-2 rounded"
            {...register("category", { required: true })}
          >
            <option value="">Select Category</option>
            <option value="Seminar">Seminar</option>
            <option value="Workshop">Workshop</option>
            <option value="Webinar">Webinar</option>
            <option value="Conference">Conference</option>
          </select>
        </div>

        {/* Highlighted */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("highlighted")}
            className="w-4 h-4"
          />
          <label className="font-medium">Highlighted Event</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvents;
