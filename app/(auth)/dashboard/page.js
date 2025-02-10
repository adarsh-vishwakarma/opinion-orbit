"use client"

import { signIn, signOut, useSession } from "next-auth/react";


export default function Home() {
  const session = useSession();
  if(!session) return <div>Loading</div>

  return (
    <>
     
     
    <div className="ml-64">
    
      <div className="ml-10 w-full ">
      {JSON.stringify(session)}
      <button onClick={signOut}>Sign Out</button>
    </div>
      
    </div>
    </>
    
  );
}