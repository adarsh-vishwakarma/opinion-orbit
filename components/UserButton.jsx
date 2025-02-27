"use client"
import { User2 } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const UserButton = ({session}) => {
  console.log(session)
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter()
  return (
    <>
    {!session ? <button onClick={()=>router.push("/signin")} className="w-20 bg-gray-800 h-10 rounded-md text-white">
  SignIn
          </button> :<div className='flex justify-end items-center gap-5'> <button onClick={()=>router.push("/dashboard")} className="w-28 bg-gray-800 h-10 rounded-md text-white">
  Dashboard
          </button>  <div className="relative">
      {/* User2 Component with onClick */}
      <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer">
        <User2 />
      </div>

      {/* User Settings Menu */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md p-2">
          <ul className="text-gray-800">
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={()=>{signOut({callbackUrl: "/"})}}>Logout</li>
          </ul>
        </div>
      )}
    </div>
          </div>}
        
    </>
  )
}

export default UserButton