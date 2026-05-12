import { useEffect, useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    API.get("movies/")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      
    

      {/* Hero */}
      <div className="p-8">
        <h1 className="text-5xl font-bold text-red-600 mb-2">
          NETMOVIES
        </h1>

        <p className="text-gray-400">
          Watch and book your favorite movies
        </p>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">

        {movies.map(movie => (
          <div
            key={movie.id}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            {/* Fake Poster */}
            <div className="h-72 bg-gray-700 flex items-center justify-center text-2xl">

              🎬
              <img
  src={`http://127.0.0.1:8000${movie.poster}`}

 

  className="w-full h-80 object-cover rounded-xl"
/>
            </div>

            <div className="p-4">
              <h2 className="text-2xl font-bold">
                {movie.title}
              </h2>

              <p className="text-gray-400 mt-2">
                {movie.description}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                ⏱ {movie.duration} mins
              </p>

              <button
                onClick={() => nav(`/booking/${movie.id}`)}
                className="mt-4 w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}