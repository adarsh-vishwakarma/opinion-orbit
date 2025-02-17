
import { Leaf, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import UserButton from "./UserButton";


const Navbar =  ( {onMenuClick, session}) => {

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 ">
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center">
          {" "}
          <button className="mr-2 md:mr-4" onClick={onMenuClick}>
            <Menu className="h-6 w-6" />
          </button>
          <Link href="/" className="flex items-center">
            {/* <Leaf className="h-6 w-6 md:h-8 md:w-8 text-green-500 mr-1 md:mr-2" /> */}
            <div className="flex flex-col">
              <span className="font-bold text-base md:text-lg text-gray-800">
                Opinion Orbit
              </span>
            </div>
          </Link>
         
        </div>
   <UserButton session={session}/>
      </div>
    </header>
  );
};

export default Navbar;
