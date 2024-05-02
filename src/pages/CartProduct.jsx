import React, { useContext } from "react";
import CartContext from "../store/cart-context";

const CartProduct = (props) => {
  const ctx = useContext(CartContext);

  const removeHandler = (e) => {
    e.preventDefault();
    ctx.removeHandler(props.id);
  };
  return (
    <div>
      <div className="flex p-3">
        <img className="h-20" src={props.imageUrl} alt={props.title} />
        <div className="p-5">{props.title}</div>
        <div className="p-5">₹{props.price}</div>
        <div className="p-5">{props.quantity}</div>
        <div className="p-5">
          <button
            onClick={removeHandler}
            className="text-white bg-red-600 pr-2 pl-2 py-1 rounded-md"
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
