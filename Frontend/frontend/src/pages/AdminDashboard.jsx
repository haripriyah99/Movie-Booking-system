import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {

  const nav = useNavigate();

  return (

    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl text-red-600 font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Add Movie */}
        <div
          onClick={() => nav("/add-movie")}
          className="bg-zinc-900 p-8 rounded-xl cursor-pointer hover:bg-zinc-800"
        >
          <h2 className="text-2xl font-bold">
            🎬 Add Movie
          </h2>
        </div>

        {/* Add Theater */}
        <div
          onClick={() => nav("/add-theater")}
          className="bg-zinc-900 p-8 rounded-xl cursor-pointer hover:bg-zinc-800"
        >
          <h2 className="text-2xl font-bold">
            🎭 Add Theater
          </h2>
        </div>

        {/* Add Show */}
        <div
          onClick={() => nav("/add-show")}
          className="bg-zinc-900 p-8 rounded-xl cursor-pointer hover:bg-zinc-800"
        >
          <h2 className="text-2xl font-bold">
            🕒 Add Show
          </h2>
        </div>

        {/* View Bookings */}
        <div
          onClick={() => nav("/admin-bookings")}
          className="bg-zinc-900 p-8 rounded-xl cursor-pointer hover:bg-zinc-800"
        >
          <h2 className="text-2xl font-bold">
            🎟️ View Bookings
          </h2>
        </div>

        {/* Feedback */}
        <div
          onClick={() => nav("/feedback-list")}
          className="bg-zinc-900 p-8 rounded-xl cursor-pointer hover:bg-zinc-800"
        >
          <h2 className="text-2xl font-bold">
            💬 Feedback
          </h2>
        </div>

        {/* Announcement */}
        <div
          onClick={() => nav("/send-announcement")}
          className="bg-zinc-900 p-8 rounded-xl cursor-pointer hover:bg-zinc-800"
        >
          <h2 className="text-2xl font-bold">
            📢 Announcement
          </h2>
        </div>

      </div>

    </div>

  );
}