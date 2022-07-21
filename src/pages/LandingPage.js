import React from "react";
import bg_image from "./../material/bg-image.jpg";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="h-screen w-full flex flex-col bg-secondary">
      <Navbar />

      <img
        className="h-2/3 w-fit object-cover absolute"
        src={bg_image}
        alt="bg_image"
      />
      <div>
        <h1>hello world</h1>
      </div>
    </div>
  );
}

export default LandingPage;
