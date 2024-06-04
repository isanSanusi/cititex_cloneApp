import "./index.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import AboutPages from "./pages/AboutPages";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import CareerPages from "./pages/CareerPages";
import ContactPages from "./pages/ContactPages";
import TrackPages from "./pages/TrackPages";
import Login from "./pages/Login";
import Register from "./pages/Register"
import StartDesign from "./pages/StartDesign";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/startDesign" element={<StartDesign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/contact" element={<ContactPages />} />
        <Route path="/track" element={<TrackPages />} />
        <Route path="/career" element={<CareerPages />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
