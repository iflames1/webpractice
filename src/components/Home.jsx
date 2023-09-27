import React from "react";
import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";

function Home() {
  return (
    <div className="py-8 bg-gray-100">
      <div className="w-10/12 bg-[#f9f6f6] m-auto md:py-16 py-8 border-[1px] border-sky-500 rounded-lg">
        <div className="w-[85%] m-auto">
          <p className="text-[#5941BB] font-bold text-lg md:text-3xl pb-8">
            Finding a dream car is not that easy, but we made it easy for you in
            just one click you may able to get market details.
          </p>
          <img
            src={logo}
            alt="Carsera"
            className="w-40 h-10 object-cover m-auto"
          />
          <form className="py-8">
            <div className="flex border border-[#806CCE]">
              <input
                type="search"
                className="w-full p-4 text-sm bg-gray-50 outline-none"
                placeholder="Find your dream car here..."
              />
              <button className="bg-[#806CCE]">
                <FiSearch color="white" size={25} className="" />
              </button>
            </div>
          </form>
          <div className="border p-4 rounded-lg">
            <h1 className="pb-2 font-bold">Recent Searches:</h1>
            <ul className="md:flex md:gap-4">
              {/**Make them clickable */}
              <li>Tesla</li>
              <li>Juke</li>
              <li>Fortuner</li>
              <li>Thundra</li>
              <li>Elentra</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
