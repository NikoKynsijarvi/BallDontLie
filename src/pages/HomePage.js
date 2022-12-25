import React from "react";
import Navbar from "./../components/Navbar";
import HomeScreenContainer from "./../components/HomeScreenContainer";
import Sidebar from "../components/Sidebar";

function HomePage() {
  return (
    <div className="h-screen w-screen  bg-background flex flex-row">
      <Sidebar />
      <div className="h-full w-full flex ">
        <HomeScreenContainer />
      </div>
    </div>
  );
}

export default HomePage;
