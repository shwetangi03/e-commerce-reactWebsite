import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";
import axios from "axios";

const MusicHomeItem = (props) => {
  const cartCTX = useContext(CartContext);

  const data = {
    id: props.id,
    title: props.title,
    imageUrl: props.imageUrl,
    quantity: props.quantity,
    price: props.price,
  };

  const buttonHandler = async(event) => {
    event.preventDefault();
    const userToken = localStorage.getItem("token").trim();

    cartCTX.addTOCartHandler(data);
    try {
      const res =await axios.post(
        `https://crudcrud.com/api/397da8c78f7d4a70a63e2d0ff422d6e0/cart${userToken}`,
        data
      );
      console.log(res.data);
    } catch (err) {
      console.error("Error",err)
      console.log(`Something went wrong!!`);
    }
  };
  return (
    <div>
      <div className="flex text-2xl font-bold justify-center p-2">
        {props.title}
      </div>
      <img
        className="h-41 p-1 pr-20 transition-transform transform-gpu hover:scale-105"
        src={props.imageUrl}
        alt={props.title}
      />
      <Link to="/store/p1">
        <div className="flex gap-20">
          <div className="justify-start p-2">₹{props.price}</div>

          <button
            onClick={buttonHandler}
            className="justify-end mr-12 font-bold bg-cyan-400 text-white rounded px-2 py-1"
          >
            ADD TO CART
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MusicHomeItem;
