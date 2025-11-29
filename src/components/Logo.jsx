import React from "react";
import logoIcon from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end ">
      <img src={logoIcon} alt=""/>
      <p className="text-3xl font-black -mb-1 -ml-4">ZapShift</p>
    </div>
  );
};

export default Logo;
