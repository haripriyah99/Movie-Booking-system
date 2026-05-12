export default function Footer() {

  return (

    <footer className="bg-zinc-950 text-white mt-20 border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Logo */}
          <div>

            <h1 className="text-4xl font-bold text-red-600">

              CINEBOOK

            </h1>

            <p className="text-gray-400 mt-4 max-w-sm">

              Watch and book your favorite movies easily with real-time seat booking and showtime selection.

            </p>

          </div>

          {/* Links */}
          <div>

            <h2 className="text-2xl font-bold mb-4">

              Quick Links

            </h2>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white cursor-pointer">

                Movies

              </li>

              <li className="hover:text-white cursor-pointer">

                Bookings

              </li>

              <li className="hover:text-white cursor-pointer">

                Announcements

              </li>

              <li className="hover:text-white cursor-pointer">

                Feedback

              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h2 className="text-2xl font-bold mb-4">

              Contact

            </h2>

            <p className="text-gray-400">

              📍 Kochi, Kerala

            </p>

            <p className="text-gray-400 mt-2">

              📧 netmovies@gmail.com

            </p>

            <p className="text-gray-400 mt-2">

              📞 +91 9876543210

            </p>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 mt-10 pt-5 text-center text-gray-500">

          © 2026 NETMOVIES. All rights reserved.

        </div>

      </div>

    </footer>
  );
}