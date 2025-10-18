import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

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
            {
                path: '/',
                Component: Home,
            },
        ]
    },
    {
        path: '/auth',
        element: <h2>Authentication layout</h2>
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