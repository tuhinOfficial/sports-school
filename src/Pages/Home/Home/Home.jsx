import React from "react";
import Banner from "../Banner/Banner";
import PopularSports from "../Popular/PopularSport/PopularSports";
import PopularInstructors from "../Popular/PopularInstractor/PopularInstructors";
import Reviews from "../Reviews/Reviews";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Sports School | Home</title>
    </Helmet>
      <div>
        <Banner></Banner>
        <PopularSports></PopularSports>
        <PopularInstructors></PopularInstructors>
        <Reviews></Reviews>
      </div>
    </>
  );
};

export default Home;
