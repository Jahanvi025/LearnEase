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
      <footer className="bg-neutral-950  relative bottom-0">
        <div className="container mx-auto py-8">
          <div className="flex justify-between flex-col md:flex-row items-center md:items-start md:gap-[5rem] text-left">
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <div className="flex flex-row gap-3">
                <img src={logo} alt="footer_logo" className="w-[3rem]" />{" "}
                <h1 className="text-2xl mt-2 text-white">LearnHub</h1>
              </div>
              <p className="text-[15px] font-medium text-[#848383]">
              Elevate your knowledge and skills with our diverse range of courses,
              designed to help you achieve your educational and career goals.
              </p>
              
              <div className="flex gap-7 text-[18px] text-[#848383] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl  p-2 rounded-full backgroundgrad2 hover:bg-[#ff0366] text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#848383]">
              Privacy Policy | © {new Date().getFullYear()} LearnHub
              <br />
              Powered by LearnHub Team 
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-5 relative">
              <p className="text-[22px] font-bold text-white footer-main">
                Company
              </p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] backgroundgrad2"></span>

              <Link
                to="/"
                className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#848383] text-font font-medium hover:font-bold"
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#848383] text-font font-medium hover:font-bold"
              >
                Courses
              </Link>
              <Link
                to="/services"
                className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#848383] text-font font-medium hover:font-bold"
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#848383] text-font font-medium hover:font-bold"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#848383] text-font font-medium hover:font-bold"
              >
                About Us
              </Link>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-5 relative">
              <p className="text-[22px] font-bold text-white footer-main">
                Terms
              </p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] backgroundgrad2"></span>

              <p className="text-[16px] text-font text-[#848383] font-medium">
                Privacy policy
              </p>
              <p className="text-[16px] text-font text-[#848383] font-medium">
                Cookie Settings
              </p>
              <p className="text-[16px] text-font text-[#848383] font-medium">Sitemap</p>
              <p className="text-[16px] text-font text-[#848383] font-medium ">
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
