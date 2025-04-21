
// import { Leaf, Menu } from "lucide-react";
// import Link from "next/link";
// import React from "react";
// import UserButton from "./UserButton";


// const Navbar =  ( {onMenuClick, session}) => {

//   return (
//     <header className="bg-white border-b border-gray-200 sticky top-0 z-50 ">
//       <div className="flex items-center justify-between px-5 py-3">
//         <div className="flex items-center">
//           {" "}
//           <button className="mr-2 md:mr-4" onClick={onMenuClick}>
//             <Menu className="h-6 w-6" />
//           </button>
//           <Link href="/" className="flex items-center">
//             {/* <Leaf className="h-6 w-6 md:h-8 md:w-8 text-green-500 mr-1 md:mr-2" /> */}
//             <div className="flex flex-col">
//               <span className="font-bold text-base md:text-lg text-gray-800">
//                 Opinion Orbit
//               </span>
//             </div>
//           </Link>
         
//         </div>
//    <UserButton session={session}/>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
"use client";

import { Menu, Sparkles } from "lucide-react";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = ({ onMenuClick }) => {
  const { data: session } = useSession();
  const isAuthenticated = !!session;
console.log(session?.user?.image)
  return (
    <header className="bg-gray-950 border-b border-gray-800 sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left Section with Menu + Logo */}
        <div className="flex items-center gap-3">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={onMenuClick}
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex items-center space-x-2 text-orange-500 font-semibold text-xl">
            <Sparkles className="h-5 w-5" />
            <span>FeedbackFlow</span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
          <Link href="#" className="hover:text-white transition">
            Features
          </Link>
          <Link href="#" className="hover:text-white transition">
            Pricing
          </Link>
          <Link href="#" className="hover:text-white transition">
            About
          </Link>
          <Link href="#" className="hover:text-white transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="bg-orange-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow hover:bg-orange-400 transition-all hover:scale-102"
          >
            Go to Dashboard
          </Link>

          {/* User Avatar Section */}
          {isAuthenticated && (
            <div className="relative">
              <img
                src={session?.user?.image} // Use user's image or a default avatar
                alt="User Avatar"
                className="h-8 w-8 rounded-full border-2 border-orange-500"
              />
              <span className="absolute top-0 right-0 h-2 w-2 bg-green-400 rounded-full"></span> {/* Optional: status indicator */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
