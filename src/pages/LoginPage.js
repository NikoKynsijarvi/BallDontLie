import React from "react";
import Navbar from "../components/Navbar";
import login_bg from "./../material/sign-in-bg-horizontal.jpg";

function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="flex w-screen h-screen justify-center items-center">
        <img
          src={login_bg}
          className="w-screen h-screen object-cover absolute"
          alt="bg"
        />
        <div className="mt-11 flex h-5/6 w-5/6 sm:w-2/3 sm:h-4/6 bg-white z-20 rounded-lg shadow-2xl "></div>
      </div>
    </div>
  );
}

export default LoginPage;
