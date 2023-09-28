import React from "react";
{
  /*import { Link } from "react-router-dom";*/
}
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDropup } from "react-icons/io";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navigation() {
  const [open, setOpen] = useState(false);

  const switches = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="h-16 bg-white text-[#5941BB] font-bold relative md:py-4 py-2">
      <div className="w-10/12 m-auto">
        {/**Desktop view */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8 lg:text-2xl text-xl justify-between">
            {/**Remember to add link function to listed items */}
            <li>News</li>
            <li className="flex items-center gap-2">
              Find a car
              {open ? (
                <MdOutlineArrowDropDownCircle
                  size={25}
                  onClick={() => setOpen(false)}
                />
              ) : (
                <IoIosArrowDropup size={25} onClick={() => setOpen(true)} />
              )}
            </li>
            <li>
              <img
                src={logo}
                alt="Carsera"
                className="object-cover h-10 w-40"
              />
            </li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        {/**Mobile view */}
        <div className="md:hidden absolute top-5 right-7" onClick={() => {}}>
          {open ? (
            <AiOutlineClose size={25} onClick={() => setOpen(false)} />
          ) : (
            <AiOutlineMenu size={25} onClick={() => setOpen(true)} />
          )}
        </div>
        <div className="md:hidden">
          <div className="font-bold text-2xl text-[#5941BB] mb-4">
            <img src={logo} alt="Carsera" className="object-cover h-10 w-40" />
          </div>
          {open && (
            <div className="md:hidden bg-[#5941BB] py-4">
              <ul className="flex flex-col gap-3 font-bold">
                {/**Remember to add link function to listed items */}
                <li className="text-xl text-white p-2 rounded cursor-pointer bg-[#806CCE] hover:bg-[#9d8ae9] transition duration-300">
                  News
                </li>
                <li className="flex items-center text-xl text-white p-2 rounded cursor-pointer bg-[#806CCE] hover:bg-[#9d8ae9] transition duration-300">
                  Find a car
                  <MdOutlineArrowDropDownCircle />
                </li>
                <li className="text-xl text-white p-2 rounded cursor-pointer bg-[#806CCE] hover:bg-[#9d8ae9] transition duration-300">
                  About Us
                </li>
                <li className="text-xl text-white p-2 rounded cursor-pointer bg-[#806CCE] hover:bg-[#9d8ae9] transition duration-300">
                  Contact
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
