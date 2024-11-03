
import Navbar from '../components/Navbar';

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

          
        </div>
    );
};

export default MainLayout;