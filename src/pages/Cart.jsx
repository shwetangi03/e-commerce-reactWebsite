import React, { useContext } from "react";

import CartProduct from "./CartProduct";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const CTX = useContext(CartContext);

  const cartListItem = CTX.items.map((item) => {
    return (
      <CartProduct
        imageUrl={item.imageUrl}
        title={item.title}
        price={item.price}
        quantity={item.quantity}
      />
    );
  });

  return (
    <div className="fixed top-16 right-0 border-l border-gray-300 z-10 w-1/3 bg-white bottom-2">
      <button className="absolute top-0 right-0 p-1 pr-2 pl-2 text-xl border-2 m-5">
        X
      </button>
      <div className="flex justify-center py-9 font-bold text-3xl">Cart</div>
      <div className="flex font-bold gap-24">
        <div className="pl-9">ITEM</div>
        <div className="pl-9">PRICE</div>
        <div>QUANTITY</div>
      </div>

      <div>
        <div>{cartListItem}</div>
      </div>
      <div className="flex justify-end pr-32 font-bold">TOTAL:</div>
      <div className="flex justify-center p-5">
        <button className=" rounded bg-cyan-500 p-2 text-white">
          PURCHASE
        </button>
      </div>
    </div>
  );
};

export default Cart;
