import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeHomeaverageChart,
  ChangeHomedisplayLast,
} from "../reducers/settings";

function RadioButtonGroup() {
  const displayLast = useSelector(
    (state) => state.settings.homeScreenDisplayLast
  );

  const dispatch = useDispatch();

  console.log(displayLast);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(ChangeHomedisplayLast(value));
  };

  return (
    <div className="flex items-center flex-col justify-center w-full h-1/3 gap-4 text-white">
      <h1>Homescreen display last</h1>
      <div>
        <div className="form-check flex items-center">
          <input
            className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-white checked:bg-secondary checked:border-violet-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value="5"
            defaultChecked={displayLast === 5 ? true : false}
            onChange={(e) => handleChange(e)}
          />
          <label
            className=" inline-block text-white"
            htmlFor="flexRadioDefault1"
          >
            5
          </label>
        </div>
        <div className="form-check flex items-center">
          <input
            className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-white checked:bg-secondary checked:border-violet-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value="10"
            defaultChecked={displayLast === 10 ? true : false}
            onChange={(e) => handleChange(e)}
          />
          <label
            className="form-check-label inline-block text-white"
            htmlFor="flexRadioDefault2"
          >
            10
          </label>
        </div>
        <div className="form-check flex items-center">
          <input
            className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-white checked:bg-secondary checked:border-violet-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value="15"
            defaultChecked={displayLast === 15 ? true : false}
            onChange={(e) => handleChange(e)}
          />
          <label
            className="form-check-label inline-block text-white"
            htmlFor="flexRadioDefault2"
          >
            15
          </label>
        </div>
      </div>
    </div>
  );
}

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
      <RadioButtonGroup />
    </div>
  );
}

export default Settings;
