import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../reducers/userReducer";

const UserNotLoggedIn = () => {
  return (
    <div className="flex gap-x-2">
      <Link to="/login">
        <button className="bg-primary px-6 py-2 rounded cursor-pointer text-white shadow-2xl hover:bg-violet-500">
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button className="bg-primary px-6 py-2 rounded cursor-pointer text-white shadow-2xl hover:bg-violet-500">
          Sign up
        </button>
      </Link>
    </div>
  );
};
const UserLoggedIn = () => {
  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <div className="flex gap-x-2">
      <Link to="/login">
        <button
          onClick={(e) => logout(e)}
          className="bg-primary px-6 py-2 rounded cursor-pointer text-white shadow-2xl hover:bg-violet-500"
        >
          Log out
        </button>
      </Link>
    </div>
  );
};

function Navbar() {
  const user = useSelector((state) => state.user);
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full">
      <Link to="/">
        <h1 className="text-lg text-small sm:font-medium text-primary cursor-pointer  hover:text-violet-500">
          BALL DONT LIE
        </h1>
      </Link>
      <UserNotLoggedIn />
    </div>
  );
}

export default Navbar;
