import React from "react";
import person1 from "../assets/person1.jpeg";
import person2 from "../assets/person2.jpeg";
import person3 from "../assets/person3.jpeg";

const testimonials = [
  {
    image: person1,
    text: "SellSmart made selling my old smartphone incredibly easy. Within minutes, I had a competitive offer, and the entire process was seamless. I appreciate the transparency and fast payment! Definitely recommend it to anyone looking to sell their devices.",
    name: "HOLDEN CAULFIELD",
  },
  {
    image: person2,
    text: "I was skeptical about selling my laptop online, but SellSmart exceeded my expectations. The platform was user-friendly, and the customer service was outstanding. I got the best price for my device without any hidden fees. A hassle-free experience!",
    name: "ALPER KAMU",
  },
  {
    image: person3,
    text: "I sold both my tablet and smartwatch through SellSmart, and I couldn't be happier. The process was fast, and the team kept me updated every step of the way. It's the most convenient and secure way to sell your electronics!",
    name: "HENRY LETHAM",
  },
];

export const Testimonial = () => {
  return (
    <section className="text-gray-600 dark:text-gray-300 body-font transition-colors duration-300 p-10">
      <h1 className="text-3xl font-bold text-center py-8 text-primary-red dark:text-red-400">
        Our Users Speak for Us
      </h1>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center bg-zinc-50 dark:bg-gray-800 p-8 rounded-lg border-2 border-red-200 dark:border-red-800 hover:border-primary-red dark:hover:border-red-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={testimonial.image}
                />
                <p className="leading-relaxed">{testimonial.text}</p>
                <span className="inline-block h-1 w-10 rounded bg-primary-red mt-6 mb-4"></span>
                <h2 className="text-gray-900 dark:text-white font-medium title-font tracking-wider text-sm">
                  {testimonial.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
