import React, { useState } from "react";
import img1 from "../assets/img3.jpg";
import { useNavigate } from "react-router-dom";
import LoginModel from "./LoginModel";

export const Hero = () => {
  const [showLoginModel, setShowLoginModel] = useState(false);
  const navigate = useNavigate();

  const onCancel = () => {
    setShowLoginModel(false);
  };

  return (
    <section className="text-gray-600 dark:text-gray-300 body-font transition-colors duration-300 p-10">
      <div className="container mx-auto flex px-5 pt-10 pb-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-gray-900 dark:text-white">
            Sell Your Tech <br />
            <span className="bg-gradient-to-br from-primary-red  to-red-500 text-transparent bg-clip-text">
              Reap the Rewards!
            </span>
          </h1>
          <p className="mb-8 leading-relaxed text-lg pr-[4rem] text-justify">
            Sell your used gadgets quickly and securely with SellSmart. Get the
            best value for your phones, tablets, laptops, and more, all from the
            comfort of your home. Hassle-free process, fast payouts, and no
            hidden fees!
          </p>
          <button
            onClick={() => setShowLoginModel(true)}
            className="inline-flex text-white bg-primary-red border-0 py-3 px-8 focus:outline-none hover:bg-red-600 rounded-md text-xl transition-colors duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            alt="hero"
            src={img1}
          />
        </div>
      </div>
      <LoginModel show={showLoginModel} onCancel={onCancel} />
    </section>
  );
};
