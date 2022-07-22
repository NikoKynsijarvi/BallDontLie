import React from "react";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="h-screen w-screen  bg-background">
      <Navbar />
      <div className="flex flex-col sm:flex-row w-full h-full items-center">
        <div className="flex w-1/2  h-3/5 justify-center">
          <h1 className="text-7xl text-white font-bold underline decoration-primary hover:decoration-secondary">
            Ball Dont Lie
          </h1>
        </div>
        <div className="flex w-1/2 bg-darkprimary h-3/5 "></div>
      </div>
    </div>
  );
}

export default LandingPage;
