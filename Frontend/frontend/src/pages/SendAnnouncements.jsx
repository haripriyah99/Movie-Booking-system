import { useState } from "react";
import API from "../api/api";

export default function SendAnnouncements() {

  const [title, setTitle] =
    useState("");

  const [content, setContent] =
    useState("");

  //  Send announcement
  const sendAnnouncement = async () => {

    if (!title || !content) {

      alert("Fill all fields");

      return;
    }

    try {

      await API.post(
        "announcement/",
        {
          title,
          content
        }
      );

      alert(
        "Announcement Sent"
      );

      setTitle("");

      setContent("");

    } catch (err) {

      console.log(
        err.response?.data
      );

      alert("❌ Failed");
    }
  };

  return (

    <div className="bg-black min-h-screen flex justify-center items-center p-10">

      <div className="bg-zinc-900 p-10 rounded-2xl w-full max-w-2xl">

        {/* Heading */}
        <h1 className="text-5xl text-red-600 font-bold mb-10 text-center">

          Send Announcement

        </h1>

        {/* Title */}
        <input
          type="text"
          placeholder="Announcement Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full p-4 rounded-lg bg-zinc-800 text-white mb-5 border border-zinc-700 focus:outline-none focus:border-red-600"
        />

        {/* Content */}
        <textarea
          rows="7"
          placeholder="Write announcement..."
          value={content}
          onChange={(e) =>
            setContent(
              e.target.value
            )
          }
          className="w-full p-4 rounded-lg bg-zinc-800 text-white mb-5 border border-zinc-700 focus:outline-none focus:border-red-600"
        />

        {/* Button */}
        <button
          onClick={sendAnnouncement}
          className="w-full bg-red-600 hover:bg-red-700 p-4 rounded-lg text-lg font-bold"
        >
          Send Announcement
        </button>

      </div>

    </div>
  );
}