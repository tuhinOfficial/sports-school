import React from "react";
import useReview from "../../../../Hooks/UseReview";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { Fade } from "react-awesome-reveal";

const ReviewItem = () => {
  const [review] = useReview();

  console.log(review);
  return (
    <div className="grid grid-cols-2 gap-y-5 place-items-center">
      {review.map((item, index) => (
        <Fade key={index} delay={1e3} cascade damping={1e-1}>
          <Card
            
            shadow={false}
            className="w-full max-w-[26rem] bg-light-blue-500 rounded-none px-5"
          >
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar size="lg" variant="circular" src={item.image} />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    {item.name}
                  </Typography>
                  <div className="5 flex items-center gap-0">
                    <StarIcon className="h-5 w-5 text-yellow-700" />
                    <StarIcon className="h-5 w-5 text-yellow-700" />
                    <StarIcon className="h-5 w-5 text-yellow-700" />
                    <StarIcon className="h-5 w-5 text-yellow-700" />
                    <StarIcon className="h-5 w-5 text-yellow-700" />
                  </div>
                </div>
                <Typography color="blue-gray">{item.email}</Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
              <Typography>
                &quot;I found solution to all my design needs from Creative Tim.
                I use them as a freelancer in my hobby projects for fun! And its
                really affordable, very humble guys !!!&quot;
              </Typography>
            </CardBody>
          </Card>
        </Fade>
      ))}
    </div>
  );
};

export default ReviewItem;
