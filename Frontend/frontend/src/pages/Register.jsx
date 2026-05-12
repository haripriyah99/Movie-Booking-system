import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/api";

export default function Register() {

  const nav = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    try {

      const res = await API.post(
        "register/",
        {
          username,
          password
        }
      );

      // Save JWT
      localStorage.setItem(
        "access",
        res.data.access
      );

      localStorage.setItem(
        "refresh",
        res.data.refresh
      );

      alert("✅ Registration Successful");

      // Redirect
      nav("/movies");

    } catch (err) {

      console.log(err.response?.data);

      alert(
        err.response?.data?.error ||
        "❌ Registration Failed"
      );
    }
  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')] bg-cover bg-center opacity-30"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Register Card */}
      <div className="relative z-10 bg-black/80 backdrop-blur-md p-10 rounded-2xl w-[400px] border border-zinc-800 shadow-2xl">

        {/* Title */}
        <h1 className="text-5xl font-bold text-red-600 mb-8 text-center">
          NET MOVIES
        </h1>

        <h2 className="text-2xl text-white font-semibold mb-6 text-center">
          Create Account
        </h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="w-full p-4 mb-5 rounded-lg bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:border-red-600"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-4 mb-6 rounded-lg bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:border-red-600"
        />

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300 text-white p-4 rounded-lg font-bold text-lg"
        >
          Register
        </button>

        {/* Login Link */}
        <p className="text-gray-400 text-center mt-6">

          Already have an account?

          <Link
            to="/login"
            className="text-red-500 ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );
}