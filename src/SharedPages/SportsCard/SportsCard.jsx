import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { AuthContext } from "../../Prividers/AuthProvider";
import { BsBookmark } from "react-icons/bs";
import useBookmark from "../../Hooks/useBookmark";
import Swal from "sweetalert2";

const SportsCard = ({ data }) => {
  console.log(data);

  const { user } = useContext(AuthContext);
  const [, refetch] = useBookmark();

  const bookmarkHandler = (item) => {
    console.log(item);
    const bookmark = {
      name: user.displayName,
      email: user.email,
      className: item.sportsName,
      price: item.price,
      instructorName: item.instructor,
    };
    console.log(bookmark);

    fetch('http://localhost:5000/userbookmarks',{
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookmark)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if (data.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Bookmark Added Successful',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    
  };

  return (
    <>
      {data.map((item, index) => (
        <Card key={index} className="w-72 rounded-none">
          <CardHeader
            shadow={true}
            floated={false}
            className="h-48 rounded-none"
          >
            <img src={item.img} />
          </CardHeader>
          <CardBody>
            <div className="flex items-center justify-between mb-2">
              <Typography color="blue-gray" className="font-semibold">
                {item.sportsName}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-semibold text-light-blue-500"
              >
                ${item.price} /mo
              </Typography>
            </div>
            <Typography variant="small" color="gray" className="font-semibold">
              Total Students : {item.totalStudent}
            </Typography>
            <Typography
              variant="h6"
              color="gray"
              className="font-semibold my-3"
            >
              Available Seats : {item.availableSeats}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {item.details}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-center">
            <Button onClick={()=>bookmarkHandler(item)} className="flex items-center gap-3">
              <BsBookmark className="font-semibold"></BsBookmark> Add To Bookmark
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default SportsCard;
