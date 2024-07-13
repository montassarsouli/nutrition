import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./components/pages/NotFoundPage";
import Products from "./components/Products";
import SingleProduct from "./components/pages/SingleProduct";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/boutique",
        element: <Products />,
      },

      {
        path: "/boutique/:id",
        element: <SingleProduct />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

  ,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
