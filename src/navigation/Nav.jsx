import React, { useState } from "react";
import { navbar } from "./css/navigation";

function Nav() {
  const [count, setCount] = useState(0);

  return (
    <div className=" flex justify-between items-center px-2 py-4 ">
      <div className="flex justify-center items-center">
        <button className=" bg-slate-900 p-3 rounded-md text-white text-sm font-semibold">
          <i class="fa-solid fa-table-cells-large mr-2"></i>Browser Category
          <i class=" ml-1 fa-solid fa-angle-down"></i>
        </button>
        <ul className="flex  justify-between items-center ml-3">
          <li>
            <a className={navbar.navLink} href="#">
              Home
            </a>
          </li>
          <li>
            <a className={navbar.navLink} href="#">
              Offer
            </a>
          </li>
          <li>
            <a className={navbar.navLink} href="#">
              Daily Deal
            </a>
          </li>
          <li>
            <a className={navbar.navLink} href="#">
              Flat Sale
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button
          className="text-blue-900 text-base mr-4 font-semibold"
          onClick={() => alert("contact us")}
        >
          <i class="fa-solid fa-headset"></i> +92 300 1234567
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 font-semibold  py-2 px-3 text-white rounded-lg"
        >
          <i class="fa-solid fa-bag-shopping mr-2"></i> My Cart {`( ${count} )`}
        </button>
      </div>
    </div>
  );
}

export default Nav;
