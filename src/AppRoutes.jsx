import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Login from "./components/ui/Login";
import Admin from "./pages/Admin";
import UserDashboard from "./pages/UserDashboard";
import UserOrders from "./pages/UserOrders";
import UserTrips from "./pages/UserTrips";
import NewSendOrder from "./pages/NewSendOrder";
import TripPage from "./pages/TripPage";

function AppContent() {
  const location = useLocation();

  const hiddenRoutes = ["/login","/admin-dashboard","/user-dashboard","/user-orders","/user-trips","/new-trip","/new-send-order"];
  const shouldShowNavs = !hiddenRoutes.includes(location.pathname);
  const shouldShowFooter = !hiddenRoutes.includes(location.pathname); 

  return (
    <>
      {shouldShowNavs && <Navbar />}

      <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<Admin />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/user-orders" element={<UserOrders />} />
          <Route path="/user-trips" element={<UserTrips />} />
          <Route path="/new-trip" element={<TripPage />} />
          <Route path="/new-send-order" element={<NewSendOrder />} />

      </Routes>
            {shouldShowFooter && <Footer />} 

    </>
  );
}

export default AppContent;
