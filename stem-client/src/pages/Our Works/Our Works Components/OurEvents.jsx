import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const OurEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://stem-server.onrender.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  // console.log(events);
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Our Events</h2>
          <p className="mt-3 text-gray-600">
            Discover Our Upcoming and Past Events
          </p>
        </div>

        {/* Search Bar */}
        {/* <div className="bg-white border border-gray-300 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center mb-10">
          <input
            type="text"
            placeholder="Search for events"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none"
          />

          <input
            type="text"
            placeholder="Location"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none"
          />

          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            FIND EVENTS
          </button>
        </div> */}

        {/* Events Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Events</h3>
        </div>

        {/* Events Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {events.map((event) => (
            <div
              key={event._id}
              className={`rounded-xl overflow-hidden shadow-md border border-gray-300 transition ${
                event.highlighted ? "bg-base-100" : "bg-white"
              }`}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white rounded-lg shadow px-3 py-2 text-center">
                  <p className="text-xl font-bold">{event.date}</p>
                  <p className="text-xs font-semibold">{event.month}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">{event.title}</h4>

                <p className="text-sm text-gray-600 mb-2">
                  ⏰ {event.fullDate} @ {event.startTime} – {event.endTime}
                </p>

                <a
                  href={event.location}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 block mb-4 hover:underline"
                >
                  📍 {event.location}
                </a>

                <span className="inline-block px-3 py-1 text-sm border border-gray-300 rounded-full">
                  {event.category}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurEvents;
