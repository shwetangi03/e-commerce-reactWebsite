import React from "react";

const CartContext = React.createContext({
  CartItems: [],
  token: "",
  isLoggedIn: false,
  login: (token) => {},
});

export default CartContext;
