import React from "react";
import Sidebar from "../components/Sidebar";
import StatisticsContainer from "../components/pageComponents/StatisticsContainer";

function StatisticsPage() {
  return (
    <div className="h-screen w-screen  bg-background flex flex-row">
      <Sidebar />
      <StatisticsContainer />
    </div>
  );
}

export default StatisticsPage;
