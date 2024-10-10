import React from "react";
import { Smartphone, Laptop, Watch } from "lucide-react";

const devices = [
  {
    icon: Smartphone,
    title: "Smartphones",
    description:
      "Sell your smartphones from leading brands like Apple, Samsung, and more.",
  },
  {
    icon: Laptop,
    title: "PCs",
    description:
      "Sell your desktop computers and laptops from brands like Dell, HP, Lenovo, and Apple.",
  },
  {
    icon: Watch,
    title: "Smartwatches",
    description:
      "Sell your smartwatches from Apple, Samsung, Fitbit, and other top brands.",
  },
];

export const DeviceCards = () => {
  return (
    <div className="w-full mt-10 mx-auto py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 p-10">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary-red dark:text-primary-red">
        What You Can Sell
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {devices.map((device, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white dark:bg-gray-800 border-2 border-red-100 dark:border-primary-red hover:border-primary-red dark:hover:border-red-400 transition-all duration-300 rounded-lg p-8 shadow-lg hover:shadow-xl w-full h-full flex flex-col items-center justify-center transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-red-50 dark:bg-primary-red rounded-full flex items-center justify-center mb-6">
                <device.icon className="w-10 h-10 text-primary-red dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {device.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {device.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
