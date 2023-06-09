import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  PlusIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

import { IoIosBookmark } from "react-icons/io";
import { FcApproval } from "react-icons/fc";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import UserDashboard from "../Pages/UserDashboard/UserDashboard/UserDashboard";
import UserBookmarks from "../Pages/UserDashboard/UserDashboard/UserBookmarks/UserBookmarks";

const Dashboard = () => {
  const data = [
    {
      label: "Dashboard",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc:<UserDashboard></UserDashboard>,
    },
    {
      label: "Profile",
      value: "profile",
      icon: UserCircleIcon,
      desc: `To Do`,
    },
    {
      label: "Bookmarks Classes",
      value: "selected",
      icon: IoIosBookmark,
      desc: <UserBookmarks></UserBookmarks>,
    },
    {
      label: "My Enrolled Classes",
      value: "enrolled",
      icon: FcApproval,
      desc: `We're not always in the position that we want to be at.
          `,
    },
  ];

  const labelProps = {
    variant: "small",
    color: "blue-gray",
    className:
      "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
  };

  return (
    <div>
      <Tabs value="dashboard" orientation="vertical" className="mt-10 items-center">
        <TabsHeader className="w-60">
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value} className="place-items-start py-3">
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="py-0">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>

      <div className="relative h-80 w-full z-20">
        <div className="fixed bottom-20 left-300">
          <SpeedDial className="">
            <SpeedDialHandler>
              <IconButton size="lg" className="rounded-full">
                <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent>
              <Link to="/">
                <SpeedDialAction className="relative">
                  <HomeIcon className="h-5 w-5" />
                  <Typography {...labelProps}>Home</Typography>
                </SpeedDialAction>
              </Link>
              <Link to="/instructors">
                <SpeedDialAction className="relative">
                  <BsPersonCircle className="h-5 w-5"></BsPersonCircle>
                  <Typography {...labelProps}>Instructors</Typography>
                </SpeedDialAction>
              </Link>
              <Link to="/classes">
                <SpeedDialAction className="relative">
                  <Square3Stack3DIcon className="h-5 w-5" />
                  <Typography {...labelProps}>Classes</Typography>
                </SpeedDialAction>
              </Link>
            </SpeedDialContent>
          </SpeedDial>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
