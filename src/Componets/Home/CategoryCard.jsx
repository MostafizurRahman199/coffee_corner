import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Card from './Card';

export default function CategoryCard() {
    const coffees = useLoaderData();
    const {category} = useParams();
    console.log(category);

    const categoryWiseCoffees = coffees.filter((coffee)=> coffee.category == category);
  return (
    <div className='md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 mx-auto my-12 gap-8 justify-items-center'>
       {
        categoryWiseCoffees.map(coffee => <Card  key={coffee.id} coffee={coffee} />)

       }
      
    </div>
  )
}
