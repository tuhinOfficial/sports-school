import React, { useState } from "react";
import Title from "../../../SharedPages/Title/Title";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";
import ReviewItem from "./ReviewItem/ReviewItem";

const Reviews = () => {

  return (
    <div>
      <Title headers="What People Say"></Title>

      <div className="my-10">
        <ReviewItem></ReviewItem>
      </div>
    </div>
  );
};

export default Reviews;
