import React from "react";
import { Link } from "react-router-dom";

const SelectDevice = () => {
  const categories = ["SmartPhone", "Tablet", "Laptop", "Other"];

  return (
    <div className="h-[70vh] flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          What do you want to sell?
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/form/${category.toLowerCase()}`}
              className="select-btn"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectDevice;
