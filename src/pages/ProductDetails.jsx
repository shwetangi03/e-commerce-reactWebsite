import React, { useState } from "react";
import { HiTag } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import MoreAboutViews from "./MoreAboutViews";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
  const params = useParams();
  console.log(params.productId);

  const [reviewState, setReviewState] = useState(false);
  const reviewHandler = (e) => {
    e.preventDefault();
    console.log("state activated");
    setReviewState((prevState) => {
      return !prevState;
    });
  };
  return (
    <div>
      <h1 className="text-2xl p-7">Album 1</h1>
      <div className="flex">
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
          alt="Image"
          className="float-left h-96 w-96 p-3"
        />
        <div className="p-12 overflow-scroll">
          <h1 className="text-gray-500 pb-3">Smartees </h1>
          <p>Men Full Sleeve Printed Hooded Sweatshirt</p>
          <p>Special price</p>
          <div className="flex p-3">
            <label className="font-extrabold px-2">₹349</label>
            <label className="font-bold px-2 text-gray-600">₹1,499</label>
            <label>76% off</label>
          </div>
          <div className="p-3">
            <button className="bg-green-600 rounded-lg px-1">3.9⭐</button>
            <span>17,301 ratings and 1,592 reviews</span>
          </div>
          <div className="underline p-3">Available offers</div>
          <div className="p-2">
            <ul>
              <li className="flex">
                <HiTag />
                Bank OfferGet ₹25* instant discount for the 1st Flipkart Order
                using Flipkart UPI T&C
              </li>
              <li className="flex">
                <HiTag />
                Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
              </li>
              <li className="flex">
                <HiTag />
                Bank Offer10% off on Citi-branded Credit Card Transactions, up
                to ₹1,750 on orders of ₹5,000 and above T&C
              </li>
              <li className="flex">
                <HiTag />
                Special PriceGet extra 19% off (price inclusive of
                cashback/coupon) T&C
              </li>
            </ul>
          </div>
          <div className="flex p-3">
            <FaLocationDot />
            Deliver to
          </div>
          <div className="flex p-3">
            <input
              className="bg-gray-300"
              placeholder="Enter Delivary Pincode"
              type="text"
            />
            <button>Check</button>
          </div>
          <div className="p-3">
            <span>Delivery by 30 Apr, Tuesday | Free ₹40 ?</span>
            <span>if ordered before 3:59 PM</span>
          </div>
          <div className="flex p-3">
            <div className="pr-10">Seller</div>
            <span>
              SMARTEES STORE{" "}
              <span className="rounded-md bg-green-600">3.5⭐</span>
              <li>10 days return policy ?</li>
            </span>
          </div>
          <div className="flex gap-80 p-3 text-2xl ">
            <span>Product Details</span>
            <button onClick={reviewHandler}>+</button>
          </div>
          {reviewState && <MoreAboutViews />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
