import React, { useState } from "react";

function ChooseType() {
  const [type, setType] = useState(null);

  console.log(type);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value === type) {
      setType(null);
      return;
    }
    setType(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <h1>Type</h1>
      <div className="flex flex-row w-full gap-10">
        <button
          className={
            type === "ft"
              ? "h-10 w-14 rounded-md bg-green-500 cursor-pointer"
              : "h-10 w-14 rounded-md bg-primary cursor-pointer"
          }
          value="ft"
          onClick={(e) => handleChange(e)}
        >
          Ft
        </button>
        <button
          className={
            type === "3p"
              ? "h-10 w-14 rounded-md bg-green-500 cursor-pointer"
              : "h-10 w-14 rounded-md bg-primary cursor-pointer"
          }
          value="3p"
          onClick={(e) => handleChange(e)}
        >
          3p
        </button>
      </div>
    </div>
  );
}

function Addnewdialog() {
  return (
    <div className="bg-darkprimary h-full flex items-center justify-center w-full text-white flex-col">
      <ChooseType />
      <h1>Shots made</h1>
      <h1>Shots attempted</h1>
      <button className="w-1/4 h-1/6 bg-secondary rounded-md">Add</button>
    </div>
  );
}

export default Addnewdialog;
