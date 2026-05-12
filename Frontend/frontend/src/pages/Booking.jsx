import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";

export default function Booking() {

  const { id } = useParams();

  // ✅ States
  const [location,setLocation]=useState("");
  const [theaters,setTheaters]=useState([]);
  const [selectedTheater, setselectedTheater] = useState("");

  const [shows,setShows]=useState([]);

  const [selectedShow, setSelectedShow] =
    useState("");

  const [selectedSeats, setSelectedSeats] =
    useState([]);

  const [bookedSeats, setBookedSeats] =
    useState([]);

  // ✅ Seat Layout
  const rows = [
    "A",
    "B",
    "C",
    "D",
    "E"
  ];

  const seats = [];

  rows.forEach((row) => {

    for (let i = 1; i <= 6; i++) {

      seats.push(`${row}${i}`);
    }
  });
  //load theaters
  const fetchTheaters=async(
    locationName
  )=>{
    try{
      const res= await API.get(`theaters/?location=${locationName}`

      );
      setTheaters(res.data)
    }catch(err){
      console.log(err);
    };
  }

  // ✅ Load Showtimes
  useEffect(() => {

    fetchShows();

  }, []);

  const fetchShows = async (theaterId) => {

    try {

      const res = await API.get(
        `showtime/?movie=${id}&theater=${theaterId}`
      );

      console.log(res.data);

      setShows(res.data);

    } catch (err) {

      console.log(
        err.response?.data
      );
    }
  };

  // ✅ Load Booked Seats
  const fetchBookedSeats = async (
    showId
  ) => {

    try {

      const res = await API.get(
        `bookings/?show=${showId}`
      );

      let allBooked = [];

      res.data.forEach((b) => {

        allBooked = [

          ...allBooked,

          ...b.seats
        ];
      });

      setBookedSeats(allBooked);

    } catch (err) {

      console.log(
        err.response?.data
      );
    }
  };
  //location change
  const handleLocationChange=(
    value
  )=>{
    setLocation(value);
    setselectedTheater("");
    setSelectedShow("");
      setShows([]);
      fetchTheaters(value);
    
  };
  //theater change
  const handleTheaterChange=(
    theaterId
  )=>{
    setselectedTheater(theaterId);
    setSelectedShow("");
    fetchShows(theaterId);
  };
  // ✅ Change Showtime
  const handleShowChange = (
    showId
  ) => {

    setSelectedShow(showId);

    setSelectedSeats([]);

    fetchBookedSeats(showId);
  };

  // ✅ Select Seat
  const toggleSeat = (seat) => {

    // already booked
    if (
      bookedSeats.includes(seat)
    ) {

      return;
    }

    // remove seat
    if (
      selectedSeats.includes(seat)
    ) {

      setSelectedSeats(

        selectedSeats.filter(
          (s) => s !== seat
        )
      );

    } else {

      // add seat
      setSelectedSeats([

        ...selectedSeats,

        seat
      ]);
    }
  };

  // ✅ Book Ticket
  const bookTicket = async () => {

    try {

      console.log({

        show: selectedShow,

        seats: selectedSeats
      });

      await API.post(

        "bookings/",

        {
          show: selectedShow,

          seats: selectedSeats
        }
      );

      alert(
        "🎟️ Booking Successful"
      );

      setSelectedSeats([]);

      fetchBookedSeats(
        selectedShow
      );

    } catch (err) {

      console.log(
        err.response?.data
      );

      alert(
        "Booking Failed"
      );
    }
  };

  return (

    <div className="bg-black min-h-screen text-white p-10">

      {/* Heading */}
      <h1 className="text-5xl text-red-600 font-bold mb-10">

        Book Seats

      </h1>
      {/*location */}
      <select value={location}
      onChange={(e)=>handleLocationChange(
        e.target.value
      )}
      className="w-full p-4 rounded-lg bg-zinc-900 mb-5"
      >
<option value="">
Select Location
</option>
<option value="Kochi">
Kochi
</option>
<option value="Trivandrum">
Trivandrum
</option>

<option value="Pathanamthitta">
Pathanamthitta
</option>
<option value="Kollam">
Kollam
</option>
<option value="Alapusha">
Alapuha
</option>
<option value="trissur">
trissur
</option>
      </select>
      {/* theater */}
      <select value={selectedTheater} onChange={(e)=>
        handleTheaterChange(e.target.value)}
        className=" w-full p-4 rounded-lg bg-zinc-900 mb-5"
        >
<option value="">
Select Theater
</option>
{theaters.map(
  (theater)=>(

    <option key={theater.id}
    value={theater.id}
    >
      {theater.name}

    </option>
  )
)}

      </select>

      {/* Showtime Dropdown */}
      <select
        value={selectedShow}

        onChange={(e) =>
          handleShowChange(
            e.target.value
          )
        }

        className="w-full p-4 rounded-lg bg-zinc-900 mb-10"
      >

        <option value="">

          Select Showtime

        </option>

        {shows.map((show) => (

          <option
            key={show.id}
            value={show.id}
          >

            {show.theater_name}

            {" - "}

            {show.time}

          </option>

        ))}

      </select>

      {/* Screen */}
      <div className="w-full bg-gray-300 text-black text-center py-3 rounded-xl mb-10 font-bold">

        SCREEN

      </div>

      {/* Seats */}
      <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-5">

        {seats.map((seat) => (

          <button
            key={seat}

            onClick={() =>
              toggleSeat(seat)
            }

            className={`

              h-12 rounded-lg font-bold transition

              ${

                bookedSeats.includes(
                  seat
                )

                  ? "bg-red-600 cursor-not-allowed"

                  : selectedSeats.includes(
                      seat
                    )

                  ? "bg-green-500"

                  : "bg-zinc-700 hover:bg-zinc-600"
              }

            `}
          >

            {seat}

          </button>

        ))}

      </div>

      {/* Legend */}
      <div className="flex gap-8 mt-10 flex-wrap">

        <div className="flex items-center gap-3">

          <div className="w-5 h-5 bg-zinc-700 rounded"></div>

          <p>Available</p>

        </div>

        <div className="flex items-center gap-3">

          <div className="w-5 h-5 bg-green-500 rounded"></div>

          <p>Selected</p>

        </div>

        <div className="flex items-center gap-3">

          <div className="w-5 h-5 bg-red-600 rounded"></div>

          <p>Booked</p>

        </div>

      </div>

      {/* Selected Seats */}
      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-5">

          Selected Seats

        </h2>

        <p className="text-xl text-yellow-400">

          {

            selectedSeats.length > 0

              ? selectedSeats.join(", ")

              : "No seats selected"
          }

        </p>

      </div>

      {/* Confirm Button */}
      <button

        onClick={bookTicket}

        disabled={
          !selectedShow ||
          selectedSeats.length === 0
        }

        className="mt-10 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-xl text-xl font-bold disabled:opacity-50"
      >

        Confirm Booking

      </button>

    </div>
  );
}