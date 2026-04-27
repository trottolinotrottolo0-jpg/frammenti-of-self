import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Method from "@/components/sections/Method";
import Cases from "@/components/sections/Cases";
import Credentials from "@/components/sections/Credentials";
import Booking from "@/components/sections/Booking";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Method />
      <Cases />
      <Credentials />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
