
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import Banner from './banner';
import Heading from './Heading';

const Home = () => {
    const categories = useLoaderData();

    return (
        <div >
            <Banner></Banner>
            <Heading title={'The Cozy Coffee Book Nook'} subtitle={'Caffeinated Reads for Coffee Lovers & Book Enthusiasts Alike. Sip, Savor, and Escape with Every Page'}>
            </Heading>
            {/* categories menu tab */}
            <div role="tablist" className="tabs tabs-bordered">
                {
                    categories.map((category) =>
                        <NavLink
                            to={`/categories/${category.category}`}
                            key={category.category}
                            role="tab"
                            className={({ isActive }) =>
                                isActive ? "tab-active tab text-xl font-semibold" : "tab"
                              }
                        >
                            {category.category}
                        </NavLink>)
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;