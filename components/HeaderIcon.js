import React from 'react'

export default function HeaderIcon({Icon, title}) {
  return (
    <div className='mx-4 flex flex-col active:text-yellow-400 hover:text-gray-500 cursor-pointer lg:mx-6'>
         <Icon className="h-5"/>
         <p className='my-2 '>{title}</p>
    </div>
  )
}
