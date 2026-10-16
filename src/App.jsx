import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MainHome from "./components/home/MainHome";
import ServicesPage from "./components/services/ServicesPage";
import Footer from "./components/Footer";
import Review from "./components/review/Review";
import ContactPage from "./components/contact/ContactPage";
import BookingForm from "./components/BookingForm";
import ViewBooking from "./components/ViewBooking";
import PaymentPage from "./components/PaymentPage";
import ServicesCard from "./components/services/ServicesCard";

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/review" element={<Review />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/booking" element={<BookingForm/>}></Route>
        <Route path="/bookings" element={<ViewBooking/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/servicescard" element={<ServicesCard/>}/>
      </Routes>

      {/* <Footer/> */}
    </>
  );
}

export default App;