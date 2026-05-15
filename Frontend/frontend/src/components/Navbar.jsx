import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

export default function Navbar() {

  const nav = useNavigate();

  const token = localStorage.getItem("access");

  const role = localStorage.getItem("role");

  const [open, setOpen] =
    useState(false);

  // Logout
  const logout = () => {

    localStorage.clear();

    nav("/login");
  };

  return (

    <nav className="bg-black text-white px-4 md:px-10 py-5 border-b border-zinc-800">

      {/* Top Section */}
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1
          onClick={() => nav("/")}

          className="text-2xl md:text-4xl font-bold text-red-600 cursor-pointer"
        >
          CINEBOOK
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">

          {token && (

            <Link
              to="/movies"
              className="hover:text-red-500"
            >
              Movies
            </Link>
          )}

          {token && (

            <Link
              to="/announcements"
              className="hover:text-red-500"
            >
              Announcements
            </Link>
          )}

          {token && (

            <Link
              to="/feedback"
              className="hover:text-red-500"
            >
              Feedback
            </Link>
          )}

          {role === "admin" && (

            <Link
              to="/admin-dashboard"
              className="hover:text-red-500"
            >
              Admin
            </Link>
          )}

          {role === "staff" && (

            <Link
              to="/staff-dashboard"
              className="hover:text-red-500"
            >
              Staff
            </Link>
          )}

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

        {/* Mobile Button */}
        <button
          onClick={() =>
            setOpen(!open)
          }

          className="md:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (

        <div className="flex flex-col gap-4 mt-5 md:hidden">

          {token && (

            <Link
              to="/movies"
              onClick={() =>
                setOpen(false)
              }
            >
              Movies
            </Link>
          )}

          {token && (

            <Link
              to="/announcements"
              onClick={() =>
                setOpen(false)
              }
            >
              Announcements
            </Link>
          )}

          {token && (

            <Link
              to="/feedback"
              onClick={() =>
                setOpen(false)
              }
            >
              Feedback
            </Link>
          )}

          {role === "admin" && (

            <Link
              to="/admin-dashboard"
              onClick={() =>
                setOpen(false)
              }
            >
              Admin
            </Link>
          )}

          {role === "staff" && (

            <Link
              to="/staff-dashboard"
              onClick={() =>
                setOpen(false)
              }
            >
              Staff
            </Link>
          )}

          {!token ? (

            <>
              <Link
                to="/login"
                onClick={() =>
                  setOpen(false)
                }
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() =>
                  setOpen(false)
                }

                className="bg-red-600 px-4 py-2 rounded-lg w-fit"
              >
                Register
              </Link>
            </>

          ) : (

            <button
              onClick={logout}

              className="bg-red-600 px-4 py-2 rounded-lg w-fit"
            >
              Logout
            </button>
          )}

        </div>
      )}

    </nav>
  );
}