import Sidebar from "@/components/Sidebar";
import MarriageLicense from "@/page-components/MarriageLicense";
import ScheduleCeremony from "@/page-components/ScheduleCeremony";
import VirtualCeremony from "@/page-components/VirtualCeremony";
import React, { ReactNode, useState } from "react";

type Props = {};

const TABS = {
  MARRIAGE_LICENSE: "Marriage License",
  SCHEDULE_CEREMONY: "Schedule Ceremony",
  VIRTUAL_CEREMONY: "Virtual Ceremony",
  MARRIAGE_CERTIFICATE: "Marriage Certificate",
};

const Dashboard = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState<string>(TABS.MARRIAGE_LICENSE);

  function handleSelectedTab(value: string) {
    setSelectedTab(() => value);
  }

  let View: ReactNode = null;
  (function handleView() {
    switch (selectedTab) {
      case TABS.MARRIAGE_LICENSE:
        View = <MarriageLicense />;
        break;

      case TABS.SCHEDULE_CEREMONY:
        View = <ScheduleCeremony />;
        break;

      case TABS.VIRTUAL_CEREMONY:
        View = <VirtualCeremony />;
        break;

      case TABS.MARRIAGE_CERTIFICATE:
        View = <MarriageLicense />;
        break;

      default:
        break;
    }

    return View;
  })();

  return (
    <div className="w-full flex ">
      <div className="flex lg:w-[200px] ">
        <Sidebar />
      </div>
      <div className="pt-[100px] lg:px-[100px] px-6 flex  flex-col w-full  pb-16 bg-purple-50 h-screen ">
        <div className="flex w-full  mt-[30px] gap-24">
          <div className="flex p-1 bg-red-400 gap-1 flex-1 justify-between">
            yes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
