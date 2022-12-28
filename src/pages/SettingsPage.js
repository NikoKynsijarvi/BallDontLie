import React from "react";
import Sidebar from "../components/Sidebar";
import Settings from "../components/Settings";

function SettingsPage() {
  return (
    <div className="h-screen w-screen  bg-background flex flex-row">
      <Sidebar />
      <div className="h-full w-full flex items-center justify-center ">
        <Settings />
      </div>
    </div>
  );
}

export default SettingsPage;
