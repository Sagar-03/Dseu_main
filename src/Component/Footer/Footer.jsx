import React from "react";
import Vector from "../../assets/DSEULogo/Vector.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="bg-white text-black py-8 border-t-4 border-gray-300 shadow-md"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-start space-y-8 md:space-y-0">
        {/* Logo and Address Section */}
        <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src={Vector}
              alt="DSEU Logo"
              className="mb-4 md:mb-0 w-50 h-20"
            />
            <div className="ml-4 mt-2 flex flex-col justify-center">
              
              <p
                className="text-lg font-semibold text-center md:text-left"
                style={{ color: "#005CB9" }}
              >
                Delhi Skill and Entrepreneurship University
              </p>
            </div>
          </div>
          <p className="text-sm leading-5 mt-8">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="mr-2"
              style={{ color: "#005CB9" }}
            />
            <span className="text-black">
              G/Floor, Delhi Skill and Entrepreneurship University,
              <br />
              Sector-9, Dwarka, New Delhi- 110077
            </span>
          </p>
          <p className="mt-4 text-sm">
            <FontAwesomeIcon
              icon={faPhone}
              className="mr-2"
              style={{ color: "#005CB9" }}
            />
            011-2659-7135
            <br />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-2"
              style={{ color: "#005CB9" }}
            />
            helpdesk@dseu.ac.in
            <br />
            
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-8">
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#1DA1F2", fontSize: "28px" }}
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#0077B5", fontSize: "28px" }}
              />
            </a>
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#4267B2", fontSize: "28px" }}
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pl-4">
          <h3 className="text-lg font-semibold border-b-2 border-orange-400 inline-block mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-600">
                Departments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Centres & CoEs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Schools
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Anti-Sexual Harassment Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Right to Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Office of Career Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800">
                Commuinication Directory
              </a>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold border-b-2 border-orange-400 inline-block mb-4">
            Explore
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-600">
                Rules
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Campus Life
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Institute Newsletter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Educational Programmes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                PhD Seminar
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Climate Action Plan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
