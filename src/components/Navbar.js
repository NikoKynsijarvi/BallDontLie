import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute bg-primary">
      <h1 className="text-lg font-medium text-secondary">LOGO HERE</h1>
      <div className="flex gap-x-2">
        <button className="bg-secondary px-6 py-2 rounded cursor-pointer text-white shadow-2xl hover:bg-violet-500">
          Log in
        </button>
        <button className="bg-secondary px-6 py-2 rounded cursor-pointer text-white shadow-2xl hover:bg-violet-500">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
