import React from "react";
import MusicHomeItem from "./MusicHomeItem";

const MusicItem = () => {
  const productsArr = [
    {
      title: "Album 1",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Album 2",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Album 3",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Album 4",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const listItem = productsArr.map((item) => {
    return (
      <MusicHomeItem
        title={item.title}
        price={item.price}
        imageUrl={item.imageUrl}
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
