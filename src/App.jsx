import React from "react";
import "./App.css";
import Navbar from "./pages/Navbar";
import CartProvider from "./store/CartProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

import { FaYoutubeSquare } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Login from "./pages/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/*",
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
    <CartProvider>
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
    </CartProvider>
  );
};

export default App;
