import React, { Fragment } from "react";
import "./App.css";
const Navbar = React.lazy(() => import("./pages/Navbar"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
const Store = React.lazy(() => import("./pages/Store"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Login = React.lazy(() => import("./pages/Login"));

import { FaYoutubeSquare } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

import CartContext from "./store/cart-context";
import { Suspense } from "react";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "*",
      element: (
        <>
          <NotFound />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/contactUs",
      element: (
        <>
          <Navbar />
          <ContactUs />
        </>
      ),
    },
    {
      path: "/store",
      element: (
        <>
          <Navbar />
          <Store />
          {/* {CartContext.isLoggedIn && <Store />}
          {!CartContext.isLoggedIn && <Navigate to="/login" replace={true} />} */}
        </>
      ),
    },
    {
      path: "/store/:productId",
      element: (
        <>
          <Navbar />
          <ProductDetails />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
  ]);

  return (
    <Fragment>
      <Suspense
        fallback={
          <div>
            <h3>Loading...</h3>
          </div>
        }
      >
        <header>
          <RouterProvider router={router} />
        </header>

        <footer className="bg-cyan-400 h-20 flex justify-center sticky">
          <div className="text-white text-5xl px-40 p-2">The Generics</div>
          <a href="https://www.youtube.com/" target="_blank">
            <div className="px-9 p-4 text-5xl">
              <FaYoutubeSquare />
            </div>
          </a>
          <a href="https://www.spotify.com/" target="_blank">
            <div className="px-9 p-4 text-5xl">
              <FaSpotify />
            </div>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <div className="px-9 p-4 text-5xl">
              <FaFacebookSquare />
            </div>
          </a>
        </footer>
      </Suspense>
    </Fragment>
  );
};

export default App;
