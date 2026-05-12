import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const nav = useNavigate();

  const token = localStorage.getItem("access");

  const role = localStorage.getItem("role");

  // ✅ Logout
  const logout = () => {

    localStorage.clear();

    nav("/login");
  };

  return (

    <nav className="bg-black text-white px-10 py-5 flex justify-between items-center border-b border-zinc-800">

      {/* Logo */}
      <h1
        onClick={() => nav("/")}
        className="text-4xl font-bold text-red-600 cursor-pointer"
      >
    CINEBOOK
      </h1>

      {/* Menu */}
      <div className="flex gap-6 items-center">

        {/* Movies */}
        {token && (

          <Link
            to="/movies"
            className="hover:text-red-500"
          >
            Movies
          </Link>

        )}

        {/* Announcements */}
        {token && (

          <Link
            to="/announcements"
            className="hover:text-red-500"
          >
            Announcements
          </Link>

        )}

        {/* Feedback */}
        {token && (

          <Link
            to="/feedback"
            className="hover:text-red-500"
          >
            Feedback
          </Link>

        )}

        {/* Admin Dashboard */}
        {role === "admin" && (

          <Link
            to="/admin-dashboard"
            className="hover:text-red-500"
          >
            Admin
          </Link>

        )}

        {/* Staff Dashboard */}
        {role === "staff" && (

          <Link
            to="/staff-dashboard"
            className="hover:text-red-500"
          >
            Staff
          </Link>

        )}

        {/* Login/Register */}
        {!token ? (

          <>

            <Link
              to="/login"
              className="hover:text-red-500"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
            >
              Register
            </Link>

          </>

        ) : (

          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        )}

      </div>

    </nav>
  );
}