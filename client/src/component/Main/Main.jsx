import React from "react";
import "../../index.css";
import Image from "../../utils/self-image.jpg";
function Main() {
  return (
    <div className="md:mt-[100px] lg:h-64">
      <div className="md:flex md:flex-col md:justify-center md:items-center lg:flex-row">
      <div className="w-96 h-64 mx-9 md:flex md:justify-center md:items-center">
          <img src={Image} className="md:rounded-full" />
        </div>
        <div className="md:flex md:flex-col md:items-center md:justify-center md:mb-10 md:mt-10 lg:bg-white">
          <h1 className="text-2xl md:my-1">HELLO I'M NIKHIL</h1>
          <p>
            An Web-developer || IPU-Btech Student || FULL-STACK-DEVELOPER
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default Main;
