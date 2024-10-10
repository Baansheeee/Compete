import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-20 dark:bg-slate-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-primary-red mb-8">
          About TechTrade
        </h1>
        <p className="text-lg mb-6">
          Welcome to TechTrade, your go-to platform for buying and selling new
          and used technology devices. We are dedicated to connecting tech
          enthusiasts with the latest gadgets and reliable pre-owned devices,
          ensuring quality and value in every transaction.
        </p>
        <p className="text-lg mb-6">
          Founded in 2023, TechTrade was created out of a passion for technology
          and a commitment to sustainability. Our mission is to make the process
          of trading devices seamless and enjoyable, empowering users to make
          smart purchasing decisions while reducing electronic waste.
        </p>
        <p className="text-lg mb-6">
          We invite you to explore our diverse collection of technology devices,
          from smartphones and laptops to accessories and home gadgets. If you
          have any questions or feedback, please feel free to reach out to us{" "}
          <Link to="/contact" className="text-blue-500 ml-1 hover:underline">
            here
          </Link>
          .
        </p>
        <p className="text-xl font-semibold text-center text-primary-red mb-6">
          Happy Trading! <br /> The TechTrade Team
        </p>
      </div>
    </section>
  );
};

export default About;
