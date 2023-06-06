import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import img1 from "../../../assets/banner/img1.jpg"
import img2 from "../../../assets/banner/img2.jpg"
import img3 from "../../../assets/banner/img3.jpg"

const Banner = () => {
  return (
    <div className="h-[540px]">
      <Carousel autoplay={true} autoplayDelay={3000} loop={true} className="">
        <div className="relative h-full w-full">
          <img
            src={img1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Learn Sports Beautiful With Us
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                We Have Beautiful Team To BeautyFul Games
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg">
                  Admission
                </Button>
                <Button size="lg" color="white" variant="text">
                  Explore Sports
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={img2}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Growth Your Skills With Our BeautyFul Trainer
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                To Growth Your Skills Join With Us . We Support You For Your Development Skills.
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg">
                  Admission
                </Button>
                <Button size="lg" color="white" variant="text">
                  Explore Sports
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={img3}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Grow Your Skill With BeautyFul Ground 
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                We Have Beautiful Ground in Our Own Property to Build Your Skill
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg">
                  Admission
                </Button>
                <Button size="lg" color="white" variant="text">
                  Explore Sports
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
