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
    <div className="bg-white py-8">
      <div className="w-10/12 m-auto">
        <div className="pb-8">
          <h1 className="font-bold text-xl text-[#5941BB] text-center">
            Featured Market:
          </h1>
        </div>
        <div className="border-[1px] border-sky-500 bg-[#f9f6f6]">
          <div className="grid md:grid-cols-4 grid-cols-2 items-center justify-between">
            <div className="border w-[80px] h-[80px] bg-white m-8">
              <img src={Suzuki} alt="suziki" className="" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white m-8">
              <img src={Tesla} alt="tesla" className="" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white m-8">
              <img src={Toyota} alt="toyota" className="" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white m-8">
              <img src={Audi} alt="audi" className="" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white m-8">
              <img src={BMW} alt="bmw" className="w-[80px]" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white m-8">
              <img src={KIA} alt="kia" className="h-[80px]" />
            </div>
            <div className="border w-[80px] bg-white m-8">
              <img src={Benz} alt="benz" className="h-[80px]" />
            </div>
            <div className="border w-[80px] bg-white m-8">
              <img src={Porsche} alt="porsche" className="h-[80px] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
