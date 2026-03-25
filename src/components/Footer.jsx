import React from "react";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#6D36E5] to-[#8B5CF6] text-white mt-10">
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h1 className="text-xl font-semibold">HERO.IO</h1>
            <p className="text-white/80 mt-2 max-w-sm">
              Build productive apps and boost your workflow with modern tools.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-semibold mb-2">Quick Links</h2>
            <a href="/" className="text-white/80 hover:text-white">
              Home
            </a>
            <a href="/apps" className="text-white/80 hover:text-white">
              Apps
            </a>
            <a href="/installation" className="text-white/80 hover:text-white">
              Installation
            </a>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Social</h2>
            <div className="flex gap-4 text-lg">
              <a
                href="https://www.facebook.com/programmingHero/"
                className="hover:scale-110 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/ProgrammingHero"
                className="hover:scale-110 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/ProgrammingHero1?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 my-6"></div>

        <div className="text-center text-white/80 text-sm">
          © 2026 HERO.IO — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
