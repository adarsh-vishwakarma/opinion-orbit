// "use client";
// import { Coins, Home, IndianRupee, MapPin, Medal, MessageCircleWarning, SquarePen, Trash } from 'lucide-react';
// import Link from 'next/link';
// import React from 'react'
// import { usePathname } from "next/navigation";
// import NewProjBtn from './NewProjBtn';

// const Sidebar = ({open}) => {
    
// const pathname = usePathname()
//     // const open = true
//     const sidebarItems = [
//         { href: "/dashboard", icon: Home, label: "Dashboard" },
//         { href: "/pricing", icon: IndianRupee, label: "Pricing" },
//         { href: "/about", icon: MessageCircleWarning, label: "About" },
//       ];
//   return (
//     <aside
//     className={`bg-white border-r pt-20 border-gray-200 text-gray-800 w-64 fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out ${
//       open ? "translate-x-0" : "-translate-x-full"
//     } lg:translate-x-0`}
//   >
//  <div className='px-4 flex flex-col gap-5'>
// <div className='flex items-center gap-4 text-[12px]'>FEATURES <SquarePen className='h-3 w-3'/></div>

// <div className="w-full h-[1px] bg-gray-200"></div>
//  <NewProjBtn />
//  </div>
//      <nav className="h-full flex flex-col justify-between">
//      <div className="px-6 py-6 space-y-8 mb-5">
//           {sidebarItems.map((item) => (
//             <Link key={item.href} href={item.href} >
//                 <div className={`w-full flex justify-start items-center mb-2 py-3 px-4 rounded-md ${
//                   pathname === item.href
//                     ? "bg-gray-600 text-white"
//                     : "text-gray-800 hover:bg-gray-100"
//                 }`}>
//                 <item.icon className="mr-3 h-5 w-5" />
//                 <span className="text-base">{item.label}</span>
//                 </div>
//             </Link>
//           ))}
//         </div>
//      </nav>
//   </aside>
//   )
// }

// export default Sidebar

"use client";

import {
  Coins,
  Home,
  IndianRupee,
  MapPin,
  Medal,
  MessageCircleWarning,
  SquarePen,
  Trash,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import NewProjBtn from "./NewProjBtn";

const Sidebar = ({ open }) => {
  const pathname = usePathname();

  const sidebarItems = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/pricing", icon: IndianRupee, label: "Pricing" },
    { href: "/about", icon: MessageCircleWarning, label: "About" },
  ];

  // <aside
//     className={`bg-white border-r pt-20 border-gray-200 text-gray-800 w-64 fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out ${
//       open ? "translate-x-0" : "-translate-x-full"
//     } lg:translate-x-0`}
//   >

  return (
    <aside
      className={`bg-[#030712] text-white w-64 pt-20 fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out shadow-md ${
        open ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="px-6 py-6 flex flex-col gap-6">
        {/* Sidebar Header */}
        <div className="flex items-center gap-3 text-gray-400 text-sm font-semibold">
          <SquarePen className="h-4 w-4" />
          <span>FEATURES</span>
        </div>

        <div className="w-full h-px bg-gray-700" />

        {/* New Project Button */}
        <NewProjBtn />

        {/* Sidebar Menu Items */}
        <nav className="flex flex-col space-y-4">
          {sidebarItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={`w-full flex justify-start items-center py-3 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "bg-gray-700 text-white"
                    : "text-gray-400 hover:bg-gray-600 hover:text-white"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                <span>{item.label}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;













