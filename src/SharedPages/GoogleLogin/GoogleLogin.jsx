import React, { useContext } from "react";
import { Button, Tooltip } from "@material-tailwind/react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Prividers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleLoginHandler = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const newUser = {
          name: user.displayName,
          email: user.email,
        };
        fetch("https://sport-school-server-tuhinofficial.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {});
        navigate(from, { replace: true });
      })
      .catch((error) => {
      });
  };

  return (
    <div>
      <h3 className="text-center text-2xl mb-2 font-medium text-white">
        Login With
      </h3>
      <div className="flex justify-center">
        <Tooltip
          content="Google Login"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Button
            onClick={googleLoginHandler}
            variant="outlined"
            className="flex items-center gap-3 text-1xl"
          >
            Google
            <FaGoogle></FaGoogle>
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default GoogleLogin;
