import React from "react";
import MusicItems from "./MusicItem";

const Store = () => {
  return (
    <div>
      <section
        style={{ fontSize: "7rem" }}
        className="pb-9 bg-gray-700 text-white font-bold text-10xl flex justify-center items-center "
      >
        The Generics
      </section>

      <div className="flex justify-center items-center text-3xl font-bold p-3">
        MUSIC
      </div>
      <MusicItems />

      <div className="flex justify-center items-center text-3xl font-bold">
        MERCH
      </div>
      <MusicItems />

      <div className="flex justify-center p-5">
        <button className="bg-slate-500 p-3 px-3 text-white rounded-lg">
          See the cart
        </button>
      </div>
    </div>
  );
};

export default Store;
