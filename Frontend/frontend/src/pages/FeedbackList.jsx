import { useEffect, useState } from "react";
import API from "../api/api";

export default function FeedbackList() {

  const [feedbacks, setFeedbacks] = useState([]);

  // Load feedbacks
  useEffect(() => {

    fetchFeedbacks();

  }, []);

  // Fetch feedbacks
  const fetchFeedbacks = async () => {

    try {

      const res = await API.get(
        "feedback/"
      );

      setFeedbacks(res.data);

    } catch (err) {

      console.log(err.response?.data);

    }
  };

  //  Reply feedback
  const sendReply = async (id, reply) => {

    if (!reply) {

      alert("Write reply");

      return;
    }

    try {

      await API.patch(
        `feedback/${id}/`,
        {
          reply
        }
      );

      alert("Reply Sent");

      fetchFeedbacks();

    } catch (err) {

      console.log(err.response?.data);

      alert("❌ Failed");
    }
  };

  return (

    <div className="bg-black min-h-screen text-white p-10">

      {/* Heading */}
      <h1 className="text-5xl text-red-600 font-bold mb-10">
        Customer Feedbacks
      </h1>

      {/* No feedback */}
      {feedbacks.length === 0 && (

        <p className="text-gray-400 text-xl">
          No feedback available
        </p>

      )}

      {/* Feedback list */}
      <div className="space-y-8">

        {feedbacks.map((f) => (

          <div
            key={f.id}
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
          >

            {/* User */}
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">

              User ID: {f.user}

            </h2>

            {/* Message */}
            <div className="mb-5">

              <h3 className="font-bold text-lg mb-2">
                Feedback
              </h3>

              <p className="text-gray-300">
                {f.message}
              </p>

            </div>

            {/* Existing Reply */}
            {f.reply && (

              <div className="bg-zinc-800 p-4 rounded-lg mb-5">

                <h3 className="text-green-500 font-bold mb-2">
                  Reply
                </h3>

                <p>
                  {f.reply}
                </p>

              </div>

            )}

            {/* Reply Input */}
            <textarea
              rows="4"
              placeholder="Write reply..."
              className="w-full p-4 rounded-lg bg-zinc-800 text-white border border-zinc-700 mb-5 focus:outline-none focus:border-red-600"
              onChange={(e) =>
                f.tempReply = e.target.value
              }
            />

            {/* Reply Button */}
            <button
              onClick={() =>
                sendReply(
                  f.id,
                  f.tempReply
                )
              }
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-bold"
            >
              Send Reply
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}