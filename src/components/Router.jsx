import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import MainLayout from "../layouts/MainLayout";
import Coffees from "./Coffees";
import Dashboard from "./Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element: <Home></Home>
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