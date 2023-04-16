import React from 'react'
import "../../index.css";

export default function Cards({img,heading , intro}) {
  return (
    <div className='w-72 flex flex-col items-center justify-center shadow-md rounded-3xl h-64 '>
        <img src={img}  className='w-28' />
        <h1 className='text-2xl font-bold'>{heading}</h1>
        <p className=' font-light text-justify w-60' >{intro}</p>
    </div>
  )
}
