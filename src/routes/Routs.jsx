import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from '../pages/Home/Category/Category';
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/Home/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
// import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children : [
            {
                path: '/',
                element: <LoginLayout></LoginLayout>,
                children: [
                    {
                        path: '/',
                        element: <NavigationBar to='/category/0'></NavigationBar>
                    },
                    {
                        path: 'login',
                        element: <Login></Login>
                    },
                    {
                        path: 'register',
                        element: <Register></Register>
                    }
                ]
            },
            {
                path: "/",
                element: <Category></Category>,
                loader: () => fetch(`http://localhost:5000/news`)
            },
            {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({params})  => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children : [
            {
                path: ':id',
                element: <News></News>,
                loader: ({params})  => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router;