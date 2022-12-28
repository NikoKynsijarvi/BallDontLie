import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeHomeaverageChart } from "../reducers/settings";

function Toggle() {
  const settings = useSelector((state) => state.settings);
  const [enabled, setEnabled] = useState(
    settings.homeScreenAverageChart === "ft" ? false : true
  );

  const dispatch = useDispatch();

  const handleChange = () => {
    var type = enabled ? "ft" : "3p";
    dispatch(ChangeHomeaverageChart(type));
    setEnabled(!enabled);
  };
  return (
    <div className="relative w-2/3 md:w-1/4 flex flex-row items-center justify-evenly  overflow-hidden">
      <span className={`${enabled ? "text-white" : "text-secondary"}`}>FT</span>
      <div className="flex">
        <label className="inline-flex relative items-center  cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly={true}
          />
          <div
            onClick={() => {
              handleChange();
            }}
            className="w-11 h-6 bg-secondary rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-500"
          ></div>
        </label>
      </div>
      <span className={`${enabled ? "text-violet-500" : "text-white"}`}>
        3p
      </span>
    </div>
  );
}

function Settings() {
  return (
    <div className="bg-darkprimary w-4/5 h-5/6 md:h-4/5 rounded-md flex justify-center items-center flex-col text-white gap-6">
      <div className="flex items-center flex-col justify-center w-full gap-2 text-white">
        <h1>Homescreen chart type</h1>
        <Toggle />
      </div>
    </div>
  );
}

export default Settings;
