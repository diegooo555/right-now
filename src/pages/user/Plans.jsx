import Footer from "../../components/home/Footer";
import Navbar from "../../components/home/Navbar";
import EventsSection from "../../components/plans/EventsSections";
import ServicesSection from "../../components/plans/ServicesSection";
import ToursSection from "../../components/plans/ToursSection";


const Plans = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      
      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-amber-400 mb-6">
            Planes y Experiencias
          </h1>
        </div>
      </section>

      <EventsSection/>

      <ToursSection/>

      <ServicesSection/>

      <Footer/>
    </div>
  );
};

export default Plans;