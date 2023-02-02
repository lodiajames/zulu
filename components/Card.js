import React from 'react'
import Image from 'next/image'
import { HandThumbUpIcon} from '@heroicons/react/24/outline'

export default function Card({result}) {
    const ROOT_URL = "https://image.tmdb.org/t/p/original/"
  return (
    <div className='p-3 hover:text-gray-200 cursor-pointer active:text-gray-400 xl:hover:scale-105 transition-transform duration-200'>
        <Image alt='trending pic'  layout='responsive' src={ROOT_URL + result.backdrop_path}  width={200} height={200}/>
         
          <div className='p-2'>
               <p className='truncate text-lg'> {result.overview}</p> 
               <h2 className='text-lg font-bold'>{result.title || result.name}</h2>
               <p className='flex items-center'>{result.release_date || result.first_air_date}
               <HandThumbUpIcon className='h-5 ml-3 mr-1' />
               {result.vote_count}
               </p>

          </div>
    </div>
  )
}
