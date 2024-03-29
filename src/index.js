import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./routes/root";
import "./App.css";
import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";
import DownloadPage from "./components/DownloadPage";
import ContactUsPage from "./components/ContactUsPage";

export const fileLoader = async () => {

  const result = await fetch('http://localhost:3000/file_records');

  if (!result.ok) throw Error('Something went wrong');

  const file_records = await result.json()
  return {file_records}
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "download",
        loader: fileLoader,
        element: <DownloadPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
