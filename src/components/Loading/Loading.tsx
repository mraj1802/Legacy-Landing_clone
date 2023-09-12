import React from "react";
import Image from "next/image";
import logo from "/public/short-logo.svg";
const Loading = () => {
  return (
    <div id="motion" className="loader">
      <div className="loader-logo">
        <Image alt="bg-logo" src={logo} width={90} priority />
      </div>
    </div>
  );
};

export default Loading;
