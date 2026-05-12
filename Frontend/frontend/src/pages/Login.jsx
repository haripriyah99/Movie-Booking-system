import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function Login() {

  const nav = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  // ✅ Login Function
  const handleLogin = async () => {

    console.log("Login button clicked");

    try {

      const res = await API.post(
        "login/",
        {
          username,
          password
        }
      );

      console.log(res.data);

      // Save token
      localStorage.setItem(
        "access",
        res.data.access
      );

      localStorage.setItem(
        "refresh",
        res.data.refresh
      );

      localStorage.setItem(
        "role",
        res.data.role
      );

      alert("✅ Login Success");

      // Navigate
      if (res.data.role === "admin") {

        nav("/admin-dashboard");

      } else if (res.data.role === "staff") {

        nav("/staff-dashboard");

      } else {

        nav("/movies");
      }

    } catch (err) {

      console.log(err.response?.data);

      alert("❌ Login Failed");
    }
  };

  return (

    <div className="bg-black min-h-screen flex justify-center items-center">

      <div className="bg-zinc-900 p-10 rounded-2xl w-[400px]">

        <h1 className="text-4xl text-red-600 font-bold mb-8 text-center">
          Login
        </h1>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="w-full p-4 rounded-lg bg-zinc-800 text-white mb-5"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-4 rounded-lg bg-zinc-800 text-white mb-5"
        />

        {/* Login Button */}
        <button
          type="button"
          onClick={handleLogin}
          className="w-full bg-red-600 hover:bg-red-700 p-4 rounded-lg text-white font-bold"
        >
          Login
        </button>

      </div>

    </div>
  );
}