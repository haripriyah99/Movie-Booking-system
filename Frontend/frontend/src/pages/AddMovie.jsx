import { useState } from "react";

import API from "../api/api";

export default function AddMovie() {

  const [title, setTitle] =
    useState("");

  const [description,
  setDescription] =
    useState("");

  const [duration,
    setDuration] =
    useState("");

  const [poster,
  setPoster] =
    useState(null);

  const handleSubmit =
    async (e) => {

    e.preventDefault();

    try {

      const formData =
        new FormData();

      formData.append(
        "title",
        title
      );

      formData.append(
        "description",
        description
      );

      formData.append(
        "duration",
        duration
      );

      formData.append(
        "poster",
        poster
      );

      await API.post(

        "movies/",

        formData,

        {
          headers: {

            "Content-Type":
              "multipart/form-data"
          }
        }
      );

      alert(
        "Movie Added Successfully"
      );

      setTitle("");

      setDescription("");

      setDuration("");

      setPoster(null);

    } catch (err) {

      console.log(err);

      alert(
        "Failed to Add Movie"
      );
    }
  };

  return (

    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl font-bold text-red-600 mb-10">

        Add Movie

      </h1>

      <form
        onSubmit={handleSubmit}

        className="space-y-5"
      >

        {/* Title */}
        <input
          type="text"

          placeholder="Movie Title"

          value={title}

          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }

          className="w-full p-4 rounded-lg bg-zinc-900"
        />

        {/* Description */}
        <textarea
          placeholder="Description"

          value={description}

          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }

          className="w-full p-4 rounded-lg bg-zinc-900"
        />

        {/* Duration */}
        <input
          type="number"

          placeholder="Duration"

          value={duration}

          onChange={(e) =>
            setDuration(
              e.target.value
            )
          }

          className="w-full p-4 rounded-lg bg-zinc-900"
        />

        {/* Poster */}
        <input
          type="file"

          onChange={(e) =>
            setPoster(
              e.target.files[0]
            )
          }

          className="w-full p-4 rounded-lg bg-zinc-900"
        />

        {/* Button */}
        <button
          type="submit"

          className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold"
        >

          Add Movie

        </button>

      </form>

    </div>
  );
}
