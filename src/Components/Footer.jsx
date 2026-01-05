import React from "react";
import { MdEmail } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import xIcon from "../assets/icons8-x-50.png";
import linkedinIcon from "../assets/icons8-linkedin-50.png";
import facebookIcon from "../assets/icons8-facebook-50.png";
import intagramIcon from "../assets/icons8-instagram-50.png";
import Logo from "./Logo";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-base-100 border-t border-base-200 mt-10 transition-colors duration-500">
      <footer className="footer max-w-7xl mx-auto text-base-content p-10 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <aside className="space-y-6">
          <Logo />
          <p className="text-base-content/60 max-w-xs leading-relaxed text-base font-medium">
            “Connecting communities through shared food. Together, we reduce
            waste and help others eat better.”
          </p>
        </aside>

        <nav>
          <h6 className="footer-title text-base-content opacity-100 font-bold mb-6 uppercase tracking-[0.15em] text-xs">
            Support
          </h6>
          <div className="flex flex-col gap-3">
            <a className="link link-hover text-base-content/70 hover:text-green-600 transition-all font-medium">
              Help Center
            </a>
            <a className="link link-hover text-base-content/70 hover:text-green-600 transition-all font-medium">
              FAQs
            </a>
            <a className="link link-hover text-base-content/70 hover:text-green-600 transition-all font-medium">
              Feedback
            </a>
            <a className="link link-hover text-base-content/70 hover:text-green-600 transition-all font-medium">
              Advertisement
            </a>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title text-base-content opacity-100 font-bold mb-6 uppercase tracking-[0.15em] text-xs">
            Quick Links
          </h6>
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="link link-hover text-base-content/70 hover:text-green-600 transition-all font-medium"
            >
              Home
            </Link>
            <Link
              to="/available-foods"
              className="link link-hover text-base-content/70 hover:text-green-600 transition-all font-medium"
            >
              Available Foods
            </Link>
            <Link
              to="/about"
              className="link link-hover text-base-content/70 hover:text-green-600 transition-all font-medium"
            >
              About us
            </Link>
            <Link
              to="/contact"
              className="link link-hover text-base-content/70 hover:text-green-600 transition-all font-medium"
            >
              Contact
            </Link>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title text-base-content opacity-100 font-bold mb-6 uppercase tracking-[0.15em] text-xs">
            Get in Touch
          </h6>
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-base-content/70 font-medium group cursor-pointer">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 group-hover:scale-110 transition-transform">
                <MdEmail size={18} />
              </div>
              support@foodshare.com
            </p>
            <p className="flex items-center gap-3 text-base-content/70 font-medium group cursor-pointer">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 group-hover:scale-110 transition-transform">
                <PiPhoneCall size={18} />
              </div>
              +880 175 5664564
            </p>
            <div className="flex gap-3 mt-6">
              {[xIcon, linkedinIcon, facebookIcon, intagramIcon].map(
                (icon, index) => (
                  <a
                    key={index}
                    className="w-10 h-10 rounded-xl border border-base-200 flex items-center justify-center hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-200 transition-all cursor-pointer group"
                  >
                    <img
                      src={icon}
                      alt="Social"
                      className="w-5 h-5 group-hover:scale-110 transition-transform dark:invert-[0.2]"
                    />
                  </a>
                )
              )}
            </div>
          </div>
        </nav>
      </footer>

      {/* Copyright Bar */}
      <div className="border-t border-base-200 bg-base-200/30">
        <div className="max-w-7xl mx-auto px-10 py-8 text-center md:flex md:justify-between items-center text-base-content/50 text-sm font-medium">
          <p className="flex items-center justify-center gap-1">
            © 2026 <span className="font-black text-base-content">Food</span>
            <span className="font-black text-green-600">Share</span> —
            <span className="hidden sm:inline">
              {" "}
              Sharing Food, Spreading Kindness.
            </span>
          </p>
          <p className="mt-2 md:mt-0 opacity-60 tracking-tight">
            Handcrafted with love for the community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
