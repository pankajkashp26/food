import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Search from "./components/Search";
import Crousal from "./components/Crousal";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

// App always shows Header
const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// HomeLayout shows Search + Crousal + page content
const HomeLayout = () => {
  return (
    <>
      <Search />
      <Crousal />
      <Body />
    </>
  );
};

// Router setup
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
      path:"/restaurant/:resid",
      element:<RestaurantMenu />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
