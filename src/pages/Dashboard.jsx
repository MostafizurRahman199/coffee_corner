
import React, { useEffect, useState } from 'react'
import { getItems } from '../utils/storeCardToLocal'
import FvtCoffeeCard from '../Componets/FvtCoffeeCard';
import Heading from '../Componets/Home/Heading';

export default function Dashboard() {
   const [fvtCoffees , setFvtCoffees] = useState([])

   useEffect(()=>{
    const favouriteCoffees = getItems();
    setFvtCoffees(favouriteCoffees);
   }, [fvtCoffees])


 

  return (
    <div>
        <Heading title={"Your Favorite Coffee"} subtitle={`Find Your Favorite Coffee and make every sip a memorable experience!`}> </Heading>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 mx-auto my-12 gap-8 justify-items-center">
            {fvtCoffees.map(coffee => (
                <FvtCoffeeCard key={coffee.id} coffee={coffee} />
            ))}


          
        </div>
    </div>
  )
}
