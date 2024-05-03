import React,{useState, useEffect} from 'react'
import CartContext from './cart-context';

const CartProvider = (props) => {
    const [updatedItem, setUpdatedItem] = useState([]);
    const [amount, setAmount] = useState("");
  
    const initialToken = localStorage.getItem("token");
    const [token, setToken] = useState(initialToken);
  
    const userIsLoggedIn = !!token;
  
    const loginHandler = (token) => {
      setToken(token);
      localStorage.setItem("token", token);
    };
  
    let newSubArray = [...updatedItem];
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
}

export default CartProvider
