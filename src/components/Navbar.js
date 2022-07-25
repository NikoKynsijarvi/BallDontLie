import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full sm:absolute ">
      <Link to="/">
        <h1 className="text-lg text-small sm:font-medium text-primary cursor-pointer  hover:text-violet-500">
          BALL DONT LIE
        </h1>
      </Link>
      <div className="flex gap-x-2">
        <Link to="/login">
          <button className="bg-primary px-6 py-2 rounded cursor-pointer text-white shadow-2xl hover:bg-violet-500">
            Login
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-primary px-6 py-2 rounded cursor-pointer text-white shadow-2xl hover:bg-violet-500">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
