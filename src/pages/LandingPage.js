import React from "react";
import Navbar from "../components/Navbar";
import LandingPageHeading from "../components/utils/LandingPageHeading";

function LandingPage() {
  return (
    <div className="flex flex-col gap-1">
      <Navbar />
      <LandingPageHeading />
    </div>
  );
}

export default LandingPage;
