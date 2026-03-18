import React from 'react'

const Card = ({image, title, description }) => {
  return (
     <div className='w-[20%] bg-white rounded flex flex-col gap-2 px-3 py-4 text-center'>
    <img className=' m-auto rounded' src={image} alt="" />
    <h1 className='font-bold'>{title}</h1>
    <hr />
    <p>{description}</p>
    <button className='border bg-blue-700 text-white rounded py-1'>Read more</button>
  </div> 
  )
}

export default Card