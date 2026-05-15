import { useState } from "react";
import API from "../api/api";

export default function AddTheater() {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async () => {

    try {

      await API.post("theaters/", {
        name,
        location
      });

      alert(" Theater Added");

      setName("");
      setLocation("");

    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white flex justify-center items-center">

      <div className="bg-zinc-900 p-8 rounded-xl w-[500px]">

        <h1 className="text-4xl text-red-600 font-bold mb-6">
          Add Theater
        </h1>

        <input
          type="text"
          placeholder="Theater Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-zinc-800"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-zinc-800"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-red-600 hover:bg-red-700 p-3 rounded-lg"
        >
          Add Theater
        </button>

      </div>

    </div>
  );
}