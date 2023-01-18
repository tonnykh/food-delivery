import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./style.css";
import Offers from "./components/Offers";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

const token = localStorage.getItem("name");

const App = () => {
  // const [token, setToken] = useState(JSON.parse(localStorage.getItem("name")));

    if (!token) {
      return <Login />;
    }

  return (
    <>
      {/* {!token ? (
        <Login />
      ) : ( */}
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
      {/* )} */}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/restaurant/:restid",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

// const loginRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//     errorElement: <Error />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
