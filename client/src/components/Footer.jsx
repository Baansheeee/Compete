import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div className="space-y-8">
            <Link to="/" className="flex items-center">
              <GrTechnology className="w-8 h-8" />
              <span className="ml-3 text-xl font-bold text-red-500 dark:text-red-600">
                TechSwap
              </span>
            </Link>
            <p className="text-base max-w-xs">
              Turn your devices into cash quickly and securely with TechSwap.
            </p>
          </div>

          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/about"
                    className="text-base hover:text-primary-red dark:hover:text-red-400"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-base hover:text-primary-red dark:hover:text-red-400"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-base hover:text-primary-red dark:hover:text-red-400"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/privacy"
                    className="text-base hover:text-primary-red dark:hover:text-red-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-base hover:text-primary-red dark:hover:text-red-400"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/press"
                    className="text-base hover:text-primary-red dark:hover:text-red-400"
                  >
                    Press kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <span className="sr-only">YouTube</span>
                <FaYoutube className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} TechSwap, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
