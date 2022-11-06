import { createBrowserRouter } from "react-router-dom";
import ClientAuthLayout from "../../layouts/ClientAuthLayout";
import ClientMainLayout from "../../layouts/ClientMainLayout";
import About from "../../pages/Home/About/About";
import Home from "../../pages/Home/Home/Home";
import Order from "../../pages/Home/Order/Order";
import Products from "../../pages/Home/Products/Products";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import SignUp from "../../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientMainLayout></ClientMainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    },
    {
        path: '/auth',
        element: <ClientAuthLayout></ClientAuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <SignUp></SignUp>
            }
        ]
    }
]);

export default router;