import { useEffect, useState } from "react";
import API from "../api/api";

export default function Feedback() {

  const [message, setMessage] = useState("");

  const [feedbacks, setFeedbacks] = useState([]);

  //  Load user feedbacks
  useEffect(() => {

    fetchFeedbacks();

  }, []);

  const fetchFeedbacks = () => {

    API.get("feedback/")
      .then(res => {

        setFeedbacks(res.data);

      })
      .catch(err => {

        console.log(err);

      });

  };

  //  Send feedback
  const sendFeedback = async () => {

    if (!message) {

      alert("Write feedback");

      return;
    }

    try {

      await API.post(
        "feedback/",
        {
          message
        }
      );

      alert("✅ Feedback Sent");

      setMessage("");

      fetchFeedbacks();

    } catch (err) {

      console.log(err.response?.data);

      alert("❌ Failed");
    }
  };

  return (

    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl text-red-600 font-bold mb-10">
        Feedback
      </h1>

      {/* Feedback Form */}
      <div className="bg-zinc-900 p-6 rounded-xl mb-10">

        <textarea
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          placeholder="Write your feedback..."
          className="w-full p-4 rounded-lg bg-zinc-800 text-white mb-5"
          rows="5"
        />

        <button
          onClick={sendFeedback}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg"
        >
          Send Feedback
        </button>

      </div>

      {/* Feedback History */}
      <h2 className="text-3xl font-bold mb-6">
        My Feedbacks
      </h2>

      <div className="space-y-6">

        {feedbacks.map(f => (

          <div
            key={f.id}
            className="bg-zinc-900 p-6 rounded-xl"
          >

            {/* User Message */}
            <div>

              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                Your Feedback
              </h3>

              <p className="text-gray-300">
                {f.message}
              </p>

            </div>

            {/* Admin Reply */}
            {f.reply && (

              <div className="mt-5 bg-zinc-800 p-4 rounded-lg">

                <h3 className="text-green-500 font-bold mb-2">
                  Admin Reply
                </h3>

                <p>
                  {f.reply}
                </p>

              </div>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}