import { useNavigate } from "react-router-dom";

export default function StaffDashboard() {

  const nav = useNavigate();

  return (
    <div className="bg-black min-h-screen text-white p-8">

      <h1 className="text-5xl text-red-600 font-bold mb-10">
        Staff Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Manage Shows */}
        <div
          onClick={() => nav("/add-show")}
          className="bg-zinc-900 p-8 rounded-xl cursor-pointer hover:bg-zinc-800"
        >
          <h2 className="text-2xl font-bold">
            🎬 Manage Shows
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

        {/* Announcements */}
        <div
          onClick={() => nav("/send-announcement")}
          className="bg-zinc-900 p-8 rounded-xl cursor-pointer hover:bg-zinc-800"
        >
          <h2 className="text-2xl font-bold">
            📢 Send Announcement
          </h2>
        </div>

      </div>

    </div>
  );
}