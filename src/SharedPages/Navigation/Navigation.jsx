import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { Select, Option } from "@material-tailwind/react";

import "./Navigation.css";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Prividers/AuthProvider";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const [openMenu, setOpenMenu] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const logOutHandler = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="/"
          className="flex items-center font-semibold text-[#FFFFFF] text-lg hover:text-light-blue-500"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/classes" className="flex items-center font-semibold text-lg text-[#FFFFFF] hover:text-light-blue-500">
          Classes
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="#"
          className="flex items-center font-semibold text-[#FFFFFF] text-lg hover:text-light-blue-500"
        >
          Instructors
        </Link>
      </Typography>
    </ul>
  );
  return (
    <div>
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-black rounded-none border-none bg-opacity-90 ">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as=""
            href="#"
            variant="h4"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <Link to="/" className="text-light-blue-500 font-semibold">
              Sports School
            </Link>
          </Typography>
          <div className="hidden lg:block">{navList}</div>

          {!user ? (
            <Link to="/login">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block text-lg"
              >
                Login
              </Button>
            </Link>
          ) : (
            <Menu open={openMenu} handler={setOpenMenu}>
              <MenuHandler>
                <Button
                  {...triggers}
                  variant="text"
                  className="flex items-center px-0 py-0 gap-2 text-base font-normal capitalize tracking-normal border-transparent outline-none"
                >
                  <Avatar
                    src={user?.photoURL}
                    alt="img"
                  />
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList
                {...triggers}
                className="hidden w-[12rem] gap-3 overflow-visible lg:grid "
              >
                <ul className="col-span-4 flex w-full flex-col gap-1 border-none outline-none">
                  <MenuItem>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                      Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                      Dashboard
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={logOutHandler}>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                      Logout
                    </Typography>
                  </MenuItem>
                </ul>
              </MenuList>
            </Menu>
          )}


          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            {navList}
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
