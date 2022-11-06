import React, { useState } from "react";
import userService from "../services/users";

const ErrorText = () => {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <span className="font-medium">Something went wrong!</span>
    </div>
  );
};

const CreationSucceeded = () => {
  return (
    <div
      className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
      role="alert"
    >
      <span className="font-medium">User created!</span>
    </div>
  );
};

function Signupform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleCreate = (e) => {
    if (!password === repeatPassword) {
      return;
    }
    if (username.length < 5) {
      return;
    }
    e.preventDefault();
    const newUser = {
      username,
      password,
    };
    userService
      .createUser(newUser)
      .then(() => {
        console.log("Succeeded");
        if (error) {
          setError(false);
        }
        setSucceeded(true);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        if (succeeded) {
          setSucceeded(false);
        }
      });

    setUsername("");
    setRepeatPassword("");
    setPassword("");
  };

  return (
    <div className="-rotate-6">
      <div className="mb-6">
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-background bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Username"
          value={username}
          onChange={(e) => handleUsernameChange(e)}
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-background bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Password"
          value={password}
          onChange={(e) => handlePasswordChange(e)}
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-background bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Repeat password"
          value={repeatPassword}
          onChange={(e) => handleRepeatPassword(e)}
        />
      </div>
      <div className="flex gap-2 mb-6">
        <button
          onClick={(e) => handleCreate(e)}
          className="bg-primary px-6 py-2 rounded cursor-pointer text-white shadow-2xl hover:bg-violet-500"
        >
          Create
        </button>
        <button className="bg-primary px-6 py-2 rounded cursor-pointer text-white shadow-2xl hover:bg-violet-500 w-full">
          Cancel
        </button>
      </div>
      {error ? ErrorText() : null}
      {succeeded ? CreationSucceeded() : null}
    </div>
  );
}

export default Signupform;
