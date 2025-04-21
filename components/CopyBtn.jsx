"use client"; 
import { CopyIcon } from 'lucide-react';
import React from 'react'

const CopyBtn = ({text}) => {
  return (
    <div 
          onClick={() => {
            navigator.clipboard.writeText(text);
            
          }}
          className="hover:cursor-pointer hover:shadow-md duration-100 px-2 py-1 flex items-center gap-2"
        >
        <CopyIcon />
          copy
        </div>
  )
}

export default CopyBtn



// <BiClipboard className="ml-1" />

