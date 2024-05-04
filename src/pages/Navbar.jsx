import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import CartContext from "../store/cart-context";

const Navbar = (props) => {
  const ctx = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // const logoutHandler = (event) => {
  //   event.preventDefault();
  //   ctx.isLoggedIn(false);
  //   localStorage.setItem("token", "");
  // };

  return (
    <div>
      <nav className="border-b-2 sticky">
        <ul className="flex justify-center gap-10 bg-black text-white p-1 font-bold ">
          <NavLink
            className={(e) => {
              return e.isActive ? "bg-slate-700 rounded-md" : "";
            }}
            to="/"
          >
            <li className="p-2 ">HOME </li>
          </NavLink>

          <NavLink
            className={(e) => {
              return e.isActive ? "bg-slate-700 rounded-md" : "";
            }}
            to="/store"
          >
            <li className="p-2">STORE </li>
          </NavLink>

          <NavLink
            className={(e) => {
              return e.isActive ? "bg-slate-700 rounded-md" : "";
            }}
            to="/about"
          >
            <li className="p-2">ABOUT</li>
          </NavLink>

          <NavLink
            className={(e) => {
              return e.isActive ? "bg-slate-700 rounded-md" : "";
            }}
            to="/contactUs"
          >
            <li className="p-2">CONTACT-US </li>
          </NavLink>

          {/* {!ctx.isLoggedIn && ( */}
            <NavLink
              className={(e) => {
                return e.isActive ? "bg-slate-700 rounded-md" : "";
              }}
              to="/login"
            >
              <li className="p-2">LOGIN</li>
            </NavLink>
          {/* )} */}

          {/* {ctx.isLoggedIn && (
            <button
              onClick={logoutHandler}
              className="p-2 bg-slate-700 rounded-md"
            >
              LOGOUT
            </button>
          )} */}

          {ctx.isLoggedIn && (
            <div className="flex justify-end items-center px-16">
              <button
                onClick={toggleCart}
                className="border border-cyan-600 rounded-lg justify-end p-1 px-3"
              >
                {isCartOpen ? "CLOSE CART" : "OPEN CART"}
              </button>
              {ctx.count}
            </div>
          )}
        </ul>
        {isCartOpen && <Cart />}
      </nav>
    </div>
  );
};

export default Navbar;
