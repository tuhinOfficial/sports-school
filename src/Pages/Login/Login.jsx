import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./Login.css";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen  flex justify-between items-center gap-10 px-40 login-container">
      <div>
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_dn6rwtwl.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>

      <div>
        <Card color="transparent" shadow={false}>
          <Typography variant="h3" color="white">
            Login
          </Typography>
          <Typography color="white" className="mt-1 font-normal">
            Enter your details to Login.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input
                className="text-white"
                type="email"
                size="lg"
                label="Email"
                required
              />
              <Input
                className="text-white"
                type="password"
                size="lg"
                label="Password"
                required
              />
            </div>

            <Button className="mt-6" fullWidth>
              Login
            </Button>
            <Typography color="white" className="mt-4 text-center font-normal">
              Create New Account?{" "}
              <Link
                to="/registration"
                className="font-semibold text-blue-900 transition-colors hover:text-blue-700"
              >
                Sign Up
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
