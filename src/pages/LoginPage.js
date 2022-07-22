import React from "react";
import Navbar from "../components/Navbar";

function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="mt-11 flex h-5/6 w-5/6 sm:w-2/3 sm:h-4/6 bg-darkprimary z-20 rounded-lg shadow-2xl "></div>
      </div>
    </div>
  );
}

export default LoginPage;
