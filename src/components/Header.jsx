import React, { useState } from "react";
import Image from "../assets/pny.png";
import ImgFlag from "../assets/english.png";
import { header, footer } from "./css/header";
import Dropdown from "./Dropdown";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <div className={header.container}>
      <img src={Image} className="w-24" />

      <div className={header.search}>
        <i className="fa-solid fa-magnifying-glass "></i>
        <input
          type="text"
          className={header.input}
          placeholder="search product ..."
        />
      </div>
      <div className=" flex justify-between w-80">
        <button
          onClick={() => setShow(!show)}
          className={`${header.dropdown} relative`}
        >
          <img src={ImgFlag} className="w-6 h-6 mr-1" alt="" srcset="" />
          {/* <i className="fa-regular fa-flag text-base text-white p-2 py-1 bg-green-700 rounded-full"></i>{" "} */}
          English <i className="fa-solid fa-angle-down self-center ml-1"></i>
          {show && <Dropdown />}
        </button>
        <p className={header.dropdown}>
        <span className="w-7 h-7 bg-green-500 rounded-full flex justify-center items-center mr-1" >
          <i className="fa-regular fa-heart text-base text-white"></i>
          </span>
          Favorite
        </p>
        <p className={header.dropdown}>
          <span className="w-7 h-7 bg-green-500 rounded-full flex justify-center items-center mr-1" >

          <i className="fa-regular fa-user text-base text-white"></i>
          </span>
          Account 
        </p>
      </div>
    </div>
  );
}

export default Header;
