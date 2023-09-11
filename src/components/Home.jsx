import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ContactForm from '../components/ContactForm';
import Map from "./Map";
const Home = ({ contact }) => {
  return (
    <section className="flex gap-6">
      {/* Sidebar */}
      <aside className="bg-[#0e0e0e] min-h-screen w-72 text-white">
        <div className="py-10 flex justify-center">
          <Link to="/" className="text-white">
            Home
          </Link>
        </div>
        <div className="py-10 flex justify-center">
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>
        <div className="py-10 flex justify-center">
          <Link to="/map" className="text-white">
            Map
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <Routes>
          <Route path="/contact" element={<ContactForm contact={contact}/>} />
          <Route path="/map" element={<div>Map Content Goes Here</div>} />
          <Route path="/" element={<Map/>} />
        </Routes>
        
      </div>
    </section>
  );
};

export default Home;
