import { useEffect, useState } from "react";
import API from "../api/api";

export default function Announcements() {

  const [announcements, setAnnouncements] =
    useState([]);

  // ✅ Load announcements
  useEffect(() => {

    fetchAnnouncements();

  }, []);

  // ✅ Fetch data
  const fetchAnnouncements = async () => {

    try {

      const res = await API.get(
        "announcement/"
      );

      setAnnouncements(res.data);

    } catch (err) {

      console.log(err.response?.data);
    }
  };

  return (

    <div className="bg-black min-h-screen text-white p-10">

      {/* Heading */}
      <h1 className="text-5xl text-red-600 font-bold mb-10">

        Announcements

      </h1>

      {/* Empty */}
      {announcements.length === 0 && (

        <p className="text-xl text-gray-400">

          No announcements available

        </p>

      )}

      {/* Announcement List */}
      <div className="space-y-8">

        {announcements.map((a) => (

          <div
            key={a.id}
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800"
          >

            {/* Title */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">

              {a.title}

            </h2>

            {/* Content */}
            <p className="text-gray-300 text-lg mb-5">

              {a.content}

            </p>

            {/* Footer */}
            <div className="flex justify-between text-sm text-gray-500">

              <p>
                Posted By: {a.created_by_name}
              </p>

              <p>
                {new Date(
                  a.created_at
                ).toLocaleString()}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}