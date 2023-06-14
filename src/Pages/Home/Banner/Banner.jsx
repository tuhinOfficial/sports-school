import React from "react";
import { Carousel, Typography, Button, Slider } from "@material-tailwind/react";
import img1 from "../../../assets/banner/img1.jpg";
import img2 from "../../../assets/banner/img2.jpg";
import img3 from "../../../assets/banner/img3.jpg";
import { Fade, Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="h-[250px] md:h-[540px]">
      <Carousel autoplayDelay={12000} loop={true} className="">
        <div className="relative h-full w-full">
          <img
            src={img1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-4/5 text-center md:w-2/4 md:mx-auto ">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-[24px] md:text-4xl lg:text-5xl"
              >
                <Slide duration={3000}>
                  <span className="text-16px">
                    Learn Sports Beautiful With Us
                  </span>
                </Slide>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                <span className="hidden md:block">
                  <Fade delay={1e3} cascade damping={1e-1}>
                    We Have Beautiful Team To BeautyFul Games
                  </Fade>
                </span>
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="sm" lg:size="lg">
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
            src={img1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-4/5 text-center md:w-2/4 md:mx-auto ">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-[24px] md:text-4xl lg:text-5xl"
              >
                <Slide duration={3000}>
                  <span className="text-16px">
                    Growth Your Skills With Our BeautyFul Trainer
                  </span>
                </Slide>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                <span className="hidden md:block">
                  <Fade delay={1e3} cascade damping={1e-1}>
                    To Growth Your Skills Join With Us . We Support You For Your
                    Development Skills.
                  </Fade>
                </span>
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="sm" lg:size="lg">
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
            src={img1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-4/5 text-center md:w-2/4 md:mx-auto ">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-[24px] md:text-4xl lg:text-5xl"
              >
                <Slide duration={3000}>
                  <span className="text-16px">
                    Grow Your Skill With BeautyFul Ground
                  </span>
                </Slide>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                <span className="hidden md:block">
                  <Fade delay={1e3} cascade damping={1e-1}>
                    We Have Beautiful Ground in Our Own Property to Build Your
                    Skill
                  </Fade>
                </span>
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="sm" lg:size="lg">
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
