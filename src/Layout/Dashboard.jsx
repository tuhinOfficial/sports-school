import React, { useContext, useEffect, useState } from "react";

import { IoIosBookmark } from "react-icons/io";
import { FcApproval } from "react-icons/fc";
import { BsPersonCircle } from "react-icons/bs";
import { MdAddTask } from "react-icons/md";
import { Link } from "react-router-dom";
import UserDashboard from "../Pages/UserDashboard/UserDashboard/UserDashboard";
import UserBookmarks from "../Pages/UserDashboard/UserDashboard/UserBookmarks/UserBookmarks";
import UserEnrolled from "../Pages/UserDashboard/UserDashboard/UserEnrolled/UserEnrolled";
import AddClass from "../Pages/instructorDashboard/addClass/addClass";
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
  Spinner,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  PlusIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import InstructorDashboard from "../Pages/Instructors/Instructors/InstructorDashboard/InstructorDashboard";
import MyClasses from "../Pages/Instructors/Instructors/MyClasses/MyClasses";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard/AdminDashboard";
import ManageClasses from "../Pages/AdminDashboard/AdminDashboard/ManageClasses/ManageClasses";
import ManageUser from "../Pages/AdminDashboard/AdminDashboard/ManageUser/ManageUser";
import { AuthContext } from "../Prividers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const userData = [
    {
      label: "Dashboard",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: <UserDashboard></UserDashboard>,
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
      desc: <UserEnrolled></UserEnrolled>,
    },
  ];
  const instructorData = [
    {
      label: "Instructor Dashboard",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: <InstructorDashboard></InstructorDashboard>,
    },
    {
      label: "Add A Class",
      value: "class",
      icon: MdAddTask,
      desc: <AddClass></AddClass>,
    },
    {
      label: "My Classes",
      value: "enrolled",
      icon: FcApproval,
      desc: <MyClasses></MyClasses>,
    },
  ];
  const AdminData = [
    {
      label: "Admin Dashboard",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: <AdminDashboard></AdminDashboard>,
    },
    {
      label: "Manage Classes",
      value: "profile",
      icon: UserCircleIcon,
      desc: <ManageClasses></ManageClasses>,
    },
    {
      label: "Manage User",
      value: "class",
      icon: MdAddTask,
      desc: <ManageUser></ManageUser>,
    },
  ];

  const [data, setData] = useState([]);

  const { user, loading } = useContext(AuthContext);

  const [loggedUser, setLoggedUser] = useState(null);
  console.log(loggedUser);

  if (loading) {
    return <Spinner />;
  }

  useEffect(() => {
    if (loggedUser?.role === "admin") {
      setData(AdminData);
    } else if (loggedUser?.role === "instructor") {
      setData(instructorData);
    } else {
      setData(userData);
    }
  }, [loggedUser]);

  useEffect(() => {
    fetch(
      `https://sport-school-server-tuhinofficial.vercel.app/users/loggedUser?email=${user.email}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setLoggedUser(data));
  }, [user]);

  // const data=userData;

  const labelProps = {
    variant: "small",
    color: "blue-gray",
    className:
      "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
  };

  return (
    <>
    <Helmet>
      <title>Sports School | Dashboard</title>
    </Helmet>
      <div>
        <Tabs
          value="dashboard"
          orientation="vertical"
          className="mt-10 items-start"
        >
          <TabsHeader className="w-60">
            {data?.map(({ label, value, icon }) => (
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
    </>
  );
};

export default Dashboard;
