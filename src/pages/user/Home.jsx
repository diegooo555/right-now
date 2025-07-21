import Navbar from "../../components/home/Navbar";
import Hero from "../../components/home/Hero";
import PopularDestinations from "../../components/home/PopularDestinations";
import Amenities from "../../components/home/Amenities";
import Testimonials from "../../components/home/Testimonials";
import Footer from "../../components/home/Footer";
import Services from "../../components/hotel/Services";

function Home() {


  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PopularDestinations />
      <div className="container mx-auto px-4">
        <Services/>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
