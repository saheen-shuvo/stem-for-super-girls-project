import { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext/AuthContext";

const Messages = () => {
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messagesList, setMessagesList] = useState([]);

  // Fetch user messages
  const fetchMessages = async () => {
    if (!user?.email) return;
    try {
      const res = await fetch(
        `https://stem-server.onrender.com/messages?email=${user.email}`,
      );
      const data = await res.json();
      setMessagesList(data);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Failed to fetch messages");
    }
  };

  useEffect(() => {
    fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);

  // Send new message
  const handleSendMessage = async () => {
    if (!message.trim()) {
      toast.warn("Please write a message!");
      return;
    }

    if (!user?.email) {
      toast.error("You must be logged in to send a message");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://stem-server.onrender.com/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, message }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent!");
        setMessage(""); // clear textarea
        fetchMessages(); // refresh messages
      } else {
        toast.error(data.message || "Failed to send message");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-semibold mb-6">Message</h1>

      <textarea
        className="textarea w-full h-32 p-3 border border-gray-300 rounded-lg outline-none mb-4"
        placeholder="Write a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        onClick={handleSendMessage}
        disabled={loading}
        className="btn bg-teal-500 text-white border-0 px-6 py-2 rounded-lg mb-6"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {/* User Messages */}
      <h2 className="text-xl font-semibold mb-4">Your Messages</h2>
      {messagesList.length === 0 ? (
        <p className="text-gray-500">You haven't sent any messages yet.</p>
      ) : (
        <ul className="space-y-3 max-h-96 overflow-y-auto">
          {messagesList.map((msg) => (
            <li
              key={msg._id}
              className="border border-gray-200 rounded-lg p-4 bg-gray-50"
            >
              {/* User message */}
              <p className="text-gray-800">{msg.message}</p>

              <p className="text-xs text-gray-500 mt-1">
                {new Date(msg.createdAt).toLocaleString()}
              </p>

              {/* Admin reply */}
              {msg.reply && (
                <div className="mt-3 p-3 rounded bg-green-50 border border-green-200">
                  <p className="text-sm font-semibold text-green-700">
                    Admin Reply
                  </p>
                  <p className="text-gray-800">{msg.reply}</p>

                  {msg.repliedAt && (
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(msg.repliedAt).toLocaleString()}
                    </p>
                  )}
                  {/* Reply Indicator */}
                  {msg.reply && (
                    <span className="badge badge-success text-xs mt-2">
                      Replied
                    </span>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Messages;
