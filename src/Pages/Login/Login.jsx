import React, { useContext, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Swal from "sweetalert2";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Prividers/AuthProvider";
import { BiHide, BiShow } from "react-icons/bi";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { logIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data);

    logIn(data.email, data.password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 2000,
        });

        reset({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/user-not-found") {
          setError("User not found");
        }
        if (error.code === "auth/wrong-password") {
          setError("Password incorrect");
        }
      });
    setError("");
  };

  return (
    <>
      <Helmet>
        <title>Sports School | Login</title>
      </Helmet>
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
                <div className="relative">
                  <Input
                    className="text-white"
                    type={showPassword ? "text" : "password"}
                    size="lg"
                    label="Password"
                    {...register("password", { required: true })}
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
              </div>

              <span className="text-red-500">{error}</span>

              <Button type="submit" className="mt-6" fullWidth>
                Login
              </Button>
              <Typography
                color="white"
                className="mt-4 text-center font-normal"
              >
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
    </>
  );
};

export default Login;
