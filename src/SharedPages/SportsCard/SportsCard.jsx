import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Prividers/AuthProvider";
import { BsBookmark } from "react-icons/bs";
import useBookmark from "../../Hooks/useBookmark";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";


const SportsCard = ({ data }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [, refetch] = useBookmark();

  useEffect(() => {
    fetch(`https://sport-school-server-tuhinofficial.vercel.app/users/loggedUser?email=${user?.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setLoggedUser(data));
  }, [user]);

  const bookmarkHandler = (item) => {
    if (!user) {
      return navigate("/login", { replace: true });
    }

    const bookmark = {
      name: user?.displayName,
      email: user?.email,
      className: item.className,
      price: item.price,
      instructorName: item.instructorName,
      instructorEmail: item.instructorEmail,
      id: item._id,
      seats: item.seats,
      students: item.students,
    };

    fetch("https://sport-school-server-tuhinofficial.vercel.app/userbookmarks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookmark),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Bookmark Added Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      {data.map((item, index) => (
        <Zoom delay={100} fraction={1} key={index}>
          <Card  className="w-72 rounded-none">
            <CardHeader
              shadow={true}
              floated={false}
              className="h-48 rounded-none"
            >
              <img src={item.classImage} />
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography color="blue-gray" className="font-semibold">
                  {item.className}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-semibold text-light-blue-500"
                >
                  ${item.price} /mo
                </Typography>
              </div>
              <Typography
                variant="h6"
                color="gray"
                className="font-semibold my-3"
              >
                Available Seats : {item.seats}
              </Typography>
              <Typography variant="h6" color="gray" className="font-semibold">
                Instructor Name : {item.instructorName}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-center">
              <Button
                onClick={() => bookmarkHandler(item)}
                className="flex items-center gap-3"
                disabled={loggedUser?.role || item?.seats === "0"}
              >
                <BsBookmark className="font-semibold"></BsBookmark> Add To
                Bookmark
              </Button>
            </CardFooter>
          </Card>
        </Zoom>
      ))}
    </>
  );
};

export default SportsCard;
