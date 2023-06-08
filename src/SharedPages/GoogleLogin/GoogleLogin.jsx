import React, { useContext } from "react";
import { Button, Tooltip } from "@material-tailwind/react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Prividers/AuthProvider";

const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const googleLoginHandler = () => {
    googleLogin()
    .then(result =>{
        console.log(result);
    })
    .catch(error =>{
        console.log(error);
    })
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
