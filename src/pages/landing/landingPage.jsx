import React from "react";
import Contents from "./Contents";

const landingPage = () => {
  const NavLinks = [
    { path: "howitworks", label: "How It Works" },
    { path: "about", label: "About" },
    { path: "contact", label: "Contact" },
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 transition-all duration-500 ease-in-out">
      {/* Navigation Bar */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-semibold font-ubuntu tracking-wide">
          trckr.
        </h1>
        {/* Links */}
        <ul className="flex items-center gap-8 font-medium text-black">
          {NavLinks.map(({ label }) => (
            <li
              key={label}
              className="relative cursor-pointer text-base after:absolute after:left-0 after:bottom-0
                 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500
                 hover:after:w-full"
            >
              {label}
            </li>
          ))}
        </ul>
        {/* Get Started */}
        <button className="bg-black px-4 py-2 rounded-md text-white font-medium text-base">
          Get Started
        </button>
      </div>
      {/* Contents */}
      <div className="">
        <Contents />
      </div>
      {/* Footer */}
      <div className=""></div>
    </div>
  );
};

export default landingPage;
