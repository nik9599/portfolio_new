import "../../index.css";
import React from "react";
import { useState } from "react";

function Header() {
  let links = [
    { name: "HOME", link: "/" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
    { name: "login", link: "/login" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white items-center justify-between  py-4 px-7 md:px-10 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 ">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Navbar
        </div>

        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden visible "
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 md:static absolute bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${
            open ? "top-20 opacity-100 " : "top-[-490px]"
          } md: opacity-100 opacity-0 `}
        >
          {links.map(({ name, link }) => (
            <li key={name} className="md: ml-8 text-xl md:my-0 my-7 ">
              <a
                href={link}
                className="text-gray-800 md:hover:text-gray-400 duration-500  "
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
