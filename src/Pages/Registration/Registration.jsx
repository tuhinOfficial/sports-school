import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./Registration.css";
import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isChecked, setIsChecked] = useState(false);
  const [error , setError] = useState('');
  console.log(isChecked);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.confirm) {
      setError("Passwords do not match");
      return;
    }

    setError('');
  };

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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  className="text-white"
                  type="text"
                  size="lg"
                  label="Name"
                  {...register("name", { required: true, maxLength: 20 })}
                />
                {errors.name && errors.name.type === "required" && (
                  <span className="text-red-500">Name is required</span>
                )}
                {errors.name && errors.name.type === "maxLength" && (
                  <span className="text-red-500">Max length Exceeded</span>
                )}
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
                  type="url"
                  size="lg"
                  label="Image Url"
                  {...register("url", { required: true })}
                />
                {errors.url && errors.url.type === "required" && (
                  <span className="text-red-500">Url is required</span>
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
                <Input
                  className="text-white"
                  type="password"
                  size="lg"
                  label="Confirm Password"
                  {...register("confirm", { required: true })}
                />
                {errors.confirm && errors.confirm.type === "required" && (
                  <span className="text-red-500">Password is required</span>
                )}
              </div>
              <Checkbox
                checked={isChecked}
                onChange={checkHandler}
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

              <span className="block mb-4 text-red-600">{error}</span>

              <button
                className="bg-light-blue-500 text-white px-4 py-3 block w-full cursor-pointer hover:bg-light-blue-300"
                type="submit"
                disabled={!isChecked}
              >
                Registration
              </button>

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
