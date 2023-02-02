import React from 'react'
import Card from './Card'

export default function Results({results}) {
  return (
    <div className='bg-[#121212] text-white select-none sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {results.map(result=>(
        <Card key={result.id} result={result}/>
      ))}
    </div>
  )
}
