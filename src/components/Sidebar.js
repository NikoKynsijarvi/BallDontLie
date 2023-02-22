import React from "react";
import { FaChartLine, FaUser, FaHome, FaHistory, FaMap } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { logoutUser } from "../reducers/userReducer";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    window.localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  const chooseActive = (text) => {
    return window.location.href.toLowerCase().includes(text.toLowerCase());
  };

  return (
    <div className="flex z-50">
      <div className="flex flex-col h-screen p-3 bg-darkprimary text-white shadow md:w-52 w-32">
        <div className="space-y-3">
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li
                className={
                  chooseActive("home")
                    ? "rounded-sm w-full  bg-secondary"
                    : "rounded-sm w-full  hover:bg-violet-500"
                }
              >
                <Link
                  to={"/home"}
                  className="flex items-center p-2 space-x-3 rounded-md "
                >
                  <FaHome size={28} />
                  <p>Home</p>
                </Link>
              </li>
              <li
                className={
                  chooseActive("statistics")
                    ? "rounded-sm w-full  bg-secondary"
                    : "rounded-sm w-full  hover:bg-violet-500"
                }
              >
                <Link
                  to={"/statistics"}
                  className="flex items-center p-2 space-x-3 rounded-md "
                >
                  <FaChartLine size={28} />
                  <p>Statistics</p>
                </Link>
              </li>
              <li
                className={
                  chooseActive("history")
                    ? "rounded-sm w-full  bg-secondary"
                    : "rounded-sm w-full  hover:bg-violet-500"
                }
              >
                <Link
                  to={"/history"}
                  className="flex items-center p-2 space-x-3 rounded-md "
                >
                  <FaHistory size={28} />
                  <p>History</p>
                </Link>
              </li>
              <li
                className={
                  chooseActive("profile")
                    ? "rounded-sm w-full  bg-secondary"
                    : "rounded-sm w-full  hover:bg-violet-500"
                }
              >
                <Link
                  to={"/profile"}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <FaUser size={28} />
                  <p>Profile</p>
                </Link>
              </li>
              <li
                className={
                  chooseActive("/map")
                    ? "rounded-sm w-full  bg-secondary"
                    : "rounded-sm w-full  hover:bg-violet-500"
                }
              >
                <Link
                  to={"/map"}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <FaMap size={28} />
                  <p>Map</p>
                </Link>
              </li>
              <li
                className={
                  chooseActive("settings")
                    ? "rounded-sm w-full  bg-secondary"
                    : "rounded-sm w-full  hover:bg-violet-500"
                }
              >
                <Link
                  to={"/settings"}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <FiSettings size={28} />
                  <p>Settings</p>
                </Link>
              </li>
              <li
                className={
                  chooseActive("logout")
                    ? "rounded-sm w-full  bg-secondary"
                    : "rounded-sm w-full  hover:bg-violet-500"
                }
              >
                <div
                  onClick={(e) => logout(e)}
                  className="flex items-center p-2 space-x-3 rounded-md cursor-pointer"
                >
                  <BiLogOut size={28} />
                  <p>Logout</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <h2 className="text-lg text-small sm:font-medium text-primary cursor-pointer  hover:text-violet-500   w-full">
          BALL DONT LIE
        </h2>
      </div>
    </div>
  );
}

export default Sidebar;
