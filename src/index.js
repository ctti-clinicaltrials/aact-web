import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./routes/root";
import './App.css';
import NotFoundPage from "./components/NotFoundPage";
import ConnectPage from "./components/ConnectPage";
import HomePage from "./components/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root />,
    errorElement:<NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "connect",
        element: <ConnectPage />,
      }],
  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
