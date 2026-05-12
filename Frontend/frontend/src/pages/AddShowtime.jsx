import { useEffect, useState } from "react";
import API from "../api/api";

export default function AddShowtime() {

  const [movies, setMovies] = useState([]);
  const [theaters, setTheaters] = useState([]);

  const [movie, setMovie] = useState("");
  const [theater, setTheater] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {

    API.get("movies/")
      .then(res => setMovies(res.data));

    API.get("theaters/")
      .then(res => setTheaters(res.data));

  }, []);

  const handleSubmit = async () => {

    try {

      await API.post("shows/", {
        movie,
        theater,
        time
      });

      alert("✅ Showtime Added");

    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white flex justify-center items-center">

      <div className="bg-zinc-900 p-8 rounded-xl w-[500px]">

        <h1 className="text-4xl text-red-600 font-bold mb-6">
          Add Showtime
        </h1>

        {/* Movie */}
        <select
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-zinc-800"
        >
          <option>Select Movie</option>

          {movies.map(m => (
            <option key={m.id} value={m.id}>
              {m.title}
            </option>
          ))}
        </select>

        {/* Theater */}
        <select
          value={theater}
          onChange={(e) => setTheater(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-zinc-800"
        >
          <option>Select Theater</option>

          {theaters.map(t => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>

        {/* Time */}
        <input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-zinc-800"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-red-600 hover:bg-red-700 p-3 rounded-lg"
        >
          Add Showtime
        </button>

      </div>

    </div>
  );
}