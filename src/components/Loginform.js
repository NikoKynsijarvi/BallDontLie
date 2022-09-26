import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./../reducers/userReducer";

function Loginform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username.length < 5 || password.length < 5) return;
    console.log(username);
    const user = { password: password, username: username };
    dispatch(setUser(user));
  };

  return (
    <div className="-rotate-6">
      <div className="mb-6">
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-background bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Username"
          onChange={(e) => handleUsernameChange(e)}
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-background bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Password"
          onChange={(e) => handlePasswordChange(e)}
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handleLogin()}
          className="bg-primary px-6 py-2 rounded cursor-pointer text-white shadow-2xl hover:bg-violet-500"
        >
          Login
        </button>
        <button className="bg-primary px-6 py-2 rounded cursor-pointer text-white shadow-2xl hover:bg-violet-500">
          Forgot password?
        </button>
      </div>
    </div>
  );
}

export default Loginform;
