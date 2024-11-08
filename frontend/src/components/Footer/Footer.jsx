import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import logo from "../../Assets/images/infinity (2).png";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];

  return (
    <>
      <footer className="bg-neutral-950 relative bottom-0 w-full px-10">
        <div className="container mx-auto py-8 px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-[5rem] text-left">
            {/* Left Section */}
            <div className="flex flex-col w-full md:w-1/2 gap-8">
              <div className="flex justify-center md:justify-start gap-3">
                <img src={logo} alt="footer_logo" className="w-[3rem]" />
                <h1 className="text-2xl mt-2 text-white">LearnHub</h1>
              </div>
              <p className="text-[15px] font-medium text-[#848383] text-center md:text-left">
                Elevate your knowledge and skills with our diverse range of
                courses, designed to help you achieve your educational and
                career goals.
              </p>

              {/* Social Icons */}
              <div className="flex gap-7 text-[18px] text-[#848383] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl p-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-500 text-white transition-all duration-300"
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>

              {/* Copyright */}
              <p className="text-[16px] font-medium text-[#848383] text-center md:text-left">
                Privacy Policy | © {new Date().getFullYear()} LearnHub
                <br />
                Powered by LearnHub Team
              </p>
            </div>

            {/* Middle Section */}
            <div className="flex flex-col gap-5 relative text-center md:text-left">
              <p className="text-[22px] font-bold text-white footer-main">
                Company
              </p>
              <span className="hidden md:block absolute top-[33px] w-[7rem] h-[4px] bg-gradient-to-r from-orange-600 to-orange-500"></span>

              <Link
                to="/"
                className="text-[16px] hover:text-orange-500 cursor-pointer text-[#848383] text-font font-medium hover:font-bold transition-all duration-300"
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="text-[16px] hover:text-orange-500 cursor-pointer text-[#848383] text-font font-medium hover:font-bold transition-all duration-300"
              >
                Courses
              </Link>
              <Link
                to="/services"
                className="text-[16px] hover:text-orange-500 cursor-pointer text-[#848383] text-font font-medium hover:font-bold transition-all duration-300"
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className="text-[16px] hover:text-orange-500 cursor-pointer text-[#848383] text-font font-medium hover:font-bold transition-all duration-300"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-[16px] hover:text-orange-500 cursor-pointer text-[#848383] text-font font-medium hover:font-bold transition-all duration-300"
              >
                About Us
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-5 relative text-center md:text-left">
              <p className="text-[22px] font-bold text-white footer-main">
                Terms
              </p>
              <span className="hidden md:block absolute top-[33px] w-[7rem] h-[4px] bg-gradient-to-r from-orange-600 to-orange-500"></span>

              <p className="text-[16px] text-font text-[#848383] font-medium">
                Privacy policy
              </p>
              <p className="text-[16px] text-font text-[#848383] font-medium">
                Cookie Settings
              </p>
              <p className="text-[16px] text-font text-[#848383] font-medium">
                Sitemap
              </p>
              <p className="text-[16px] text-font text-[#848383] font-medium">
                Accessibility Statement
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
