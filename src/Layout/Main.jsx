import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../SharedPages/Navigation/Navigation';

const Main = () => {
    return (
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </>
    );
};

export default Main;