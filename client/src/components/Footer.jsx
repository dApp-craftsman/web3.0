import React from "react";

import logo from "../../images/logo.png";
const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4"></div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-small text-center">Come join us</p>
        <p className="text-white text-small text-center">info@krypt.com</p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-small text-center">@kryptcoins 2022</p>
        <p className="text-white text-small text-center">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
