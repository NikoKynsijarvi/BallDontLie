import React from "react";

function InfoSectionCard() {
  return (
    <div className="w-3/4 h-40  sm:w-1/4 sm:h-5/6 bg-slate-100 rounded shadow-2xl hover:scale-105 transition ease-in-out transition-duration: 200ms; "></div>
  );
}

function Infosection() {
  return (
    <div className="h-fit sm:h-1/3 w-screen flex flex-col sm:flex-row justify-evenly items-center gap-5 py-5">
      <InfoSectionCard />
      <InfoSectionCard />
      <InfoSectionCard />
    </div>
  );
}

export default Infosection;
