import React from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import PopularDestinations from "../components/home/PopularDestinations";
import SpecialOffers from "../components/home/SpecialOffers";
import Amenities from "../components/home/Amenities";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/home/Footer";
import { getReservations } from "../api/reservation";

function Home() {


  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PopularDestinations />
      <SpecialOffers />
      <Amenities />
      <Testimonials />
      <Footer />
      <button onClick={() => getReservations("1")}>Get Reservations</button>
    </div>
  );
}

export default Home;
