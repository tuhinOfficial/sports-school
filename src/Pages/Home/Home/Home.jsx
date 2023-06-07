import React from 'react';
import Banner from '../Banner/Banner';
import PopularSports from '../Popular/PopularSport/PopularSports';
import PopularInstructors from '../Popular/PopularInstractor/PopularInstructors';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularSports></PopularSports>
            <PopularInstructors></PopularInstructors>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;