import React from 'react'
import './cards.css'

export default function Cards({img,heading , intro}) {
  return (
    <div className='cards'>
        <img src={img} />
        <h1>{heading}</h1>
        <p>{intro}</p>
    </div>
  )
}
