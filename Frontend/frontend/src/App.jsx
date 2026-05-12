import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Pages */
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Movies from "./pages/Movies";
import Booking from "./pages/Booking";

import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";

import AddMovie from "./pages/AddMovie";
import AddTheater from "./pages/AddTheater";
import AddShowtime from "./pages/AddShowtime";

import Profile from "./pages/Profile";
import Bookings from "./pages/Bookings";
import Help from "./pages/Help";
import Settings from "./pages/Settings";

import Feedback from "./pages/Feedback";
import FeedbackList from "./pages/FeedbackList";

import Announcements from "./pages/Announcements";
import SendAnnouncements from "./pages/SendAnnouncements";

function App() {

  return (

    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Authentication */}
        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        {/* Dashboards */}
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/staff-dashboard"
          element={<StaffDashboard />}
        />

        {/* Movies */}
        <Route
          path="/movies"
          element={<Movies />}
        />

        {/* Booking */}
        <Route
          path="/booking/:id"
          element={<Booking />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* User Bookings */}
        <Route
          path="/bookings"
          element={<Bookings />}
        />

        {/* Help */}
        <Route
          path="/help"
          element={<Help />}
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={<Settings />}
        />

        {/* Admin Features */}
        <Route
          path="/add-movie"
          element={<AddMovie />}
        />

        <Route
          path="/add-theater"
          element={<AddTheater />}
        />

        <Route
          path="/add-show"
          element={<AddShowtime />}
        />

        {/* Feedback */}
        <Route
          path="/feedback"
          element={<Feedback />}
        />

        <Route
          path="/feedback-list"
          element={<FeedbackList />}
        />

        {/* Announcements */}
        <Route
          path="/announcements"
          element={<Announcements />}
        />

        <Route
          path="/send-announcement"
          element={<SendAnnouncements />}
        />

      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;