import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../SharedPages/Navigation/Navigation';
import Footer from '../SharedPages/Footer/Footer';

const Main = () => {
    return (
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;