import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Generics from "./components/Generics";
import CartProvider from "./store/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <header>
        <Navbar />
      </header>

      <main>
        <Generics />
      </main>
    </CartProvider>
  );
};

export default App;
