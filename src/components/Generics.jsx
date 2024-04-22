import React from "react";
import MusicItems from "./MusicItems";

const Generics = () => {
  return (
    <div>
      <section
        style={{ fontSize: "7rem" }}
        className="pb-9 bg-gray-700 text-white font-bold text-10xl flex justify-center items-center "
      >
        The Generics
      </section>

      <div className="flex justify-center items-center text-3xl font-bold p-5">
        MUSIC
      </div>
      <MusicItems />
    </div>
  );
};

export default Generics;
