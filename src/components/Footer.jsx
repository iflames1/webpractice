import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="bg-[#806CCE]">
      <div className="w-10/12 m-auto text-[#FAFAFA] py-8">
        <div className="md:flex items-center justify-between ">
          <div className="flex justify-center">
            <img
              src={logo}
              alt="logo"
              className="md:mr-8 object-cover h-10 w-40 "
            />
          </div>
          <div className="grid md:grid-cols-3 gap-4 pt-4 text-sm justify-between">
            <div className="support">
              <h1 className="font-bold pb-2">Find Support</h1>
              <ul>
                <li>info@carserra.com</li>
                <li>www.carserra.com</li>
                <li>admin@carserra.com</li>
              </ul>
            </div>
            <div className="find us">
              <h1 className="font-bold pb-2">Find Us On</h1>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div className="">
              <h1 className="font-bold pb-2">Find Spacification</h1>
              <div className="flex items-center gap-2">
                <ul>
                  <li>Toyota</li>
                  <li>Honda</li>
                  <li>Tesla</li>
                </ul>
                <ul>
                  <li>Porsche</li>
                  <li>KIA</li>
                  <li>Mercades</li>
                </ul>
                <ul>
                  <li>BMW</li>
                  <li>Audi</li>
                  <li>Nisan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#9d8ae9]">
        <div className="w-10/12 m-auto text-center text-[#FAFAFA] py-4">
          <p className=""> &copy; All Right Reserved Carserra 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
