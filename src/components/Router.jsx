import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import MainLayout from "../layouts/MainLayout";
import Coffees from "./Coffees";
import Dashboard from "./Dashboard";
import CategoryCoffeeCards from "./CategoryCoffeeCards";
import CoffeeCards from "./CoffeeCards";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
                loader: ()=>fetch("/categories.json"),
                children:[
                    {
                        path:"/",
                        element: <CoffeeCards></CoffeeCards>,
                        loader: ()=>fetch("/coffees.json")
                    },
                    {
                        path:"/categories/:categoryName",
                        element:<CategoryCoffeeCards></CategoryCoffeeCards> ,
                        loader: ()=>fetch("/coffees.json")
                    },
                ]
            },
            {
                path:"/coffees",
                element: <Coffees></Coffees>
            },
            {
                path:"/dashboard",
                element: <Dashboard></Dashboard>
            },
        ]
    },
]);

export default router;