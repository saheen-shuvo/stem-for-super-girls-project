import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loadingAnimation/Loading Animation.json";

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all events
  useEffect(() => {
    fetch("http://localhost:5001/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  // Delete handler
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This event will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/events/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setEvents(events.filter((event) => event._id !== id));

              Swal.fire("Deleted!", "Event has been deleted.", "success");
            }
          });
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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Manage Events</h2>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event._id}
            className="flex items-center justify-between gap-4 p-4 border border-gray-300 rounded-lg shadow-sm"
          >
            {/* Left section */}
            <div className="flex items-center gap-4">
              <img
                src={event.image}
                alt={event.title}
                className="w-16 h-16 object-cover rounded"
              />

              <div>
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600">
                  {event.date} {event.month} • {event.category}
                </p>
                <p className="text-sm text-gray-500">📍 {event.location}</p>
              </div>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(event._id)}
              className="text-red-600 hover:text-red-800 text-xl"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
