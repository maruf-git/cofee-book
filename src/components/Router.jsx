import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>
    },
]);

export default router;