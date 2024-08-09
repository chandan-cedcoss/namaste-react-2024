import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const About = lazy(() => import('./components/About'));

const AppLayout = () => {
    console.log(UserContext);
    const [userName, SetUserName] = useState();
    useEffect(() => {
        const userInfo = {
            name: "Chandan Pandey"
        }
        SetUserName(userInfo.name);
    }, []);
    return (
        <div className="appLayout">
            <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, SetUserName }}>
                <Header />
            </UserContext.Provider>
            <Outlet />
            </Provider>
        </div>)
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense><About /></Suspense>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
