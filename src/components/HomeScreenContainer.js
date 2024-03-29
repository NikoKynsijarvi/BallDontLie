import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { IoMdAdd } from "react-icons/io";
import { useSelector } from "react-redux";
import Addnewdialog from "./Addnewdialog";
import AveragePercentageChart from "./AveragePercentageChart";
import "./../styles.css";

const GameAverages = () => {
  return (
    <div className="h-full w-full flex flex-col items-center ">
      <div className="h-2/3 w-full flex flex-row justify-evenly items-center border-b-4 border-background ">
        <h1 className="text-xl md:text-4xl text-white">0.0 pts</h1>
        <h1 className="text-xl md:text-4xl text-white">0.0 reb</h1>
        <h1 className="text-xl md:text-4xl text-white">0.0 ast</h1>
      </div>
      <div className="h-1/3 w-4/5 flex flex-row justify-evenly items-center">
        <h1 className="text-lg md:text-2xl text-white">0.0 stl</h1>
        <h1 className="text-lg md:text-2xl text-white">0.0 blk</h1>
      </div>
    </div>
  );
};

const ShotPercentage = ({ value }) => {
  return (
    <CircularProgressbar
      className="h-2/3 flex justify-center items-center"
      value={value}
      styles={buildStyles({
        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 0.5,

        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',

        // Colors
        pathColor: "#1FE260",
        textColor: "#ffff",
        trailColor: "#080c24ff",
        backgroundColor: "#3e98c7",
      })}
    />
  );
};

function AddNewDialogButton(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.setFlip((prevState) => !prevState);
  };

  return (
    <div className="w-full h-full flex justify-center items-center text-white flex-col gap-5 ">
      <div
        onClick={(e) => handleClick(e)}
        className="h-1/4 w-1/3 rounded-full bg-primary flex items-center justify-center transform 
                                transition duration-500 hover:scale-110 hover:bg-secondary"
      >
        <IoMdAdd className="h-1/2 w-1/2" />
      </div>

      <h1>Add new</h1>
    </div>
  );
}

function HomeScreenContainer() {
  const [flip, setFlip] = useState(true);

  const shotgroup = useSelector((state) => state.shotgroup);
  const settings = useSelector((state) => state.settings);
  const filtered = shotgroup.filter((a) => a.type === "ft");

  const summMade = filtered.reduce(
    (accumulator, currentValue) => accumulator + currentValue.shotsmade,
    0
  );
  const summAttempts = filtered.reduce(
    (accumulator, currentValue) => accumulator + currentValue.shotsattempted,
    0
  );

  const percentage = (summMade / summAttempts).toFixed(2) * 100;
  return (
    <div className="w-full h-full flex p-3 flex-col gap-5">
      <div className="w-full h-1/2 flex flex-col md:flex-row gap-5 ">
        <div className="flip-card">
          <div className={flip ? "flip-card-inner" : "inner-rotated"}>
            <div className="average-chart-front">
              {flip ? <AveragePercentageChart /> : null}
              <h1 className="text-2xl text-white">
                Last {settings.homeScreenDisplayLast}{" "}
                {settings.homeScreenAverageChart} %
              </h1>
            </div>
            <div className="add-dialog-back">
              <Addnewdialog />
            </div>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 h-full bg-darkprimary flex justify-center items-center rounded-md flex-col gap-3">
          <ShotPercentage value={percentage.toFixed(2)} />
          <h1 className="text-2xl font-bold text-white">
            {percentage.toFixed(2)} % ft
          </h1>
        </div>
      </div>
      <div className="w-full h-1/2 flex flex-col md:flex-row gap-5 ">
        <div className="w-full md:w-1/4 h-full flex bg-darkprimary justify-center items-center rounded-md">
          <AddNewDialogButton setFlip={setFlip} />
        </div>
        <div className="w-full h-full bg-darkprimary justify-center content-center rounded-md">
          <GameAverages />
        </div>
      </div>
    </div>
  );
}

export default HomeScreenContainer;
