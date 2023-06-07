import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./Login.css";
import { useForm } from "react-hook-form";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-screen flex justify-between items-center gap-10 px-40 login-container">
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                className="text-white"
                type="email"
                size="lg"
                label="Email"
                {...register("email", { required: true })}
              />
              {errors.email && errors.email.type === "required" && (
                <span className="text-red-500">Email is required</span>
              )}
              <Input
                className="text-white"
                type="password"
                size="lg"
                label="Password"
                {...register("password", { required: true })}
              />
              {errors.password && errors.password.type === "required" && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>

            <Button type="submit" className="mt-6" fullWidth>
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
