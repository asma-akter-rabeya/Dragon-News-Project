import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: () => fetch(`/news.json`)
            },
            
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login,
            },
            {
                path: '/auth/register',
                Component: Register,
            },
        ]
    },
    {
        path: '/news',
        element: <h2>News layout</h2>
    },
    {
        path: '/*',
        element: <h2>error layout</h2>
    },
])

export default router