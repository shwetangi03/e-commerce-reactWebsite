import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [updatedItem, setUpdatedItem] = useState([]);

  const addToCart = (item) => {
    setUpdatedItem([...updatedItem, item]);
  };

  const cartContent = {
    message: "Added Successfully",
    addTOCartHandler: addToCart,
    items: updatedItem,
    count: updatedItem.length,
  };

  return (
    <CartContext.Provider value={cartContent}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
