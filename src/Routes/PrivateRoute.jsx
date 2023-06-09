import React, { useContext } from "react";
import { AuthContext } from "../Prividers/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner className="h-8 w-8" color="blue" />
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
