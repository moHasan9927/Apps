import React from "react";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto flex justify-between items-center py-2 md:py-3 lg:py-4 px-2 lg:px-0">
        <div className="flex justify-center items-center">
          <div>
            <img className="h-10" src={logo} alt="" />
          </div>
          <h1 className="text-[#6D36E5] font-semibold">HERO.IO</h1>
        </div>

        <div className="hidden lg:flex justify-center items-center gap-1 md:gap-2 lg:gap-5 font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#6D36E5] underline underline-offset-8 font-semibold"
                : "text-gray-600 hover:text-[#6D36E5]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              isActive
                ? "text-[#6D36E5] underline underline-offset-8 font-semibold"
                : "text-gray-600 hover:text-[#6D36E5]"
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) =>
              isActive
                ? "text-[#6D36E5] underline underline-offset-8 font-semibold"
                : "text-gray-600 hover:text-[#6D36E5]"
            }
          >
            Installation
          </NavLink>
        </div>

        <button className="flex justify-center items-center gap-2 lg:gap-3 px-3 py-2 rounded-md text-white bg-linear-to-r from-[#6D36E5] to-[#6D36E5]/80 cursor-pointer hover:scale-105 active:scale-100 transition-all duration-200">
          <FaGithub />
          <p>Contribute</p>
        </button>
      </section>
    </div>
  );
};

export default Navbar;
