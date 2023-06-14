import React from "react";
import Banner from "../Banner/Banner";
import PopularSports from "../Popular/PopularSport/PopularSports";
import PopularInstructors from "../Popular/PopularInstractor/PopularInstructors";
import { Helmet } from "react-helmet-async";
import Achievement from "../Achivement/Achivement";

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
        <Achievement></Achievement>
      </div>
    </>
  );
};

export default Home;
