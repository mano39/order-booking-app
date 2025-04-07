import React from "react";
import { popularProduct } from "../utils/data";

function Card() {
  return (
    <>
      <h1 className="text-lg font-bold mb-2">Most Popular</h1>
      <div className="flex justify-between items-center flex-wrap">
        {popularProduct.map((item, index) => (
          <div
            className=" my-1 border border-slate-100 p2 rounded-md bg-white w-[19%]"
            key={index}
          >
            <img src={item.img} className="w-24" alt="" srcset="" />
            <p className="text-sm font-medium text-gray-600">{item.title}</p>
            <p className="text-sm font-medium text-gray-600">{item.text}</p>
            <div>
              <span className="text-green-500 font-bold">{item.price}</span>
              <span className="ml-2 line-through font-bold">{item.total}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
