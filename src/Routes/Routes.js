import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import News from "../Pages/News/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/news",
        element: <News></News>,
      },
    ],
  },
]);
