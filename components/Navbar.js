import React from 'react'
import request from 'utils/request'
import { useRouter } from 'next/router'
export default function Navbar() {
  const router = useRouter()
  return (
    <div className='flex justify-center bg-[#121212] text-white select-none text-xl lg:text-2xl' >
  
          {Object.entries(request).map(([key, {title, url}])=>{
              return(

                <h2 onClick={()=>router.push(`?genre=${key}`) }className='m-6 cursor-pointer hover:text-gray-300 active:text-yellow-400' key={key}>{title}</h2>
              )
          })}
    </div>
  )
}
