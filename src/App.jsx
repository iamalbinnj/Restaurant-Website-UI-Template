import { Routes, Route } from "react-router";

import "./App.css";

import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Home";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
