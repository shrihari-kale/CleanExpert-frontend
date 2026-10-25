import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainHome from "./components/home/MainHome";
import ServicesPage from "./components/services/ServicesPage";
import Footer from "./components/Footer";
import Review from "./components/review/Review";
import ContactPage from "./components/contact/ContactPage";
import BookingForm from "./components/BookingForm";
import ViewBooking from "./components/ViewBooking";
import PaymentPage from "./components/PaymentPage";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/review" element={<Review />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/booking" element={<BookingForm/>}></Route>
        <Route path="/bookings" element={<ViewBooking/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
      </Routes>

      {/* <Footer/> */}
    </>
  );
}

export default App;