import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
import { IoMenuSharp, IoClose } from "react-icons/io5";
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {/* large display */}
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

        <a
          href="https://github.com/ProgrammingHero1?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hidden lg:flex justify-center items-center gap-2 lg:gap-3 px-3 py-2 rounded-md text-white bg-linear-to-r from-[#6D36E5] to-[#6D36E5]/80 cursor-pointer hover:scale-105 active:scale-100 transition-all duration-200">
            <FaGithub />
            <p>Contribute</p>
          </button>
        </a>
        <div
          onClick={() => setShow(prev => !prev)}
          className="lg:hidden text-xl text-[#6D36E5]"
        >
          <IoMenuSharp />
        </div>
      </section>
      {/* small display */}
      {show && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 px-5 py-6">
          {/* TOP BAR */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-[#6D36E5] font-semibold text-lg">HERO.IO</h1>

            <div
              onClick={() => setShow(false)}
              className="text-3xl cursor-pointer text-[#6D36E5]"
            >
              <IoClose />
            </div>
          </div>

          {/* ROUTES */}
          <div className="flex flex-col gap-6 text-lg font-semibold">
            <NavLink
              to="/"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#6D36E5] underline underline-offset-8"
                  : "text-gray-700"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/apps"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#6D36E5] underline underline-offset-8"
                  : "text-gray-700"
              }
            >
              Apps
            </NavLink>

            <NavLink
              to="/installation"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#6D36E5] underline underline-offset-8"
                  : "text-gray-700"
              }
            >
              Installation
            </NavLink>
          </div>

          {/* BUTTON */}
          <div className="mt-8">
            <a
              href="https://github.com/ProgrammingHero1?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-white bg-linear-to-r from-[#6D36E5] to-[#6D36E5]/80 w-full">
                <FaGithub />
                Contribute
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
