import React from "react";
import bg_image from "./../material/bg-image.jpg";
import Navbar from "../components/Navbar";
import Infosection from "../components/Infosection";

function LandingPage() {
  return (
    <div className="h-auto md:h-screen w-screen flex flex-col bg-secondary">
      <Navbar />
      <div className="h-full w-full flex flex-col ">
        <div className="col-auto h-2/3">
          <img
            className="h-full w-screen object-cover "
            src={bg_image}
            alt="bg_image"
          />
        </div>
        <Infosection />
      </div>
    </div>
  );
}

export default LandingPage;
