import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import MainLayout from "../layouts/MainLayout";
import Coffees from "./Coffees";
import Dashboard from "./Dashboard";
import CategoryCoffeeCards from "./CategoryCoffeeCards";
import CoffeeCards from "./CoffeeCards";
import Footer from "./Footer";
import Navbar from "./Navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>
            <MainLayout></MainLayout>
            <Footer></Footer>
        </div>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/categories.json"),
                children: [
                    {
                        path: "/",
                        element: <CoffeeCards></CoffeeCards>,
                        loader: () => fetch("/coffees.json")
                    },
                    {
                        path: "/categories/:categoryName",
                        element: <CategoryCoffeeCards></CategoryCoffeeCards>,
                        loader: () => fetch("/coffees.json")
                    },
                ]
            },

            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
        ]
    },
    {
        path: "/coffees",
        element: <div>
            <Navbar></Navbar>
            <Coffees></Coffees>
            <Footer></Footer>
        </div>
    },
]);

export default router;