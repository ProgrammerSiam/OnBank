import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  let Links = [
    { name: "Features", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Learn", link: "/" },
    { name: "Resource", link: "/" },
  ];

  let [open, setOpen] = useState(false);
  let [login, isLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <header className="fixed top-0 left-0 z-10 w-full px-3 py-3 bg-white shadow-sm">
      <motion.div className="progress-bar" style={{ scaleX }} />

      <div className="flex items-center justify-between ">
        <div className="items-center lg:flex gap-x-20 md:flex md:px-5 sm:px-3">
          {/* title */}
          <div className="">
            <h2 className="text-4xl font-bold text-purple">
              OnBank<span className="">.</span>
            </h2>
          </div>

          {/* nev item */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "right-10" : "left-[-990px] "
            }`}
          >
            {Links.map((link) => (
              <ul key={link.name} className="">
                <li className="flex items-center font-medium md:ml-5 md:my-0 my-7 gap-x-1">
                  {link.name}
                  <FiChevronDown />
                </li>
              </ul>
            ))}
          </ul>
        </div>

        {/* bar button */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute text-3xl cursor-pointer right-8 top-6 md:hidden"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </div>

        {/* button */}
        <div className="items-center hidden lg:flex gap-x-3">
          <button className="font-medium">Login</button>
          <button className="px-5 py-3 font-semibold text-white duration-300 rounded-full hover:bg-gradient-to-r from-violet-400 to-indigo-500 bg-purple">
            get started
          </button>
        </div>
        <div
          className={` z-40 right-0 absolute ${
            open ? "h-screen w-screen" : "h-0"
          }`}
          onClick={() => setOpen(false)}
        />
      </div>
    </header>
  );
}
