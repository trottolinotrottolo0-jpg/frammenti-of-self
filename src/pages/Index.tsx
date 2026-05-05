import { useLayoutEffect } from "react";
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
  useLayoutEffect(() => {
    const progressBar = document.querySelector<HTMLElement>("[data-scroll-progress]");

    const updateScrollProgress = () => {
      if (!progressBar) {
        return;
      }

      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    const animatedElements = document.querySelectorAll<HTMLElement>(
      [
        "main > section:not(.hero-section)",
        "main > footer",
        "section article",
        "section li",
        "section:not(.hero-section) h1",
        "section:not(.hero-section) h2",
        "section:not(.hero-section) h3",
        "section:not(.hero-section) h4",
        "section:not(.hero-section) h5",
        "section:not(.hero-section) h6",
        "section:not(.hero-section) p",
        "footer h1",
        "footer h2",
        "footer h3",
        "footer h4",
        "footer h5",
        "footer h6",
        "footer p",
        "section .bg-card",
        "section .bg-card\\/80",
        "section .bg-gradient-card",
      ].join(", "),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("scroll-fade-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    animatedElements.forEach((element) => {
      element.classList.add("scroll-fade");
      observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-clip bg-gradient-hero">
      <div className="fixed left-0 top-0 z-[100] h-[3px] w-0 bg-primary" data-scroll-progress />
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
