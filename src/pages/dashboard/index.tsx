import Sidebar from "@/components/Sidebar";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="">
      <Sidebar />
      <div className="pt-[100px] bg-purple-50 h-screen ">
        help me
      </div>
    </div>
  );
};

export default Dashboard;
