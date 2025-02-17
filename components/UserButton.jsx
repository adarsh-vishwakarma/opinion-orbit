"use client"
import { User2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const UserButton = ({session}) => {
  console.log(session)
  const router = useRouter()
  return (
    <>
    {!session ? <button onClick={()=>router.push("/signin")} className="w-20 bg-orange-600 h-10 rounded-md text-white">
  SignIn
          </button> :<div className='flex justify-end items-center gap-5'> <button onClick={()=>router.push("/dashboard")} className="w-28 bg-orange-600 h-10 rounded-md text-white">
  Dashboard
          </button> <User2 />
          </div>}
        
    </>
  )
}

export default UserButton