import React from 'react';
import { Outlet } from 'react-router-dom';
import Footder from '../../Shared/Footder/Footder';
import Header from '../../Shared/Header/Header';

const Layout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footder></Footder>
        </>
    );
};

export default Layout;