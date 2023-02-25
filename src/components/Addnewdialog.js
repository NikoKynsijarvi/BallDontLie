import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addShotGroup } from "../reducers/shotgroupReducer";
import shotGroupService from "./../services/shotgroup";

function ShotAmountInput({ inputValue, setShotGroup, shotGroup }) {
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setValue(value);

    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      setValidated(true);
    } else {
      setValidated(false);
    }

    if (inputValue === "attempted" && parsedValue !== NaN) {
      const newShotGroup = { ...shotGroup, shotsattempted: parsedValue };
      setShotGroup(newShotGroup);
      return;
    }

    if (inputValue === "made" && parsedValue !== NaN) {
      const newShotGroup = { ...shotGroup, shotsmade: parsedValue };
      setShotGroup(newShotGroup);
      return;
    }
  };

  return (
    <div>
      <input
        value={value}
        maxLength="2"
        onChange={(e) => handleChange(e)}
        type="text"
        className={
          validated
            ? "h-8  text-center rounded-xl  bg-darkprimary border-2 border-green-500 "
            : "h-8  text-center rounded-xl  bg-darkprimary border-2 border-primary "
        }
        placeholder="Shots made"
      />
    </div>
  );
}

function ChooseType({ shotGroup, setShotGroup }) {
  const [type, setType] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value === type) {
      setType(null);
      return;
    }
    setType(e.target.value);

    const updated = { ...shotGroup, type: e.target.value };
    setShotGroup(updated);
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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [shotGroup, setShotGroup] = useState({
    username: null,
    type: null,
    shotsmade: null,
    shotsattempted: null,
    date: null,
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const keys = [
      shotGroup.type,
      shotGroup.shotsmade,
      shotGroup.shotsattempted,
    ];
    if (
      !keys.includes(null) &&
      !isNaN(shotGroup.shotsattempted) &&
      !isNaN(shotGroup.shotsmade) &&
      shotGroup.shotsattempted >= shotGroup.shotsmade
    ) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  }, [shotGroup]);

  const date = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (buttonDisabled) return;

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const today = `${year}-${month + 1}-${day}`;

    const shotGroupFull = {
      ...shotGroup,
      date: today,
      username: user.username,
    };

    shotGroupService
      .addNew(shotGroupFull, user.token)
      .then((res) => {
        console.log(res);
        setButtonDisabled(true);
        dispatch(addShotGroup(res));
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(shotGroupFull);
  };

  return (
    <div className="bg-darkprimary h-full flex items-center justify-center w-full text-white flex-col gap-2 z-50">
      <ChooseType shotGroup={shotGroup} setShotGroup={setShotGroup} />
      <h1>Shots made</h1>
      <ShotAmountInput
        inputValue="made"
        setShotGroup={setShotGroup}
        shotGroup={shotGroup}
      />
      <h1>Shots attempted</h1>
      <ShotAmountInput
        inputValue="attempted"
        setShotGroup={setShotGroup}
        shotGroup={shotGroup}
      />
      <button
        className={
          buttonDisabled
            ? "w-1/4 h-1/6 bg-gray-400 rounded-md cursor-default"
            : "w-1/4 h-1/6 bg-secondary rounded-md"
        }
        onClick={(e) => handleSubmit(e)}
      >
        Add
      </button>
    </div>
  );
}

export default Addnewdialog;
