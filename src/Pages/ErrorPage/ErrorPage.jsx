import React from "react";
import imgError from "../../assets/error.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#131E3B]">
      <h1 className="text-3xl mb-4 text-[#FFFFFF]">Page Not Found</h1>
      <img className="h-60" src={imgError} alt="" />
      <Link to="/">
        <Button variant="outlined" className="mt-8">
          Back To Home
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
