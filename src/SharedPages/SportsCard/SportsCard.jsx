import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";

const SportsCard = ({ data }) => {
  // console.log(data);


  return (
    <>
      {data.map((item ,index) => (
        <Card key={index} className="w-72 rounded-none">
          <CardHeader shadow={true} floated={false} className="h-48 rounded-none">
            <img
              src={item.img}
            />
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
            <Typography
              variant="small"
              color="gray"
              className="font-semibold"
            >
              Total Students : {item.totalStudent}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {item.details}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-light-blue-500 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
            >
              Admission
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default SportsCard;
