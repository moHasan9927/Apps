import React from "react";
import { GrAppleAppStore } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import hero from "../assets/hero.png";
import TrendingApp from "../components/TrendingApp";

const Home = () => {
  return (
    <div>
      {/* banner section */}
      <section className="bg-linear-to-r from-[#6D36E5] to-[#8B5CF6] text-white py-10 md:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-center text-xl md:text-3xl lg:text-4xl font-semibold mb-8 md:mb-12">
            Trusted By Millions, Built For You
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-sm md:text-base text-white/80">
                Total Downloads
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
                29.6M
              </h2>
              <p className="text-xs md:text-sm text-white/70 mt-1">
                21% More Than Last Month
              </p>
            </div>

            <div>
              <p className="text-sm md:text-base text-white/80">
                Total Reviews
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
                906K
              </h2>
              <p className="text-xs md:text-sm text-white/70 mt-1">
                46% More Than Last Month
              </p>
            </div>

            <div>
              <p className="text-sm md:text-base text-white/80">Active Apps</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
                132+
              </h2>
              <p className="text-xs md:text-sm text-white/70 mt-1">
                31 More Will Launch
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* hero section */}
      <section className="w-full bg-gray-100 pt-12 lg:pt-20 pb-0">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
            We Build <span className="text-purple-600">Productive</span> Apps
          </h1>

          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3">
            {/* Google Play */}
            <a
              href="https://play.google.com/store/games?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-white shadow hover:shadow-md cursor-pointer hover:scale-105 active:scale-100 transition-all duration-200"
            >
              <IoLogoGooglePlaystore className="text-sky-500 text-lg" />
              <span className="text-sm font-medium">Google Play</span>
            </a>

            {/* App Store */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-white shadow hover:shadow-md cursor-pointer hover:scale-105 active:scale-100 transition-all duration-200"
            >
              <GrAppleAppStore className="text-sky-500 text-lg" />
              <span className="text-sm font-medium">App Store</span>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 flex justify-center px-4">
          <img
            src={hero}
            alt="App preview"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl object-contain"
          />
        </div>
      </section>
      {/* trending app section */}
      <TrendingApp></TrendingApp>
    </div>
  );
};

export default Home;
