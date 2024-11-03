import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>

            <div className="max-w-screen-xl mx-auto px-1">
                <Navbar></Navbar>
                <div className="min-h-screen">
                    <Outlet></Outlet>
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;