import React from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center sm:mx-6 lg:mx-12 py-3">
        <div>
          <SiConsul />
        </div>
        <ul className="flex gap-4">
          <li className="flex">
            {" "}
            <BsPhoneVibrate className="mt-1 mx-2" /> Support
          </li>
          <li className="flex">
            {" "}
            <AiOutlineGlobal className="mt-1 mx-2" /> Languages
          </li>
        </ul>
        <div className="flex">
          <Link to={"/Login"}>
            <button className="rounded-2xl w-14 hover:font-bold">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
