import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './Card';

export default function Allcoffees() {
    const coffees = useLoaderData();
  return (
    <div className='md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 mx-auto my-12 gap-8   justify-items-center'>
       {
        coffees.map(coffee => <Card  key={coffee.id} coffee={coffee} />)

       }
      
    </div>
  )
}
 