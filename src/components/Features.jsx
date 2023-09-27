import React from "react";
import Suzuki from "../assets/feature/suziki.png";
import Tesla from "../assets/feature/tesla.png";
import Toyota from "../assets/feature/toyota.png";
import Audi from "../assets/feature/audi.png";
import BMW from "../assets/feature/bmw.png";
import KIA from "../assets/feature/kia.png";
import Benz from "../assets/feature/benz.png";
import Porsche from "../assets/feature/porsche.png";

function Features() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="w-10/12 m-auto">
        <div className="pb-8">
          <h1 className="font-bold text-xl text-[#5941BB] text-center">
            Featured Market:
          </h1>
        </div>
        <div className="border-[1px] border-sky-500 bg-[#f9f6f6] rounded-lg py-16">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-8 justify-center">
            <div className="border w-[80px] h-[80px] bg-white flex items-center justify-center m-auto">
              <img src={Suzuki} alt="suzuki" className="w-full h-full" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white flex items-center justify-center m-auto">
              <img src={Tesla} alt="tesla" className="w-full h-full" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white flex items-center justify-center m-auto">
              <img src={Toyota} alt="toyota" className="w-full h-full" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white flex items-center justify-center m-auto">
              <img src={Audi} alt="audi" className="w-full h-full" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white flex items-center justify-center m-auto">
              <img src={BMW} alt="bmw" className="w-full h-full" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white flex items-center justify-center m-auto">
              <img src={KIA} alt="kia" className="w-full h-full" />
            </div>
            <div className="border w-[80px] bg-white flex items-center justify-center m-auto">
              <img src={Benz} alt="benz" className="w-full h-full" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white flex items-center justify-center m-auto">
              <img src={Porsche} alt="porsche" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
