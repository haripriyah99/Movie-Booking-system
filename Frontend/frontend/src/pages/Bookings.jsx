import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  // Load bookings
  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    API.get("bookings/")
      .then(res => setBookings(res.data))
      .catch(err => console.log(err));
  };

  // Cancel booking
  const cancelBooking = async (id) => {
    try {
      await API.delete(`bookings/${id}/`);

      alert("❌ Booking Cancelled");

      fetchBookings();

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">

  

      <div className="p-8">

        <h1 className="text-4xl font-bold text-red-600 mb-8">
          My Bookings
        </h1>

        {bookings.length === 0 ? (
          <p>No bookings found</p>
        ) : (
          <div className="grid gap-6">

            {bookings.map(book => (
              <div
                key={book.id}
                className="bg-zinc-900 p-6 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-3">
                  🎟 Booking #{book.id}
                </h2>

                <p className="mb-2">
                  <span className="text-gray-400">
                    Show ID:
                  </span>{" "}
                  {book.show}
                </p>

                <p className="mb-2">
                  <span className="text-gray-400">
                    Seats:
                  </span>{" "}
                  {book.seats.join(", ")}
                </p>

                <button
                  onClick={() => cancelBooking(book.id)}
                  className="mt-4 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
                >
                  Cancel Booking
                </button>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}