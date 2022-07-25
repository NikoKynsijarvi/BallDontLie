import React from "react";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="h-screen w-screen  bg-background">
      <Navbar />
      <div className=" flex flex-col sm:flex-row w-full h-full items-center">
        <div className="w-2/3 flex justify-center h-1/2  sm:w-1/2  sm:h-3/5 ">
          <h1 className=" text-6xl sm:text-7xl text-white font-bold underline decoration-primary hover:decoration-secondary">
            Ball Dont Lie
          </h1>
        </div>
        <div className="w-2/3 h-2/4 flex sm:w-1/3 bg-darkprimary sm:h-3/5 rounded-md rotate-12 justify-center items-center"></div>
      </div>
    </div>
  );
}

export default LandingPage;
