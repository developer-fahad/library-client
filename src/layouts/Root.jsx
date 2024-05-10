import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../shared/NavBar';
import Footer from '../shared/Footer';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;