import React from "react";

function InfoSectionCard() {
  return (
    <div
      className="w-1/4 h-40 bg-slate-100 rounded shadow-2xl hover:scale-105 transition ease-in-out transition-duration: 200ms;
    "
    ></div>
  );
}

function Infosection() {
  return (
    <div className="h-1/3 w-screen flex flex-row justify-evenly items-center">
      <InfoSectionCard />
      <InfoSectionCard />
      <InfoSectionCard />
    </div>
  );
}

export default Infosection;
