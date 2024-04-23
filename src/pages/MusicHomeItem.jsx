import React, { useContext } from "react";
import CartContext from "../store/cart-context";

const MusicHomeItem = (props) => {
  const cartCTX = useContext(CartContext);

  const buttonHandler = () => {
    cartCTX.addTOCartHandler(props);
  };

  return (
    <div>
      <div className="flex text-2xl font-bold justify-center ">
        {props.title}
      </div>
      <img
        className="h-41 p-5 pl-20 pr-20 py-10"
        src={props.imageUrl}
        alt={props.title}
      />
      <div className="flex gap-20">
        <div className="justify-start p-1">${props.price}</div>
        <button
          onClick={buttonHandler}
          className="justify-end mr-12 font-bold bg-cyan-400 text-white rounded px-2 py-1"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default MusicHomeItem;
