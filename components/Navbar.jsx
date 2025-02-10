"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (status === "authenticated" && session?.user?.image) {
      setImageUrl(session.user.image);
    }
  }, [status, session]);

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="w-full h-20 fixed bg-gray-200 flex items-center px-4">
      {imageUrl ? (
        <Avatar>
          <AvatarImage src={imageUrl} />
        </Avatar>
      ) : (
        <div className="text-gray-500">No User Image Available</div>
      )}
    </div>
  );
};

export default Navbar;
