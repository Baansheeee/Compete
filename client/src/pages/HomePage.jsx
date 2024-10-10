import React, { useState, useEffect } from "react";
import { Hero } from "../components/Hero";
import { Testimonial } from "../components/Testimonials";
import Footer from "../components/Footer";
import { DeviceCards } from "../components/DeviceSlider";
import { FaArrowUp } from "react-icons/fa";

const HomePage = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollTop]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="">
        <Hero />
        <DeviceCards />
        <Testimonial />
      </div>

      {showScrollTop && (
        <button
          className="fixed bottom-8 right-8 bg-primary-red text-white p-3 rounded-full shadow-lg hover:bg-primary-red transition-all duration-300 transform hover:scale-110"
          onClick={scrollTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default HomePage;
