import React, { useContext, useState } from "react";
import Cart from "./Cart";
import CartContext from "../store/cart-context";

const Navbar = (props) => {
  const ctx = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <nav className="border-b-2">
      <ul className="flex justify-center gap-10 bg-black text-white p-3 font-bold">
        <li>HOME </li>
        <li>STORE </li>
        <li>ABOUT</li>
        <div className="flex justify-end items-center">
          <button
            onClick={toggleCart}
            className="border border-cyan-600 rounded-lg justify-end p-1"
          >
            {isCartOpen ? "CLOSE CART" : "OPEN CART"}
          </button>
          {ctx.count}
        </div>
      </ul>
      {isCartOpen && <Cart />}
    </nav>
  );
};

export default Navbar;
