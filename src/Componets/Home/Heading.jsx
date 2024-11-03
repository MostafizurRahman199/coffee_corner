import React from 'react'

export default function Heading({title, subtitle}) {
  return (
    <div className='flex flex-col justify-center items-center gap-4 my-10'>
        <h1 className='text-4xl'>{title}</h1>
        <h2 className='text-xl'>{subtitle}</h2>
    </div>
  )
}
