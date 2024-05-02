import React from "react";
import MusicHomeItem from "./MusicHomeItem";
import { Link } from "react-router-dom/dist";

const MusicItem = () => {
  let productsArr = [
    {
      id: 1,
      title: "Album 1",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1,
    },
    {
      id: 2,
      title: "Album 2",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 1,
    },
    {
      id: 3,
      title: "Album 3",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
    {
      id: 4,
      title: "Album 4",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity: 1,
    },
  ];
  let num = 1;
  const listItem = productsArr.map((item) => {
    return (
      <MusicHomeItem
        id={item.id}
        title={item.title}
        price={item.price}
        imageUrl={item.imageUrl}
        quantity={item.quantity}
        num={num++}
      />
    );
  });

  return (
    <div className="flex flex-wrap justify-center items-center p-20 pl-20 pr-20 py-20">
      <div className="flex flex-wrap justify-center gap-16">{listItem}</div>
    </div>
  );
};

export default MusicItem;
