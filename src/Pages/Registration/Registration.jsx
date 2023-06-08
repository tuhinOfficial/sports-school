import React, { useContext, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Swal from "sweetalert2";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Prividers/AuthProvider";
import "./Registration.css";
import { BiHide, BiShow } from "react-icons/bi";

import {
  Card,
  Input,
  Checkbox,
  Typography,
  Button,
} from "@material-tailwind/react";

const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [error, setError] = useState("");
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

    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });

        reset({
          name: "",
          email: "",
          url: "",
          password: "",
          confirm: "",
        });

        <Navigate to="/" replace={true} />;
      })
      .catch((error) => {
        console.log(error.code)
        if (error.code == "auth/email-already-in-use") {
          setError("Email Already Use Try Another Email")
        }
      });
    setError("");
  };

  return (
    <>
      <Helmet>
        <title>Sports School | Registration</title>
      </Helmet>
      <div className="h-full  flex justify-between items-center gap-10 px-40 registration-container">
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
              Enter your details to Registration.
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
                <div className="relative">
                  <Input
                    className="text-white"
                    type={showPassword ? "text" : "password"}
                    size="lg"
                    label="Password"
                    {...register("password", {
                      required: true,
                      pattern:
                        /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/i,
                    })}
                  />
                  <button
                    onClick={togglePassword}
                    className="absolute top-[25%] end-2"
                  >
                    {showPassword ? (
                      <BiHide className="text-[22px] text-[#FFFFFF]"></BiHide>
                    ) : (
                      <BiShow className="text-[22px] text-[#FFFFFF]"></BiShow>
                    )}
                  </button>
                </div>

                {errors.password && errors.password.type === "required" && (
                  <span className="text-red-500">Password is required</span>
                )}
                {errors.password && errors.password.type === "pattern" && (
                  <span className="text-red-500">
                    password must have 6 characters and Password Need At least
                    one capital letter and special characters{" "}
                  </span>
                )}
                <Input
                  className="text-white"
                  type="password"
                  size="lg"
                  label="Confirm Password"
                  {...register("confirm", { required: true })}
                />
                {errors.confirm && errors.confirm.type === "required" && (
                  <span className="text-red-500">
                    Confirm Password is required
                  </span>
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

              <Button
                disabled={!isChecked}
                type="submit"
                className="mt-6"
                fullWidth
              >
                Registration
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
    </>
  );
};

export default Registration;
