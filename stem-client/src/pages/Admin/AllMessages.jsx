import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loadingAnimation/Loading Animation.json";

const AllMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [replyText, setReplyText] = useState({});

  useEffect(() => {
    fetch("http://localhost:5001/all-messages")
      .then((res) => res.json())
      .then((data) => {
        setMessages(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleReply = async (id) => {
    if (!replyText[id]?.trim()) return;

    try {
      const res = await fetch(`http://localhost:5001/messages/${id}/reply`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reply: replyText[id],
          adminEmail: "admin",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg._id === id
              ? {
                  ...msg,
                  reply: replyText[id],
                  repliedAt: new Date(),
                }
              : msg,
          ),
        );

        setReplyText((prev) => ({ ...prev, [id]: "" }));
      }
    } catch (err) {
      console.error(err);
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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">All Messages</h2>

      {messages.length === 0 ? (
        <p className="text-gray-500">No messages found.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-blue-600">{msg.email}</p>
                <p className="text-sm text-gray-500">
                  {new Date(msg.createdAt).toLocaleString()}
                </p>
              </div>

              <p className="text-gray-800 mb-3">{msg.message}</p>

              {/* Admin reply section */}
              {msg.reply ? (
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded">
                  <p className="text-sm font-semibold text-green-700">
                    Your Reply
                  </p>
                  <p>{msg.reply}</p>
                  {msg.repliedAt && (
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(msg.repliedAt).toLocaleString()}
                    </p>
                  )}
                </div>
              ) : (
                <div className="mt-3">
                  <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Write reply..."
                    value={replyText[msg._id] || ""}
                    onChange={(e) =>
                      setReplyText((prev) => ({
                        ...prev,
                        [msg._id]: e.target.value,
                      }))
                    }
                  />

                  <button
                    className="btn btn-sm btn-success mt-2"
                    onClick={() => handleReply(msg._id)}
                  >
                    Reply
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllMessages;
