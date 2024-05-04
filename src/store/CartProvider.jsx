import React, { useState, useEffect } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [updatedItem, setUpdatedItem] = useState([]);
  const [amount, setAmount] = useState("");

  const initialToken = localStorage.getItem("token")
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const userStoredID = localStorage.getItem("token");
  let newSubArray = [...updatedItem];

  const cartReloadHandler = () => {
    try {
      const cloudData = axios.get(
        `https://crudcrud.com/api/397da8c78f7d4a70a63e2d0ff422d6e0/cart${userStoredID}`
      );
      let newCloudArray = [...cloudData.data];
      let newCloudArrayCopy = [...cloudData.data];
      let isAgain = false;
      console.log(newCloudArray);
      console.log(newCloudArrayCopy.length);

      for (let i = 0; i <= newCloudArray.length; i++) {
        for (let j = i + 1; j < newCloudArray.length; j++) {
          if (newCloudArray[i].id === newCloudArray[j].id) {
            newCloudArray[i].quantity = newCloudArray[i].quantity + 1;
          }
        }
      }
      for (let m = 0; m <= newCloudArray.length; m++) {
        for (let n = m + 1; n < newCloudArray.length; n++) {
          if (newCloudArray[m].id === newCloudArray[n].id) {
            newCloudArray.splice(n, 1);
          }
        }
      }
      setUpdatedItem(newCloudArray);
      console.log(newCloudArray);
    } catch (err) {
      console.log("something went wrong");
    }
  };
  useEffect(cartReloadHandler, []);

  const addToCart = (item) => {
    let sameItem = false;

    newSubArray.forEach((element, index) => {
      if (item.id === element.id) {
        sameItem = true;
        newSubArray[index].quantity = newSubArray[index].quantity + 1;
      }
    });
    if (sameItem === true) {
      setUpdatedItem(newSubArray);
    } else {
      setUpdatedItem([...updatedItem, item]);
    }
  };

  const removeBtnHandler = (id) => {
    newSubArray.forEach((element, index) => {
      if (id === element.id) {
        newSubArray.splice(index, 1);
      }
    });
    setUpdatedItem(newSubArray);
  };

  const totalAmountHandler = () => {
    let totalAmount = 0;
    updatedItem.map((item) => {
      totalAmount = totalAmount + item.price * item.quantity;
      setAmount(totalAmount);
    });
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  }



  useEffect(totalAmountHandler, [updatedItem]);

  const cartContent = {
    message: "Added Successfully",
    addTOCartHandler: addToCart,
    items: updatedItem,
    count: updatedItem.length,
    total: amount,
    removeHandler: removeBtnHandler,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    
  };

  return (
    <CartContext.Provider value={cartContent}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
