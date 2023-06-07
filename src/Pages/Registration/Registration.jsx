import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./Registration.css"
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="h-screen">
      <div className="h-screen flex justify-between items-center gap-10 px-40 registration-container">
        <div>
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_2jczmi5y.json"
            style={{ height: "400px", width: "300px" }}
          ></Player>
        </div>

        <div>
          <Card color="transparent" shadow={false}>
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
            <Typography color="white" className="mt-1 font-normal">
              Enter your details to Login.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <Input className="text-white" type="text" size="lg" label="Name" required/>
                <Input className="text-white" type="email" size="lg" label="Email" required/>
                <Input className="text-white" type="url" size="lg" label="Image Url" required/>
                <Input className="text-white" type="password" size="lg" label="Password" required/>
                <Input className="text-white" type="password" size="lg" label="Confirm Password" required/>
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="white"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-blue-500"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="mt-6" fullWidth>
                Register
              </Button>
              <Typography
                color="white"
                className="mt-4 text-center font-normal"
              >
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-blue-900 transition-colors hover:text-blue-700"
                >
                  Login
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Registration;
