import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Empathy from "@/components/sections/Empathy";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Method from "@/components/sections/Method";
import ForWhom from "@/components/sections/ForWhom";
import Credentials from "@/components/sections/Credentials";
import Booking from "@/components/sections/Booking";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Empathy />
      <About />
      <Services />
      <Method />
      <ForWhom />
      <Credentials />
      <Booking />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
