import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CoxsBazar from "../Pages/CoxsBazar/CoxsBazar";
import Home from "../Pages/Home/Home";
import LoadRomes from "../Pages/LoadRomes/LoadRomes";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";
import Sreemangal from "../Pages/Sreemangal/Sreemangal";
import Sundarbans from "../Pages/Sundarbans/Sundarbans";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/romes"),
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/sundarbans",
        element: <Sundarbans></Sundarbans>,
      },
      {
        path: "/sreemangal",
        element: <Sreemangal></Sreemangal>,
      },
      {
        path: "/coxsbazar",
        element: <CoxsBazar></CoxsBazar>,
      },
      {
        path: "/hotels",
        element: (
          <PrivateRoutes>
            <LoadRomes></LoadRomes>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/romes"),
      },
    ],
  },
]);
