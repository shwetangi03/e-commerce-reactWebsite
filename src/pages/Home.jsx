import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <div>
        <h1
          style={{ fontSize: "7rem" }}
          className="pb-9 bg-gray-700 text-white font-bold flex justify-center items-center "
        >
          The Generics
        </h1>

        <div className=" bg-gray-700   grid justify-center">
          <button className="text-white border border-cyan-500 text-2xl p-3 px-9">
            Get Our Latest Album
          </button>
          <button className="text-cyan-500 p-9 flex justify-center text-7xl">
            <FaRegCirclePlay />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center text-3xl font-bold p-5">
        TOURS
      </div>

      <div>
        <ul className="px-72 p-2">
          <li className="p-2 flex justify-center border-b-2 border-b-slate-500">
            <span className="p-2 px-5">JUL16</span>{" "}
            <span className="text-slate-500 p-2 px-5">DETROIT, MI</span>{" "}
            <span className="text-slate-500 p-2 px-20">DTE ENERGY MUSIC THEATRE</span>{" "}
            <button className="bg-cyan-500 text-white rounded-md p-1 px-9 font-bold">
              BUY TICKETS
            </button>
          </li>

          <li className="p-2 flex justify-center border-b-2 border-b-slate-500">
            <span className="p-2 px-5">JUL16</span>{" "}
            <span className="text-slate-500 p-2 px-5">DETROIT, MI</span>{" "}
            <span className="text-slate-500 p-2 px-20">DTE ENERGY MUSIC THEATRE</span>{" "}
            <button className="bg-cyan-500 text-white rounded-md p-1 px-9 font-bold">
              BUY TICKETS
            </button>
          </li>

          <li className="p-2 flex justify-center border-b-2 border-b-slate-500">
            <span className="p-2 px-5">JUL16</span>{" "}
            <span className="text-slate-500 p-2 px-5">DETROIT, MI</span>{" "}
            <span className="text-slate-500 p-2 px-20">DTE ENERGY MUSIC THEATRE</span>{" "}
            <button className="bg-cyan-500 text-white rounded-md p-1 px-9 font-bold">
              BUY TICKETS
            </button>
          </li>

          <li className="p-2 flex justify-center border-b-2 border-b-slate-500">
            <span className="p-2 px-5">JUL16</span>{" "}
            <span className="text-slate-500 p-2 px-5">DETROIT, MI</span>{" "}
            <span className="text-slate-500 p-2 px-20">DTE ENERGY MUSIC THEATRE</span>{" "}
            <button className="bg-cyan-500 text-white rounded-md p-1 px-9 font-bold">
              BUY TICKETS
            </button>
          </li>

          <li className="p-2 flex justify-center border-b-2 border-b-slate-500">
            <span className="p-2 px-5">JUL16</span>{" "}
            <span className="text-slate-500 p-2 px-5">DETROIT, MI</span>{" "}
            <span className="text-slate-500 p-2 px-20">DTE ENERGY MUSIC THEATRE</span>{" "}
            <button className="bg-cyan-500 text-white rounded-md p-1 px-9 font-bold">
              BUY TICKETS
            </button>
          </li>

          <li className="p-2 flex justify-center border-b-2 border-b-slate-500">
            <span className="p-2 px-5">JUL16</span>{" "}
            <span className="text-slate-500 p-2 px-5">DETROIT, MI</span>{" "}
            <span className="text-slate-500 p-2 px-20">DTE ENERGY MUSIC THEATRE</span>{" "}
            <button className="bg-cyan-500 text-white rounded-md p-1 px-9 font-bold">
              BUY TICKETS
            </button>
          </li>

          <li className="p-2 flex justify-center border-b-2 border-b-slate-500">
            <span className="p-2 px-5">JUL16</span>{" "}
            <span className="text-slate-500 p-2 px-5">DETROIT, MI</span>{" "}
            <span className="text-slate-500 p-2 px-20">DTE ENERGY MUSIC THEATRE</span>{" "}
            <button className="bg-cyan-500 text-white rounded-md p-1 px-9 font-bold">
              BUY TICKETS
            </button>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Home;
